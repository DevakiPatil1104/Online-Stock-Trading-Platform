import React from "react";

function Section({ icon, title, items }) {
  return (
    <div className="col-md-4 mt-5">
      <h5>
        <i className={`${icon} me-2`}></i>
        {title}
      </h5>

      {items.map((item, index) => (
        <div key={index}>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>
            {item}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Section;
