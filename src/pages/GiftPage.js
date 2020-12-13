import React from "react";
// import Footer from "../components/Footer/index";
import ClientForm from "../components/ClientForm/index";

function Gift() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <h1>Get a Gift That Never Gets Old!</h1>
              </div>
              <div className="card-body"></div>
              <ClientForm></ClientForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
