import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:3002/allOrders");
    setOrders(res.data);
  };

  return (
    <div className="orders">
      <h3 className="title">Orders</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th className="align-left">Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="align-left">{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td className={order.mode === "BUY" ? "profit" : "loss"}>
                    {order.mode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
