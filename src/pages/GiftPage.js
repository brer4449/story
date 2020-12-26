import React from "react";
import ClientForm from "../components/ClientForm/index";
import Proposal from "../components/Proposal/index";
import Footer from "../components/Footer/index";

function Gift() {
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <h1>Get a Gift That Never Gets Old!</h1>
              </div>
              <div className="card-body"></div>
              <ClientForm></ClientForm>
              <Proposal></Proposal>
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

export default Gift;
