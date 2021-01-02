import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./styles.css";
import db from "../../firebase";

const Proposal = () => {
  const [communication, setCommunication] = useState("");
  const [whatsNeeded, setWhatsNeeded] = useState("");
  const [priceRange, setPriceRange] = useState("");
  // const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true);
    db.collection("proposal")
      .add({
        communication: communication,
        whatsNeeded: whatsNeeded,
        priceRange: priceRange,
      })
      .then(() => {
        alert("Your proposal has been submitted!");
        // setLoader(false);
      })
      .catch((err) => {
        alert(err.message);
        // setLoader(false);
      });
    setCommunication("");
    setWhatsNeeded("");
    setPriceRange("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-10">
        <Form.Label htmlFor="communication">
          Preferred Method of Communication:
        </Form.Label>
        <Form.Control
          type="text"
          id="communication"
          name="communication"
          placeholder="Preferred Method of Contact Here"
          value={communication}
          onChange={(e) => setCommunication(e.target.value)}
        ></Form.Control>
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="whatsNeeded">
          This is What You Need from the Client to be Successful:
        </Form.Label>
        <Form.Control
          type="text"
          id="whatsNeeded"
          name="whatsNeeded"
          placeholder="How Can This Project Succeed?"
          value={whatsNeeded}
          onChange={(e) => setWhatsNeeded(e.target.value)}
        ></Form.Control>
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="priceRange">What's Your Rate:</Form.Label>
        <Form.Control
          type="text"
          id="priceRange"
          name="priceRange"
          placeholder="How Much Do You Charge per Story?"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        ></Form.Control>
      </div>
      <button
        className={
          "btn btn-primary mb-10 " +
          (communication === "" || whatsNeeded === "" || priceRange === ""
            ? "disabled"
            : "")
        }
        type="submit"
      >
        Submit
      </button>
    </Form>
  );
};

export default Proposal;
