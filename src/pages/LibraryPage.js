import React from "react";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer/index";

function Library() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <img
                  className="logo"
                  src="https://images.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg"
                  alt="storytold logo"
                  height="100px"
                  width="100px"
                />
                <h1 className="header">
                  <Link to="./Library">Library </Link>{" "}
                  <Link to="./Gift">Gift </Link>
                  <Link to="./Signup">Signup</Link>{" "}
                </h1>
              </div>
              <div className="card-body">
                <h1>This is the Library page</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
