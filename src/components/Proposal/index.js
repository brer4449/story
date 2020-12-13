import React from "react";
import { Form } from "react-bootstrap";
import "./styles.css";

class Proposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      communication: "",
      whatsneeded: "",
      pricerange: "",
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
    console.log("this proposal form worked!");
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="mb-10">
          <Form.Label htmlFor="communication">
            Preferred Method of Communication:
          </Form.Label>
          <Form.Control
            type="text"
            id="communication"
            name="communication"
            placeholder="Preferred Method of Contact Here"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <div className="mb-10">
          <Form.Label htmlFor="whatsneeded">
            This is What You Need from the Client to be Successful:
          </Form.Label>
          <Form.Control
            type="text"
            id="whatsneeded"
            name="whatsneeded"
            placeholder="How Can This Project Succeed?"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <div className="mb-10">
          <Form.Label htmlFor="pricerange">What's Your Rate:</Form.Label>
          <Form.Control
            type="text"
            id="pricerange"
            name="pricerange"
            placeholder="How Much Do You Charge per Story?"
            onChange={this.handleInputChange}
          ></Form.Control>
        </div>
        <button className="btn btn-primary mb-10" type="submit">
          Submit
        </button>
      </Form>
    );
  }
}

export default Proposal;
