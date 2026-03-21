import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row text-center p-5 border-top">
        <div className="col-8 p-4">
          <h4 style={{ color: "#4B9CD3" }}>Brokerage calculator</h4>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
            className="text-muted mt-3"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <h4 style={{ color: "#4B9CD3" }}>List of charges</h4>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
            className="text-muted mt-3"
          >
            <li>Equity delivery: ₹0</li>
            <li>Equity intraday: ₹20 or 0.03% (whichever is lower)</li>
            <li>F&O - Futures: ₹20 per executed order</li>
            <li>F&O - Options: ₹20 per executed order</li>
            <li>Currency derivatives: ₹20 per executed order</li>
            <li>Commodity: ₹20 per executed order</li>
            <li>Account opening: ₹0</li>
            <li>AMC (Annual maintenance): ₹300/year</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
