import React from "react";
import Footer from "../components/Footer/index";

function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="card text-center">
          <div className="card-body">
            <h1 className="pt-5">About Stories Told</h1>
            <p
              className="mx-5"
              style={{ paddingLeft: "13%", paddingRight: "13%" }}
            >
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
              <div className="col-2"></div>
              <div className="col-4">
                <h3>Steven Kerr</h3>
                <p className="text-left">
                  Steven developed a deep appreciation for the power of a well
                  told story from watching video essays on YouTube. He
                  co-founded Stories Told in Portland Oregon and enjoys rock
                  climbing, basketball and board games in his free time.
                </p>
              </div>
              <div className="col-4">
                <img
                  alt="Head shot of Steven with mountains in the background"
                  src={`${process.env.PUBLIC_URL}/images/steve.png`}
                ></img>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row py-4">
              <div className="col-2"></div>
              <div className="col-4">
                <img
                  alt="Head shot of Brendan"
                  src={`${process.env.PUBLIC_URL}/images/mediaicon.png`}
                ></img>
              </div>
              <div className="col-4">
                <h3>Brendan Erickson</h3>
                <p className="text-right">
                  Brendan has enjoyed story telling ever since he was a boy,
                  sitting in his Dad's Ford Escort stuck in LA traffic as his
                  pops would listen to This American Life. Still an avid
                  listener today, Brendan paired with Steven to create fresh
                  take on how stories can be composed. He also enjoys board
                  games, and travel, when he's not developing some new website
                  or app.
                </p>
              </div>
              <div className="col-2"></div>
            </div>
            <h1 className="py-3">The Who Story Artists</h1>
            <h2 className="py-3">Multi Media Story</h2>
            <div className="row py-4">
              <div className="col-2"></div>
              <div className="col-4">
                <img
                  alt="Head shot of Imani"
                  style={{ height: "310px", width: "300px" }}
                  src={`${process.env.PUBLIC_URL}/images/imani.jpg`}
                ></img>
              </div>
              <div className="col-4">
                <h3>Imani Wilson - Voice Talent</h3>
                <p className="text-left">
                  Imani is a former 2011 New York Digital Film Academy Graduate
                  with nearly half a decade’s experience in Film and Broadcast.
                  After several years of working in local broadcast, Imani has
                  worked on political campaigns, local and national
                  advertisements, online content, film and co produced several
                  successfully running podcast series.
                </p>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row py-4">
            <div className="col-2"></div>
            <div className="col-4">
              <h3>Sean - Animation</h3>
            </div>
            <div className="col-4">
              <img
                alt="Head shot of Sean"
                src={`${process.env.PUBLIC_URL}/images/sean.jpg`}
              ></img>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row py-4">
            <div className="col-2"></div>
            <div className="col-4">
              <img
                alt="Head shot of Carolani"
                style={{ height: "310px", width: "220px" }}
                src={`${process.env.PUBLIC_URL}/images/carolani.jpg`}
              ></img>
            </div>
            <div className="col-4">
              <h3>Carolani Bartell - Writer</h3>
              <p className="text-left">
                Carolani is a writer from the DMV area. She has been working in
                the entertainment industry since childhood, recently writing for
                video games, internet content, and wonderful projects like
                these. She also writes and edits fiction, music, and
                screenplays, finding inspiration in just about any creative
                outlet. Her passion for storytelling is often accompanied by
                early mornings, a record player, and iced coffee.
              </p>
            </div>
            <div className="col-2"></div>
          </div>
          <h2 className="py-5">Recorded Story</h2>
          <div className="row py-4">
            <div className="col-2"></div>
            <div className="col-4">
              <h3>Joseph Schmidt - Writer</h3>
              <p className="text-right">
                Joseph has always been fascinated by storytelling. Joseph is
                currently honing his craft in South Dakota. When not writing he
                enjoys induging in film, is a tech nerd, and loves to read.
              </p>
            </div>
            <div className="col-4">
              <img
                alt="Head shot of Joseph"
                style={{ height: "310px", width: "180px" }}
                src={`${process.env.PUBLIC_URL}/images/joseph.jpg`}
              ></img>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
