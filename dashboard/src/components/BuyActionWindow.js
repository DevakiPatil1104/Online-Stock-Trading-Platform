import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const [stockQty, setStockQty] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const { closeBuyWindow } = useContext(GeneralContext);
  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const handleBuyClick = async () => {
    if (!stockQty || !stockPrice) {
      alert("Please enter quantity and price");
      return;
    }

    if (Number(stockQty) <= 0 || Number(stockPrice) <= 0) {
      alert("Quantity and Price must be greater than 0");
      return;
    }

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQty),
        price: Number(stockPrice),
        mode: "BUY",
      });

      console.log("Order placed!");
      closeBuyWindow();
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  return (
    <div className="containerClass" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQty(e.target.value)}
              value={stockQty}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required &#8377; 140.65</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={!stockQty || !stockPrice}
          >
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
