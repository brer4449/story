import React from "react";
import { Form } from "react-bootstrap";
// import GoogleLoginComp from "../GoogleLogin/index";
// import GoogleLogoutComp from "../GoogleLogout/index";
import "./style.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this worked! in login component");
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
          placeholder="Enter Email LOGIN"
        ></Form.Control>
      </div>
      <div className="spacing">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password LOGIN"
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
      <p className="text-right">
        <a href="#">Forgot Password?</a>
      </p>
      {/* <GoogleLoginComp></GoogleLoginComp>
      <GoogleLogoutComp></GoogleLogoutComp> */}
    </Form>
  );
}

export default Login;
