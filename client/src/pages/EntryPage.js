import React from "react";
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";
import Footer from "../components/Footer/index";

function Entry() {
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
                <Signup></Signup>
                <em className="small">Already have an account?</em>{" "}
                <a className="small" href="/Login">
                  Login Here
                </a>
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

export default Entry;
