import React, { useState, useRef } from "react";
import { Container, Form, Alert, Button, Card } from "react-bootstrap";
// import GoogleLoginComp from "../GoogleLogin/index";
// import GoogleLogoutComp from "../GoogleLogout/index";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/Dashboard");
    } catch {
      setError("Failed to sign in. Check your credentials and try again.");
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email LOGIN"
                    required
                    ref={emailRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password LOGIN"
                    required
                    ref={passwordRef}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="w-100" disabled={loading}>
                  Log In
                </Button>
                <div className="w-100 text-center mt-3">
                  <Link to="/Forgot-Password">Forgot Password?</Link>
                </div>
                {/* <GoogleLoginComp></GoogleLoginComp>
      <GoogleLogoutComp></GoogleLogoutComp> */}
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an Account? <Link to="/Signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
