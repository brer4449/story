import React from "react";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer/index";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src="https://images.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg"
                  width="100px"
                  height="100px"
                  alt="Bid_Med"
                />
                <h1 className="header">
                  <Link to="./BidPost" className="link1">
                    Library{" "}
                  </Link>{" "}
                  <Link to="./PostPage" className="link2">
                    Post{" "}
                  </Link>
                  <Link to="./BidPost" className="link3">
                    Bid
                  </Link>{" "}
                </h1>
                <img
                  src="/images/openbook.jpg"
                  width="100px"
                  height="100px"
                  alt="act"
                  className="pic2"
                />
              </div>
              <div className="card-body">
                <div className="carousel">
                  {/* setting indicators to false removes default bottom dashes at the bottom of the galery*/}
                  <Carousel indicators={false}>
                    <Carousel.Item>
                      {/* process.env.PUBLIC_URL allows accessing  images from public folder */}
                      <img
                        src={process.env.PUBLIC_URL + "/images/pic1.jpg"}
                        height="200px"
                        alt="pic3"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={process.env.PUBLIC_URL + "/images/pic2.jpg"}
                        height="200px"
                        alt="pic6"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={process.env.PUBLIC_URL + "/images/pic3.jpg"}
                        height="200px"
                        alt="pic8"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={process.env.PUBLIC_URL + "/images/pic4.jpg"}
                        height="200px"
                        alt="pic7"
                        width="500px"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={process.env.PUBLIC_URL + "/images/pic5.jpg"}
                        height="200px"
                        alt="pic5"
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
              {/* <div className="card-footer"></div> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br> <br></br>
      <br></br>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
