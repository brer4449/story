import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "../components/Signup/index";
import Footer from "../components/Footer/index";

function Entry() {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup></Signup>
        </div>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  );
}

export default Entry;
