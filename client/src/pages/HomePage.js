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
              <div className="card-header">
                <h1>Stories Told</h1>
              </div>
              <div className="background-img">
                <h3>Bringing Your Stories to Life</h3>
              </div>
              <div className="card-body">
                <video height="500px" controls>
                  <source
                    src={`${process.env.PUBLIC_URL}/images/the_who.mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Home;
