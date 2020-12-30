import React from "react";
import Login from "../components/Login/index";
import Footer from "../components/Footer/index";

function Signup() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <h1>Signup to be a Part of Our Every Growing Community</h1>
              </div>
              <div className="card-body">
                <Login></Login>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default Signup;
