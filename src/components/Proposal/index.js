import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import db from "../../firebase";

const Proposal = () => {
  // https://formspree.io/blog/react-forms-2/
  const [inputs, setInputs] = useState({
    email: "",
    requirement: "",
    rate: "",
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
    email: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    requirement: (val) => !!val,
    rate: (val) => !!val,
  };

  // Validate function that updates state, and returns true if all rules pass
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
        email: "",
        requirement: "",
        rate: "",
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
    db.collection("proposal")
      .add({
        email: inputs.email,
        requirement: inputs.requirement,
        rate: inputs.rate,
      })
      .then(() => {
        alert("Your proposal has been submitted!");
      })
      .catch((err) => {
        alert(err.message);
      });
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
    <Form onSubmit={handleSubmit} noValidate>
      <div className="mb-10">
        <Form.Label htmlFor="email">Email Address:</Form.Label>
        <Form.Control
          required
          type="text"
          id="email"
          name="email"
          placeholder="What's your email address?"
          value={inputs.email}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("email")}
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="requirement">
          This is What You Need from the Client to be Successful:
        </Form.Label>
        <Form.Control
          required
          type="text"
          id="requirement"
          name="requirement"
          placeholder="What do you require from the client for this project to be successful?"
          value={inputs.requirement}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("requirement")}
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="rate">What's Your Rate:</Form.Label>
        <Form.Control
          required
          type="text"
          id="rate"
          name="rate"
          placeholder="How Much Do You Charge per Story?"
          value={inputs.rate}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("rate")}
      </div>
      <button
        className={"btn btn-primary mb-10 "}
        disabled={serverState.submitting}
        type="submit"
      >
        Submit
      </button>
      {/* DO WITH JOSEPH! */}
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : "successMsg"}>
          {serverState.status.msg}
        </p>
      )}
      {/* setTimeout(() => {
          <p className={!serverState.status.ok ? "errorMsg" : "successMsg"}>
            {serverState.status.msg}
          </p>;
        }, 3000)} */}
    </Form>
  );
};

export default Proposal;
