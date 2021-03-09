import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import API from "../utils/API";
import Footer from "../components/Footer/index";

function Gift() {
  const form = document.FC;
  const [inputs, setInputs] = useState({
    recipient: { myself: false, family: false, friend: false, other: false },
    type: {
      animation: false,
      video: false,
      audio: false,
      song: false,
      written: false,
      unsureType: false,
    },
    storyteller: {
      me: false,
      giftee: false,
      someoneElse: false,
      unsureStoryTeller: false,
    },
    timeFrame: {
      oneMo: false,
      twoMo: false,
      threeMo: false,
      unsureTimeFrame: false,
    },
  });
  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  // State to track field errors
  const [fieldErrors, setFieldErrors] = useState({});

  // Validation rules for each input field
  const validationRules = {
    timeFrame: (val) => !!val,
    recipient: (val) => !!val,
    priceRange: (val) => !!val,
    genre: (val) => !!val,
    size: (val) => !!val,
    specifics: (val) => !!val,
  };

  // My own attempt at validation rules
  // https://stackoverflow.com/questions/11787665/making-sure-at-least-one-checkbox-is-checked
  // TODO: set the field error for that question block
  const validateAtLeastOneChecked = function () {
    if (
      !inputs.recipient.myself ||
      !inputs.recipient.family ||
      !inputs.recipient.friend ||
      !inputs.recipient.other
    ) {
      console.log("RECIPIENTS ALL FALSE");
    }
    if (
      !inputs.type.animation ||
      !inputs.type.video ||
      !inputs.type.audio ||
      !inputs.type.song ||
      !inputs.type.written ||
      !inputs.type.unsureType
    ) {
      console.log("TYPES ALL FALSE");
    }
    if (
      !inputs.storyteller.me ||
      !inputs.storyteller.giftee ||
      !inputs.storyteller.someoneElse ||
      !inputs.storyteller.unsureStoryTeller
    ) {
      console.log("STORYTELLERS ALL FALSE");
    }
    if (
      !inputs.timeFrame.oneMo ||
      !inputs.timeFrame.twoMo ||
      !inputs.timeFrame.threeMo ||
      !inputs.timeFrame.unsureTimeFrame
    ) {
      console.log("TIMEFRAMES ALL FALSE");
    }
  };

  // Validate function that updates state and returns true if all rules pass
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };

  // Render method to display field errors
  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return (
        // <p className="errorMsg">Please enter a valid {field} and try again.</p>
        <p className="errorMsg">
          Please check that an answer to questions about {field} has at least
          one check and try again
        </p>
      );
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    validateAtLeastOneChecked();
    // console.log(e.target.id);
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.checked,
    }));
  };

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        // recipient: "",
        // type: "",
        // storyteller: "",
        // timeFrame: "",
      });
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    // ***************COMMENTED THIS OUT SO IT DOESN'T SEND AN EMAIL EACH TIME WE SUBMIT A FORM******************
    // axios({
    //   method: "POST",
    //   url: `https://formspree.io/f/xyyjvbzz`,
    //   data: inputs,
    // })
    //   .then((r) => {
    //     console.log(r)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   });
    if (inputs) {
      API.saveClientFormData({
        timeframe: inputs.timeFrame,
        recipient: inputs.recipient,
        pricerange: inputs.priceRange,
        genre: inputs.genre,
        size: inputs.size,
        details: inputs.specifics,
      })
        .then((res) =>
          handleServerResponse(true, "Thanks for submitting your application!")
        )
        .catch((err) => handleServerResponse(false, err.response.data.error));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <h1>Give a Gift That Never Gets Old!</h1>
              </div>
              <div className="card-body">
                {/* SAMPLE STORY HERE */}
                <br></br>
                <h2>
                  To Have Your Story Told Like The One Above, Simply Fill Out an
                  Application and be Matched with One of Our Many Story Tellers
                </h2>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <Form name="FC" onSubmit={handleSubmit}>
                    <div className="mb-10 py-3 py-3">
                      <h4>Who is this for?</h4>
                      <div>
                        <label htmlFor="myself">Myself</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="myself"
                          name="myself"
                          value="myself"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="family">Family member</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="family"
                          name="family"
                          value="family"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="friend">Friend</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="friend"
                          name="friend"
                          value="friend"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="other">Other</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="other"
                          name="other"
                          value="other"
                        ></input>
                      </div>
                    </div>
                    <div className="mb-10 py-3">
                      <h4>What type of gift?</h4>
                      <div>
                        <label htmlFor="animation">Video with Animation</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="animation"
                          name="animation"
                          value="animation"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="video">Video of storyteller</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="video"
                          name="video"
                          value="video"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="audio">Audio Recording</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="audio"
                          name="audio"
                          value="audio"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="song">Song</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="song"
                          name="song"
                          value="song"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="written">Written Story</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="written"
                          name="written"
                          value="written"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="unsureType">Not Sure</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="unsureType"
                          name="unsureType"
                          value="unsureType"
                        ></input>
                      </div>
                    </div>
                    <div className="mb-10 py-3">
                      <h4>Who is telling the story?</h4>
                      <div>
                        <label htmlFor="me">Me</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="me"
                          name="me"
                          value="me"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="giftee">The Giftee</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="giftee"
                          name="giftee"
                          value="giftee"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="someoneElse">Someone Else</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="someoneElse"
                          name="someoneElse"
                          value="someoneElse"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="unsureStoryteller">Not Sure</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="unsureStoryteller"
                          name="unsureStoryteller"
                          value="unsureStoryteller"
                        ></input>
                      </div>
                    </div>
                    <div className="mb-10 py-3">
                      <h4>How soon do you need the gift completed?</h4>
                      <div>
                        <label htmlFor="oneMo">Less than a month</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="oneMo"
                          name="oneMo"
                          value="oneMo"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="twoMo">1-2 months</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="twoMo"
                          name="twoMo"
                          value="twoMo"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="threeMo">Over 2 months</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="threeMo"
                          name="threeMo"
                          value="threeMo"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="unsureTimeFrame">Not Sure</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="unsureTimeFrame"
                          name="unsureTimeFrame"
                          value="unsureTimeFrame"
                        ></input>
                      </div>
                    </div>

                    {/* <div className="mb-10 py-3">
                      <Form.Label htmlFor="timeFrame">
                        Estimate Time Frame:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="timeFrame"
                        name="timeFrame"
                        placeholder="How long will this project take?"
                        value={inputs.timeFrame}
                        onChange={handleOnChange}
                      ></Form.Control>
                      {renderFieldError("timeframe")}
                    </div>
                    <div className="mb-10 py-3">
                      <Form.Label htmlFor="priceRange">Price Range:</Form.Label>
                      <Form.Control
                        type="text"
                        id="priceRange"
                        name="priceRange"
                        placeholder="What is your price range?"
                        value={inputs.priceRange}
                        onChange={handleOnChange}
                      ></Form.Control>
                      {renderFieldError("pricerange")}
                    </div>
                    <div className="mb-10 py-3">
                      <Form.Label htmlFor="genre">Genre:</Form.Label>
                      <Form.Control
                        type="text"
                        id="genre"
                        name="genre"
                        placeholder="What type of story is it?"
                        value={inputs.genre}
                        onChange={handleOnChange}
                      ></Form.Control>
                      {renderFieldError("genre")}
                    </div>
                    <div className="mb-10 py-3">
                      <Form.Label htmlFor="size">Size of Project:</Form.Label>
                      <Form.Control
                        type="text"
                        id="size"
                        name="size"
                        placeholder="How large will the project be?"
                        value={inputs.size}
                        onChange={handleOnChange}
                      ></Form.Control>
                      {renderFieldError("size")}
                    </div>
                    <div className="mb-10 py-3">
                      <Form.Label htmlFor="specifics">
                        Specifics About Project:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="specifics"
                        name="specifics"
                        placeholder="What are some things we should know about the project?"
                        value={inputs.specifics}
                        onChange={handleOnChange}
                      ></Form.Control>
                      {renderFieldError("specifics")}
                    </div> */}
                    <button className={"btn btn-primary mb-10"} type="submit">
                      Submit
                    </button>
                    {serverState.status && (
                      <p
                        className={
                          !serverState.status.ok ? "errorMsg" : "successMsg"
                        }
                      >
                        {serverState.status.msg}
                      </p>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default Gift;
