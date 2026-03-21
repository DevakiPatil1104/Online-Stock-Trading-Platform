import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      {/* Top Bar */}
      <div id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>

      {/* Main Section */}
      <div className="row" id="supportMain">
        {/* Left Section */}
        <div className="col-md-6 leftSection">
          <h1>Search for an answer or browse help topics to create a ticket</h1>

          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
          />

          <div className="links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 rightSection" id="supportRight">
          <h2>Featured</h2>

          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
