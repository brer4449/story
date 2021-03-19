import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
// import API from "../utils/API";
import Footer from "../components/Footer/index";

function Gift() {
  // TODO: change names on input fields to match these values !!!!
  const [inputs, setInputs] = useState({
    recipientmyself: false,
    recipientfamily: false,
    recipientfriend: false,
    recipientother: false,
    typeanimation: false,
    typevideo: false,
    typeaudio: false,
    typesong: false,
    typewritten: false,
    typeunsure: false,
    storytellerme: false,
    storytellergiftee: false,
    storytellersomeoneelse: false,
    storytellerundecided: false,
    timeframeonemonth: false,
    timeframetwomonths: false,
    timeframethreemonths: false,
    timeframeundetermined: false,
  });
  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  // State to track field errors
  const [fieldErrors, setFieldErrors] = useState({});

  // My own attempt at validation rules
  // https://stackoverflow.com/questions/11787665/making-sure-at-least-one-checkbox-is-checked
  // TODO: set the field error for that question block
  // when we submit form, want to check if each question has at least one TRUTHY value
  const validateAtLeastOneChecked = function () {
    let recipientCount = 0;
    let typeCount = 0;
    let storytellerCount = 0;
    let timeframeCount = 0;
    let hasErrors = false;
    let errors = {};

    // clear out field errors
    setFieldErrors({});

    // iterating over key: value pairs of inputs and checking to see if that key starts with said field, if it does, add to that field's count
    console.log(hasErrors);
    for (const [key, value] of Object.entries(inputs)) {
      if (key.startsWith("recipient")) {
        if (value) {
          recipientCount++;
        }
      }
      if (key.startsWith("type")) {
        if (value) {
          typeCount++;
        }
      }
      if (key.startsWith("storyteller")) {
        if (value) {
          storytellerCount++;
        }
      }
      if (key.startsWith("timeframe")) {
        if (value) {
          timeframeCount++;
        }
      }
    }

    if (recipientCount === 0) {
      errors["recipient"] = true;
      hasErrors = true;
    }
    if (typeCount === 0) {
      errors["type"] = true;
      hasErrors = true;
    }
    if (storytellerCount === 0) {
      errors["storyteller"] = true;
      hasErrors = true;
    }
    if (timeframeCount === 0) {
      errors["timeframe"] = true;
      hasErrors = true;
    }
    if (errors) {
      console.log("working");
      setFieldErrors((prev) => ({ ...prev, ...errors }));
    }
    console.log(!hasErrors);
    // returning NOT hasErrors because we want the value of this function to be a truthy or falsy value if at least one box is checked. Looking at the above if statements, hasErrors is true so it should return false that at least one box is checked
    return !hasErrors;
  };

  // Render method to display field errors
  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return (
        <p className="errorMsg">
          Please verify that questions pertaining to {field} have at least one
          check and try again
        </p>
      );
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    // set id & name to be recipientmyself, etc. instead of DOM traversal
    let stateName = e.target.parentElement.getAttribute("class") + e.target.id;
    setInputs((prev) => ({
      ...prev,
      [stateName]: e.target.checked,
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
        recipientmyself: false,
        recipientfamily: false,
        recipientfriend: false,
        recipientother: false,
        typeanimation: false,
        typevideo: false,
        typeaudio: false,
        typesong: false,
        typewritten: false,
        typeunsure: false,
        storytellerme: false,
        storytellergiftee: false,
        storytellersomeoneelse: false,
        storytellerundecided: false,
        timeframeonemonth: false,
        timeframetwomonths: false,
        timeframethreemonths: false,
        timeframeundetermined: false,
      });
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validateAtLeastOneChecked();
    }
  }, [inputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // this might need to be like the two lines below it
    if (!validateAtLeastOneChecked()) {
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
    //     console.log(r);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // TODO: update this so it handles checkbox input, not text input
    // if (inputs) {
    //   API.saveClientFormData({
    //     recipientmyself: inputs.recipientmyself,
    //     recipientfamily: inputs.recipientfamily,
    //     recipientfriend: inputs.recipientfriend,
    //     recipientother: inputs.recipientother,
    //     typeanimation: inputs.typeanimation,
    //     typevideo: inputs.typevideo,
    //     typeaudio: inputs.typeaudio,
    //     typesong: inputs.typesong,
    //     typewritten: inputs.typewritten,
    //     typeunsure: inputs.typeunsure,
    //     storytellerme: inputs.storytellerme,
    //     storytellergiftee: inputs.storytellergiftee,
    //     storytellersomeoneelse: inputs.storytellersomeoneelse,
    //     storytellerundecided: inputs.storytellerundecided,
    //     timeframeonemonth: inputs.timeframeonemonth,
    //     timeframetwomonths: inputs.timeframetwomonths,
    //     timeframethreemonths: inputs.timeframethreemonths,
    //     timeframeundetermined: inputs.timeframeundetermined,
    //   })
    //     .then((res) =>
    //       handleServerResponse(true, "Thanks for submitting your application!")
    //     )
    //     .catch((err) => handleServerResponse(false, err.response.data.error));
    // }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <h1>Give a Gift That Never Gets Old!</h1>
              </div>
              <div className="card-body">
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
                      <div className="recipient">
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
                      <div className="recipient">
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
                      <div className="recipient">
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
                      <div className="recipient">
                        <label htmlFor="other">Other</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="other"
                          name="other"
                          value="other"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                    </div>
                    {renderFieldError("recipient")}
                    <div className="mb-10 py-3">
                      <h4>What type of gift?</h4>
                      <div className="type">
                        <label htmlFor="animation">Video with Animation</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="animation"
                          name="animation"
                          value="animation"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="type">
                        <label htmlFor="video">Video of storyteller</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="video"
                          name="video"
                          value="video"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="type">
                        <label htmlFor="audio">Audio Recording</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="audio"
                          name="audio"
                          value="audio"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="type">
                        <label htmlFor="song">Song</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="song"
                          name="song"
                          value="song"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="type">
                        <label htmlFor="written">Written Story</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="written"
                          name="written"
                          value="written"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="type">
                        <label htmlFor="unsure">Not Sure</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="unsure"
                          name="unsure"
                          value="unsure"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                    </div>
                    {renderFieldError("type")}
                    <div className="mb-10 py-3">
                      <h4>Who is telling the story?</h4>
                      <div className="storyteller">
                        <label htmlFor="me">Me</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="me"
                          name="me"
                          value="me"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="storyteller">
                        <label htmlFor="giftee">The Giftee</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="giftee"
                          name="giftee"
                          value="giftee"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="storyteller">
                        <label htmlFor="someoneelse">Someone Else</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="someoneelse"
                          name="someoneelse"
                          value="someoneelse"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="storyteller">
                        <label htmlFor="undecided">Not Sure</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="undecided"
                          name="undecided"
                          value="undecided"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                    </div>
                    {renderFieldError("storyteller")}
                    <div className="mb-10 py-3">
                      <h4>How soon do you need the gift completed?</h4>
                      <div className="timeframe">
                        <label htmlFor="onemonth">Less than a month</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="onemonth"
                          name="onemonth"
                          value="onemonth"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="timeframe">
                        <label htmlFor="twomonths">1-2 months</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="twomonths"
                          name="twomonths"
                          value="twomonths"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="timeframe">
                        <label htmlFor="threemonths">Over 2 months</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="threemonths"
                          name="threemonths"
                          value="threemonths"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                      <div className="timeframe">
                        <label htmlFor="undetermined">Not Sure</label>
                        <input
                          style={{ margin: "8px" }}
                          type="checkbox"
                          id="undetermined"
                          name="undetermined"
                          value="undetermined"
                          onChange={handleOnChange}
                        ></input>
                      </div>
                    </div>
                    {renderFieldError("timeframe")}
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
