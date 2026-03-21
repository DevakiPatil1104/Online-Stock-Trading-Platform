import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-4">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Home Hero Img"
          style={{ width: "80%" }}
          className="mb-4 mx-auto d-block"
        />
        <h1 className="mt-5">Invest in Everything</h1>
        <p className="fs-4 text-muted mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Hero;
