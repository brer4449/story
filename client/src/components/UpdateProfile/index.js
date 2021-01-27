import React, { useRef, useState } from "react";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
// import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { currentUser, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  /**************** USE THIS SOMEWHERE? *************/
  // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
  // const isMountedComponent = useRef(true);
  // useEffect(() => {
  //   if (isMountedComponent.current) {
  //   }
  //   return () => {
  //     isMountedComponent.current = false;
  //   };
  // });
  // Don't think it's in this component, I think it's in the Private route component or forgot password
  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    const promises = [];
    setLoading(true);
    setError("");

    // if our email changes calling the update email with our current email and adding it to array of promises
    // if (emailRef.current.value !== currentUser.email) {
    //   promises.push(updateEmail(emailRef.current.value));
    // }
    if (passwordRef.current.value) {
      // promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update profile.");
      })
      .finally(() => {
        setLoading(false);
      });
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
              <h2 className="text-center mb-4">Update Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    ref={emailRef}
                    // defaultValue={currentUser.email}
                    disabled
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same."
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to keep the same."
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="w-100" disabled={loading}>
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/Dashboard">Cancel</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
