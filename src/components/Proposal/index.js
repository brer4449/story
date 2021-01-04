import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import db from "../../firebase";

const Proposal = () => {
  // https://formspree.io/blog/react-forms-2/
  const [inputs, setInputs] = useState({
    communication: "",
    whatsNeeded: "",
    priceRange: "",
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
    communication: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    whatsNeeded: (val) => !!val,
    priceRange: (val) => !!val,
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
        communication: "",
        whatsNeeded: "",
        priceRange: "",
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
        communication: inputs.communication,
        whatsNeeded: inputs.whatsNeeded,
        priceRange: inputs.priceRange,
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
        <Form.Label htmlFor="communication">
          Preferred Method of Communication:
        </Form.Label>
        <Form.Control
          required
          type="text"
          id="communication"
          name="communication"
          placeholder="Preferred Method of Contact Here"
          value={inputs.communication}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("communication")}
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="whatsNeeded">
          This is What You Need from the Client to be Successful:
        </Form.Label>
        <Form.Control
          required
          type="text"
          id="whatsNeeded"
          name="whatsNeeded"
          placeholder="How Can This Project Succeed?"
          value={inputs.whatsNeeded}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("whatsNeeded")}
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="priceRange">What's Your Rate:</Form.Label>
        <Form.Control
          required
          type="text"
          id="priceRange"
          name="priceRange"
          placeholder="How Much Do You Charge per Story?"
          value={inputs.priceRange}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("priceRange")}
      </div>
      <button
        className={"btn btn-primary mb-10 "}
        disabled={serverState.submitting}
        type="submit"
      >
        Submit
      </button>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </Form>
  );
};

export default Proposal;
