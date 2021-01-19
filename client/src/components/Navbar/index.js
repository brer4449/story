import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  // const { currentUser } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <img
        src="https://images.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg"
        width="100px"
        height="100px"
        className="d-inline-block align-top"
        alt="open book logo"
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/ "
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Library"
              className={
                window.location.pathname === "/Library"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Library
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Gift"
              className={
                window.location.pathname === "/Gift"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Gift
            </Link>
          </li>
          {/* <li className="nav-item">
            {currentUser ? (
              <Link
                to="/Dashboard"
                className={
                  window.location.pathname === "/Dashboard "
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <img
                  className="rounded-circle"
                  src={`${process.env.PUBLIC_URL}/images/construction.jpg`}
                  alt={"profile pic"}
                  width={"25px"}
                  height={"25px"}
                />{" "}
                Profile
              </Link>
            ) : (
              <Link
                to="/Entry"
                className={
                  window.location.pathname === "/Entry"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign Up
              </Link>
            )}
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
