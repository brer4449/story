import React from "react";
import { Form } from "react-bootstrap";
// import GoogleLoginComp from "../GoogleLogin/index";
// import GoogleLogoutComp from "../GoogleLogout/index";
import "./style.css";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this worked in signup component");
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
        ></Form.Control>
      </div>
      <div className="spacing">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password SIGN UP"
        ></Form.Control>
      </div>
      <button className="btn btn-primary mb-10" type="submit">
        Sign Up
      </button>
    </Form>
  );
}

export default SignUp;
