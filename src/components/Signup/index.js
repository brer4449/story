import React, { useState, useRef } from "react";
import { Container, Form, Alert, Card, Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      setLoading(true);
      // this does the signup for us
      await signup(emailRef.current.value, passwordRef.current.value);
      // this bring us to the Entry page
      history.push("/Entry");
    } catch {
      setError("Failed to create an account");
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
              <h2 className="text-center mb-4">Signup</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    required
                    ref={emailRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    required
                    ref={passwordRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    required
                    ref={passwordConfirmRef}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="w-100" disabled={loading}>
                  Signup
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already Have an Account? <Link to="/Login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
