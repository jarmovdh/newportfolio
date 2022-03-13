import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured-section">
      <div className="featured-row-layout">
        <h6>Test</h6>
        <img src="images/adidas1.jpg" alt="" />
      </div>
      <div className="featured-column-layout">
        <h6>Adidas</h6>
        <img src="images/shoot2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Featured;
