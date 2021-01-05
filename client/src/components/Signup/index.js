import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
// import GoogleLoginComp from "../GoogleLogin/index";
// import GoogleLogoutComp from "../GoogleLogout/index";
// import db from "../../firebase";
import "./style.css";

function SignUp() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
    password: (val) => val.length > 8 && /^[\w.]+$/i.test(val),
  };

  // Validate function tht updates state and returns true if all rules pass
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
    }
    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };

  // Render method to display field errors
  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}</p>;
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
        password: "",
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
    console.log("this worked in signup component");
    if (!validate()) {
      return;
    }
    // db.collection("userLogin")
    //   .add({
    //     email: inputs.email,
    //     password: inputs.password,
    //   })
    //   .then(() => {
    //     handleServerResponse(true, "Signup Successful!");
    //     alert("You've successfully signed up!");
    //   })
    //   .catch((err) => {
    //     handleServerResponse(false, "Signup Failed!");
    //     alert(err.message);
    //   });
    setServerState({ submitting: true });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="spacing">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email SIGN UP"
          value={inputs.email}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("email")}
      </div>
      <div className="spacing">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password SIGN UP"
          value={inputs.password}
          onChange={handleOnChange}
        ></Form.Control>
        {renderFieldError("password")}
      </div>
      <button className="btn btn-primary mb-10" type="submit">
        Sign Up
      </button>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : "successMsg"}></p>
      )}
    </Form>
  );
}

export default SignUp;
