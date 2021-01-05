import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./style.css";
import axios from "axios";
// import db from "../../firebase";

const ClientForm = () => {
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
  //State to track field errors
  const [fieldErrors, setFieldErrors] = useState({});

  //Validation rules for each input field
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
      return <p className="errorMsg">Please enter a valid {field}.</p>;
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
    // db.collection("application")
    //   .add({
    //     timeFrame: inputs.timeFrame,
    //     recipient: inputs.recipient,
    //     priceRange: inputs.priceRange,
    //     genre: inputs.genre,
    //     size: inputs.size,
    //     specifics: inputs.specifics,
    //   })
    //   .then(() => {
    //     alert("Your application has been submitted!");
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: `https://formspree.io/f/xyyjvbzz`,
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, "Thanks for submitting your application!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-10">
        <Form.Label htmlFor="timeFrame">Estimated Time Frame:</Form.Label>
        <Form.Control
          type="text"
          id="timeFrame"
          name="timeFrame"
          placeholder="How long will this project take?"
          value={inputs.timeFrame}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("timeFrame")}
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="recipient">Recipient:</Form.Label>
        <Form.Control
          type="text"
          id="recipient"
          name="recipient"
          placeholder="Who is the gift for?"
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
          placeholder="What's your price range?"
          value={inputs.priceRange}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("priceRange")}
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
        <Form.Label htmlFor="specifics">Specifics About Project:</Form.Label>
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
      <button className={"btn btn-primary mb-10 "} type="submit">
        Submit
      </button>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : "successMsg"}>
          {serverState.status.msg}
        </p>
      )}
    </Form>
  );
};
export default ClientForm;
