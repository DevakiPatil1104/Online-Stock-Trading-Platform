import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div
        className="row p-5 border-top"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <h1 className="fs-1 text-center mt-3">People</h1>
        <div className="col-6 p-5 text-center mt-5">
          <img
            src="Media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="text-muted mt-5 fs-4 mb-3">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5 mt-4 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="/" style={{textDecoration:"none"}}>Homepage</Link> /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
