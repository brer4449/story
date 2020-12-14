import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this worked!");
    // https://blog.logrocket.com/forms-in-react-in-2020/ need to create api for login functionality
    // const formData = new FormData(e.target);
    // api.login(formData.get("email"), formData.get("password"));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="spacing">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
        ></Form.Control>
      </div>
      <div className="spacing">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password"
        ></Form.Control>
      </div>
      <button className="btn btn-primary mb-10" type="submit">
        Log In
      </button>
    </Form>
  );
}

export default Login;
