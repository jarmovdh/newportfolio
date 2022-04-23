import React from "react";
import { SliderData } from "./SliderData";
import "./AboutSlider.scss";

const AboutSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          {SliderData.map((slide) => {
            return <img src={slide.images} alt="listarray" />;
          })}
        </div>

        {/* Slides Doubled */}
        <div className="slide">
          {SliderData.map((slide, index) => {
            return <img src={slide.images} alt="listarray" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
