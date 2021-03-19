import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div id="top-left"></div>
      <div id="top-right"></div>
      {/* <Link to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/images/without_bg.png`}
          width="100px"
          height="100px"
          className="d-inline-block align-top"
          alt="open book logo"
        />
      </Link>
      <Link className="brandHeader" to={"/"}>
        <h1>Stories Told</h1>
      </Link> */}
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
          {/* <li className="nav-item">
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
          </li> */}
          <li className="nav-item">
            <Link
              to="/GettingStarted"
              className={
                window.location.pathname === "/GettingStarted"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Getting Started
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/Entry"
              className={
                window.location.pathname === "/Entry"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Signup
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/About"
              className={
                window.location.pathname === "/About"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          {/* THIS IS THE SHOPPING CART ICON*/}
          {/* <li className="nav-item">
            <Link
              to="/ShoppingCart"
              className={
                window.location.pathname === "/ShoppingCart"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span className="fas fa-shopping-cart"></span>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
