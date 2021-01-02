import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./style.css";
import db from "../../firebase";

const ClientForm = () => {
  const [timeFrame, setTimeFrame] = useState("");
  const [recipient, setRecipient] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [genre, setGenre] = useState("");
  const [size, setSize] = useState("");
  const [aspirations, setAspirations] = useState("");
  // const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true);
    db.collection("application")
      .add({
        timeFrame: timeFrame,
        recipient: recipient,
        priceRange: priceRange,
        genre: genre,
        size: size,
        aspirations: aspirations,
      })
      .then(() => {
        alert("Your application has been submitted!");
        // setLoader(false);
      })
      .catch((err) => {
        alert(err.message);
        // setLoader(false);
      });
    setTimeFrame("");
    setRecipient("");
    setPriceRange("");
    setGenre("");
    setSize("");
    setAspirations("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-10">
        <Form.Label htmlFor="timeFrame">Time Frame:</Form.Label>
        <Form.Control
          type="text"
          id="timeFrame"
          name="timeFrame"
          placeholder="Estimated Timeframe"
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
        ></Form.Control>
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="recipient">Recipient:</Form.Label>
        <Form.Control
          type="text"
          id="recipient"
          name="recipient"
          placeholder="Who is the gift for?"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        ></Form.Control>
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="priceRange">Price Range:</Form.Label>
        <Form.Control
          type="text"
          id="priceRange"
          name="priceRange"
          placeholder="What's your price range?"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        ></Form.Control>
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="genre">Genre:</Form.Label>
        <Form.Control
          type="text"
          id="genre"
          name="genre"
          placeholder="What type of story is it?"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        ></Form.Control>
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="size">Size of Project:</Form.Label>
        <Form.Control
          type="text"
          id="size"
          name="size"
          placeholder="How large will the project be?"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        ></Form.Control>
      </div>
      <div className="mb-10">
        <Form.Label htmlFor="aspirations">Aspirations for Project:</Form.Label>
        <Form.Control
          type="text"
          id="aspirations"
          name="aspirations"
          placeholder="What are your hopes/goals for the project?"
          value={aspirations}
          onChange={(e) => setAspirations(e.target.value)}
        ></Form.Control>
      </div>
      <button
        className={
          "btn btn-primary mb-10 " +
          (timeFrame === "" ||
          recipient === "" ||
          priceRange === "" ||
          genre === "" ||
          size === "" ||
          aspirations === ""
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
export default ClientForm;
