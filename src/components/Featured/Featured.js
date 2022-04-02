import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>Test</h6>
        <img src="images/adidas1.jpg" data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>Adidas</h6>
        <img src="images/shoot2.jpg" data-scroll />
      </div>
    </section>
  );
};

export default Featured;
