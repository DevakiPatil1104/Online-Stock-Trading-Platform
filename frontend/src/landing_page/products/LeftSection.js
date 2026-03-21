import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} style={{ marginLeft: "50px", width: "90%" }} />
        </div>
        <div className="col-6 p-5 mt-4">
          <h1 className="mt-3">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                style={{ borderRadius: "10%" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px", borderRadius: "10%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
