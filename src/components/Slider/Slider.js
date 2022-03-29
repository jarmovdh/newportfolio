import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Slider.scss";

import leftArrow from "./assets/previous.svg";
import rightArrow from "./assets/next.svg";
import image1 from "./assets/adidas1.jpg";
const content = [
  {
    title: "Adidas.nl",
    category: "Copywriting",
    // image: require("./images/adidas1.jpg").default,s
    info: "Copywriting and Page description for NL adidas platform. Various Categories",
  },
  {
    title: "DIV. Amsterdam",
    category: "Photography",
    // image: require("./images/adidas1.jpg").default,
    info: "Copywriting and Page description for NL adidas platform. Various Categories",
  },
  {
    title: "Porftolio",
    category: "Photography",
    // image: require("./images/adidas1.jpg").default,
    info: "Copywriting and Page description for NL adidas platform. Various Categories",
  },
];

const Slider = () => {
  let imageList = useRef(null);
  let textList = useRef(null);
  let categoryList = useRef(null);

  useEffect(() => {
    console.log(imageList.children[0]);
  }, []);

  return (
    <div className="home-slider-section">
      <div className="home-slider-container">
        <div className="column-left">
          <div className="slider-content-left">
            <ul ref={(el) => (textList = el)}>
              <li>
                <div className="content-home">
                  <h3 className="title-project">{content[0].title}</h3>
                  <p className="info">{content[0].info}</p>
                </div>
              </li>
              <li>
                <div className="content-home">
                  <h3 className="title-project">{content[1].title}</h3>
                  <p className="info">{content[1].info}</p>
                </div>
              </li>
              <li>
                <div className="content-home">
                  <h3 className="title-project">{content[2].title}</h3>
                  <p className="info">{content[2].info}</p>
                </div>
              </li>
            </ul>
            <div className="arrows">
              <div className="arrow-left">
                <span>
                  <img src={leftArrow} alt="left arrow" />
                </span>
              </div>
              <div className="arrow-right">
                <span>
                  <img src={rightArrow} alt="left arrow" />
                </span>
              </div>
            </div>
          </div>
          <div className="slider-content-right">
            <ul ref={(el) => (categoryList = el)}>
              <li>
                <div className="category-home">
                  <h3 className="category-project">{content[0].category}</h3>
                </div>
              </li>
              <li>
                <div className="category-home">
                  <h3 className="category-project">{content[1].category}</h3>
                </div>
              </li>
              <li>
                <div className="category-home">
                  <h3 className="category-project">{content[2].category}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="column-right">
          <div className="slider-image">
            <ul ref={(el) => (imageList = el)}>
              <li>
                <img
                  src="./images/adidas1.jpg"
                  alt="{content[0].title}"
                  width="100%"
                />{" "}
              </li>
              <li>
                <img
                  src="./images/products.jpg"
                  alt="{content[0].title}"
                  width="100%"
                />
              </li>
              <li>
                <img
                  src="./images/shoot1.jpg"
                  alt="{content[0].title}"
                  width="100%"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
