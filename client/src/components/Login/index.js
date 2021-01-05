import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
// import GoogleLoginComp from "../GoogleLogin/index";
// import GoogleLogoutComp from "../GoogleLogout/index";
// import db from "../../firebase";
import "./style.css";

function Login() {
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

  // Validate function that updates state and returns true if all rules pass
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
    if (Object.keys(fieldErrors.length > 0)) {
      validate();
    }
  }, [inputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this worked! in login component");
    if (!validate()) {
      return;
    }
    // db.collection("userLogin")
    //   .add({
    //     email: inputs.email,
    //     passsword: inputs.password,
    //   })
    //   .then(() => {
    //     handleServerResponse(true, "Login Successful!");
    //     alert("You've successfully logged in!");
    //   })
    //   .catch((err) => {
    //     handleServerResponse(false, "Login Failed!");
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
          placeholder="Enter Email LOGIN"
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
          placeholder="Enter Password LOGIN"
          value={inputs.password}
          onChange={handleOnChange}
        ></Form.Control>
      </div>
      <div>
        <Form.Label htmlFor="remember">Remember Me</Form.Label>
        <Form.Control
          type="checkbox"
          id="remember"
          name="remember"
        ></Form.Control>
      </div>
      <button className="btn btn-primary mb-10" type="submit">
        Log In
      </button>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : "successMsg"}></p>
      )}
      <p className="text-right">
        <a href="#">Forgot Password?</a>
      </p>
      {/* <GoogleLoginComp></GoogleLoginComp>
      <GoogleLogoutComp></GoogleLogoutComp> */}
    </Form>
  );
}

export default Login;
