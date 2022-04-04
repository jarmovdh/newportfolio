import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "./images";
import gsap from "gsap";
import "./Horizontal.scss";

const Horizontal = () => {
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
          {images.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt="" />
                <motion.div className="item-card">
                  <div className="item-card-title">
                    <h1>01/</h1>
                    <h1>adidas</h1>
                    <h4 className="category">copywriting</h4>
                  </div>

                  <div className="item-card-sub">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur a obcaecati laboriosam tempore autem deserunt
                      saepe quaerat cupiditate? Maxime inventore suscipit
                      consequuntur voluptatibus rem earum magnam obcaecati ea,
                      debitis assumenda asperiores, nulla aspernatur neque alias
                      porro quidem unde deserunt? Dolores nihil cumque saepe
                      delectus, voluptates architecto sint ea ipsam eos.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Horizontal;
