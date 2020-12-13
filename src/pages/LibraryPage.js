import React from "react";
import Footer from "../components/Footer/index";

const headerStyle = {
  color: "red",
};
function Library() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <h1 style={headerStyle}>
                  The Library Page is Currently Under Construction
                </h1>
                {/* <h1>Search Our Library for a Story that Speaks to You</h1> */}
              </div>
              <div className="card-body">
                <img
                  src={`${process.env.PUBLIC_URL}/images/construction.jpg`}
                  width="400px"
                  height="300px"
                  alt="under construction"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Library;
