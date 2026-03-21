import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center mt-5 mb-5">
        <h1>Technology</h1>
        <h4 className="text-muted fs-5 mt-3">
          Sleek, modern and intutive trading platforms
        </h4>
        <p className="mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
