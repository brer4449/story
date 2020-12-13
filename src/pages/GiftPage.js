import React from "react";
import ClientForm from "../components/ClientForm/index";
import Footer from "../components/Footer/index";

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
      <Footer></Footer>
    </div>
  );
}

export default Gift;
