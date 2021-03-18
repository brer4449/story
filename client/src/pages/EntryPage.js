import React from "react";
import Footer from "../components/Footer/index";

function Entry() {
  return (
    <>
      <div className="container-fluid">
        <div className="card text-center">
          <div className="card-body">
            <h1 className="pt-5">About Stories Told</h1>
            <p className="p-5 mx-5">
              Storytelling is such an important part of connecting with the
              people we love. These memories are what keeps friends and family
              together, but storytelling is actually really hard. When we tell
              stories we ramble, we get distracted, we forget important pieces,
              we bury the lead. That is where Stories Told comes in! We will
              help turn your stories into a work of art that will make for an
              absolutely tear-jerking gift or a treasured memento.
            </p>
            <h1 className="text-center pt-5">Our Team</h1>
            <div className="row py-4">
              <div className="col-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                ></img>
              </div>
              <div className="col-8">
                <h1>TEXT</h1>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-8">
                <h1>TEXT</h1>
              </div>
              <div className="col-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                ></img>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                ></img>
              </div>
              <div className="col-8">
                <h1>TEXT</h1>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-8">
                <h1>TEXT</h1>
              </div>
              <div className="col-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                ></img>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                ></img>
              </div>
              <div className="col-8">
                <h1>TEXT</h1>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-8">
                <h1>TEXT</h1>
              </div>
              <div className="col-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  );
}

export default Entry;
