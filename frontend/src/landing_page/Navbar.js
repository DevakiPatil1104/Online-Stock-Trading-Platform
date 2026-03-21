import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src="media/images/logo.svg"
            style={{ width: "35%" }}
            alt="logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active fs-5"
                to="/signup"
                onClick={() => window.scrollTo(0, 0)}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5"
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5"
                to="/product"
                onClick={() => window.scrollTo(0, 0)}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5"
                to="/pricing"
                onClick={() => window.scrollTo(0, 0)}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5"
                to="/support"
                onClick={() => window.scrollTo(0, 0)}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
