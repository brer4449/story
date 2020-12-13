import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeframe: "",
      recipient: "",
      pricerange: "",
      genre: "",
      size: "",
      aspirations: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // handle submit here
    console.log("this generic form worked!");
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="mb-10">
          <Form.Label htmlFor="timeframe">Timeframe:</Form.Label>
          <Form.Control
            type="text"
            id="timeframe"
            name="timeframe"
            placeholder="Estimated Timeframe"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <div className="mb-10">
          <Form.Label htmlFor="recipient">Recipient:</Form.Label>
          <Form.Control
            type="text"
            id="recipient"
            name="recipient"
            placeholder="Who is the gift for?"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <div className="mb-10">
          <Form.Label htmlFor="pricerange">Price Range:</Form.Label>
          <Form.Control
            type="text"
            id="pricerange"
            name="pricerange"
            placeholder="What's your price range?"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <div className="mb-10">
          <Form.Label htmlFor="genre">Genre:</Form.Label>
          <Form.Control
            type="text"
            id="genre"
            name="genre"
            placeholder="What type of story is it?"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <div className="mb-10">
          <Form.Label htmlFor="size">Size of Project:</Form.Label>
          <Form.Control
            type="text"
            id="size"
            name="size"
            placeholder="How large will the project be?"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <div className="mb-10">
          <Form.Label htmlFor="aspirations">
            Aspirations for Project:
          </Form.Label>
          <Form.Control
            type="text"
            id="aspirations"
            name="aspirations"
            placeholder="What are your hopes/goals for the project?"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    );
  }
}
export default ClientForm;
