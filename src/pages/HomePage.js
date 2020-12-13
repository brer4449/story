import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer/index";

function Home() {
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <h1>Stories Told</h1>
              </div>
              <div className="card-body">
                <div className="carousel">
                  {/* setting indicators to false removes default bottom dashes at the bottom of the gallery indicators={false}*/}
                  <Carousel>
                    <Carousel.Item>
                      {/* process.env.PUBLIC_URL allows accessing  images from public folder */}
                      <img
                        src={`${process.env.PUBLIC_URL}/images/pic1.jpg`}
                        height="500px"
                        alt="toast and egg"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/pic2.jpg`}
                        height="500px"
                        alt="empty airport"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/pic3.jpg`}
                        height="500px"
                        alt="dead flowers"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/pic4.jpg`}
                        height="500px"
                        alt="bath salts and flowers"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/pic5.jpg`}
                        height="500px"
                        alt="temple"
                        width="500px"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <h4 className="text">
                  Have a story that you want told by a professional? Story Told
                  is the place for you!
                </h4>
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
