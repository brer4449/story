import React from "react";
import Footer from "../components/Footer/index";
// import axios from "axios";
// import API from "../utils/API";

function Home() {
  // useEffect(() => {
  // axios({
  //   method: "POST",
  //   url: "/api/users",
  //   data: "test",
  // }).then((res) => {
  //   console.log(res);
  // });
  //   API.getClientFormData()
  //     .then((res) => console.log(res, "client form data"))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   let variable = "user.seed.js";
  //   let filename = variable.split(".seed.js")[0];
  //   function toTitleCase(str) {
  //     return str.replace(/\w\S*/g, (txt) => {
  //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //     });
  //   }

  //   console.log(toTitleCase(filename));
  //   API.getUsers()
  //     .then((res) => console.log(res, "user data"))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   API.getEmployeeFormData()
  //     .then((res) => console.log(res, "employee form data"))
  //     .catch((err) => console.log(err));
  // }, []);
  function clickHandler() {
    document.querySelector(".thumbnail").style.display = "none";
    document.querySelector(".who-vid").style.display = "block";
    document.querySelector(".who-vid").play();
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="background-img">
                <h3 className="py-4">Bringing Your Stories to Life</h3>
                <p style={{ paddingLeft: "30%", paddingRight: "30%" }}>
                  We will help turn your stories into a work of art that will
                  make for an absolutely tear-jerking gift or a treasured
                  memento.
                </p>
              </div>
              <div className="card-body px-5 mx-5">
                <div className="row">
                  <div className="col-3 text-center p-3">
                    <img
                      alt="Icon of tree with multi-media as leaves"
                      src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                    ></img>
                  </div>
                  <div className="col-6 text-center p-3">
                    <h3>Multi-media Story</h3>
                    <img
                      className="thumbnail"
                      alt="Two paper cutout men happily hold record together, hoisted overhead"
                      height="200px"
                      width="300px"
                      src={`${process.env.PUBLIC_URL}/images/playthumbnail.png`}
                      onClick={clickHandler}
                    />
                    <video
                      className="who-vid my-3"
                      height="300px"
                      controls
                      style={{ display: "none" }}
                    >
                      <source
                        src={`${process.env.PUBLIC_URL}/images/the-who.mp4`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="col-3 text-center p-3"></div>
                </div>
                <div className="row">
                  <div className="col-3 text-center p-3"></div>
                  <div className="col-6 text-center p-3">
                    <h3>Recorded Story</h3>
                    <audio controls className="my-5">
                      <source
                        src={`${process.env.PUBLIC_URL}/images/bryan_recording.mp3`}
                        type="audio/mpeg"
                      />
                    </audio>
                  </div>
                  <div className="col-3 text-center p-3">
                    <img
                      alt="Icon of tree with blank parchment on front"
                      src={`${process.env.PUBLIC_URL}/images/writtenicon.png`}
                    ></img>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 text-center p-3">
                    <img
                      alt="Icon of tree with music notes as leaves"
                      src={`${process.env.PUBLIC_URL}/images/songicon.png`}
                    ></img>
                  </div>
                  <div className="col-6 text-center p-3">
                    <h3 className="py-3">Song</h3>
                    <h3 className="py-5">
                      <em>COMING SOON</em>
                    </h3>
                  </div>
                  <div className="col-3 text-center p-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Home;
