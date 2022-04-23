import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { SliderData } from "./SliderData";
import gsap from "gsap";
import "./AboutSlider.scss";

const AboutSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="horizontal-holder">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {SliderData.map((slide, images) => {
            return (
              <motion.div className="item">
                <img src={slide.images} alt="" />
                <motion.div className="item-card"></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSlider;
