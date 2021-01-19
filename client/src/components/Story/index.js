import React from "react";
import "./styles.css";

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unsure: "",
    };
  }

  render(props) {
    return (
      <div className="card story-card">
        <div className="card-header">
          <h2>Story Name here</h2>
        </div>
        <div className="card-body">
          <p>Story body here</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ducimus voluptates perferendis pariatur mollitia
            expedita possimus ab molestiae harum? Nam minima animi vitae alias
            quis cumque aut amet. Necessitatibus, ratione.
          </p>
        </div>
      </div>
      // <------------ From friends card ----------->
      // <div className="card">
      //   <div className="img-container">
      //     <img alt={props.name} src={props.image} />
      //   </div>
      //   <div className="content">
      //     <ul>
      //       <li>
      //         <strong>Name:</strong> {props.name}
      //       </li>
      //       <li>
      //         <strong>Occupation:</strong> {props.occupation}
      //       </li>
      //       <li>
      //         <strong>Location:</strong> {props.location}
      //       </li>
      //     </ul>
      //   </div>
      //   <span onClick={() => props.removeFriend(props.id)} className="remove">
      //     𝘅
      //   </span>
      // </div>
    );
  }
}

export default Story;
