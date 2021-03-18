import React, { useEffect } from "react";
import Footer from "../components/Footer/index";
// import axios from "axios";
import API from "../utils/API";

function Home() {
  useEffect(() => {
    // axios({
    //   method: "POST",
    //   url: "/api/users",
    //   data: "test",
    // }).then((res) => {
    //   console.log(res);
    // });
    API.getClientFormData()
      .then((res) => console.log(res, "client form data"))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let variable = "user.seed.js";
    let filename = variable.split(".seed.js")[0];
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    console.log(toTitleCase(filename));
    API.getUsers()
      .then((res) => console.log(res, "user data"))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    API.getEmployeeFormData()
      .then((res) => console.log(res, "employee form data"))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              {/* <div className="card-header">
              Stories Told h1 was in here, looks better in background imo
              </div> */}
              <div className="background-img">
                <h1>Stories Told</h1>
                <h3>Bringing Your Stories to Life</h3>
                <p style={{ paddingLeft: "30%", paddingRight: "30%" }}>
                  We will help turn your stories into a work of art that will
                  make for an absolutely tear-jerking gift or a treasured
                  memento.
                </p>
              </div>
              <div className="card-body card-background">
                <h3 className="text-center video-header">
                  A Sample of What Your Story Could Look Like
                </h3>
                <video height="500px" controls>
                  <source
                    src={`${process.env.PUBLIC_URL}/images/the_who.mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="card-body">
                <h1 className="pt-5">About Stories Told</h1>
                <p className="p-5 mx-5">
                  Stories Told is a brain child of Steven Kerr's, brought to
                  fruition with the programming help of Brendan Erickson and all
                  of the amazing creative talent of our storytellers that brings
                  your stories to life. "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.""Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum."
                </p>
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
