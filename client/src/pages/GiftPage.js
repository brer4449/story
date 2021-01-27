import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import API from "../utils/API";
import Proposal from "../components/Proposal/index";
import Footer from "../components/Footer/index";

function Gift() {
  const [inputs, setInputs] = useState({
    timeFrame: "",
    recipient: "",
    priceRange: "",
    genre: "",
    size: "",
    specifics: "",
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
        <p className="errorMsg">Please enter a valid {field} and try again.</p>
      );
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
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
        timeFrame: "",
        recipient: "",
        priceRange: "",
        genre: "",
        size: "",
        specifics: "",
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
    //   .catch((r) => {
    //     console.error(err)
    //   });
    if (inputs) {
      API.saveFormData({
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
                <div>
                  <h1>Story Sample</h1>
                  <small>
                    by{" "}
                    <em>
                      <a href={"/Author"}>Author</a>
                    </em>
                  </small>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eget mauris placerat odio rutrum hendrerit. Ut
                    molestie tincidunt ex at dignissim. Nullam a leo massa. Sed
                    finibus libero sed tellus porttitor, id maximus mauris
                    egestas. Vivamus scelerisque dolor dolor, quis maximus ante
                    pulvinar id. Mauris at augue efficitur arcu molestie mattis.
                    Etiam vulputate ac mi nec eleifend. Proin in dignissim arcu,
                    in pellentesque quam. Cras sodales ultrices tellus, quis
                    pellentesque ligula consequat et. Etiam tempus odio ipsum,
                    sed euismod dui tristique id. Suspendisse ut quam vel enim
                    rutrum aliquet.
                  </p>
                  <p>
                    Vivamus ex turpis, porta sit amet dolor ut, molestie tempus
                    risus. Suspendisse id erat in lectus tincidunt scelerisque
                    nec eget dui. Quisque fringilla erat eu odio molestie
                    efficitur. Proin eu vehicula purus. Nam egestas ac urna ac
                    elementum. Donec a molestie lorem. Quisque consequat nunc
                    ex, ut lobortis purus eleifend quis. Vestibulum tempus
                    luctus auctor. Nulla semper diam a risus vestibulum cursus.
                    Nulla rhoncus nisl mollis, molestie lorem et, hendrerit
                    nibh. Praesent at tincidunt augue, nec sodales eros. Sed a
                    bibendum justo.
                  </p>
                  <p>
                    Phasellus eu tincidunt ante, scelerisque volutpat ex. Nunc
                    nec turpis sit amet nibh fermentum hendrerit et non quam.
                    Fusce sodales risus vel enim viverra efficitur. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Vestibulum consequat consectetur
                    pretium. Etiam tempus blandit vehicula. Curabitur
                    pellentesque elit quis faucibus convallis. Nam quis arcu ac
                    felis aliquam accumsan in id massa. Fusce id eros vel lacus
                    consequat hendrerit. Donec in cursus augue, nec convallis
                    velit. Fusce at euismod leo, at pellentesque dui. Mauris
                    egestas ornare sapien, id vestibulum est convallis vitae.
                    Donec vestibulum urna at mattis facilisis. Pellentesque
                    mattis quis neque sed posuere.
                  </p>
                  <p>
                    Integer finibus lorem et suscipit fermentum. Donec quis
                    venenatis velit. Quisque sodales, eros eu porttitor aliquam,
                    enim lorem varius enim, ac faucibus nulla justo ut nisl. Ut
                    efficitur at lacus vel porta. Donec fringilla nibh a lacus
                    scelerisque vestibulum. Vivamus eros risus, dapibus
                    scelerisque risus sed, commodo fermentum quam. Aliquam
                    consequat est mauris, vel tristique arcu tempor tempor.
                    Aenean a posuere mi, at rhoncus diam. Suspendisse ultricies
                    massa metus, in vulputate augue pharetra ac. Aenean
                    convallis lacus magna, sed varius lorem vestibulum vel. Nam
                    vehicula pretium condimentum.
                  </p>

                  <p>
                    Pellentesque sed nisl pretium, venenatis turpis nec,
                    faucibus lectus. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Pellentesque est lacus, tristique
                    vitae lorem id, congue ultrices enim. Nulla sem odio, dictum
                    nec congue vel, efficitur sit amet augue. Morbi sagittis
                    vitae libero vitae laoreet. Sed elit tellus, elementum ac
                    ante nec, cursus scelerisque odio. Morbi dignissim, libero
                    consectetur sollicitudin ullamcorper, mi est sodales nibh,
                    sit amet sodales velit libero sed lectus. Proin gravida
                    magna nisi, sit amet viverra felis lacinia vitae. Ut ornare
                    ex vitae felis rhoncus, at pellentesque metus condimentum.
                  </p>
                </div>
                <br></br>
                <h2>
                  To Have Your Story Told Like The One Above, Simply Fill Out an
                  Application and be Matched with One of Our Many Story Tellers
                </h2>
                <br></br>
                <div>
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-10">
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
                    <div className="mb-10">
                      <Form.Label htmlFor="recipient">Recipient:</Form.Label>
                      <Form.Control
                        type="text"
                        id="recipient"
                        name="recipient"
                        placeholder="Who is this gift for?"
                        value={inputs.recipient}
                        onChange={handleOnChange}
                      ></Form.Control>
                      {renderFieldError("recipient")}
                    </div>
                    <div className="mb-10">
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
                    <div className="mb-10">
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
                    <div className="mb-10">
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
                    <div className="mb-10">
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
                    </div>
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
                  <Proposal></Proposal>
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
