import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import "./Slider.scss";

import leftArrow from "./assets/previous.svg";
import rightArrow from "./assets/next.svg";

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
    info: "Product Photography and editing for your website",
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
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const imageWidth = 600;

  useEffect(() => {
    gsap.to(categoryList.children[0], { duration: 0, opacity: 1 });
    gsap.to(textList.children[0], { duration: 0, opacity: 1 });
  }, []);

  const slideLeft = (index, duration, multiplied = 1) => {
    gsap.to(imageList.children[index], {
      duration,
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    gsap.to(imageList.children[index], {
      duration,
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    gsap.from(imageList.children[index], {
      duration,
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  const fadeOutText = (index, duration) => {
    gsap.to(textList.children[index], duration, { opacity: 0 });
  };

  const fadeInText = (index, duration) => {
    gsap.to(textList.children[index], duration, { opacity: 1, delay: 1 });
  };

  const fadeInCategory = (index, duration) => {
    gsap.to(categoryList.children[index], {
      duration,
      opacity: 1,
      delay: 1,
    });
  };

  const fadeOutCategory = (index, duration) => {
    gsap.to(categoryList.children[index], {
      duration,
      opacity: 0,
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });

      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);

      // Fade Title and copy
      fadeOutText(0, 1);
      fadeInText(1, 1);

      // Fade Category
      fadeOutCategory(0, 1);
      fadeInCategory(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });

      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOutText(1, 1);
      fadeInText(2, 1);
      fadeOutCategory(1, 1);
      fadeInCategory(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOutText(2, 1);
      fadeInText(0, 1);
      fadeOutCategory(2, 1);
      fadeInCategory(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });

      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      fadeOutText(0, 1);
      fadeInText(2, 1);
      fadeOutCategory(0, 1);
      fadeInCategory(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOutText(1, 1);
      fadeInText(0, 1);
      fadeOutCategory(1, 1);
      fadeInCategory(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOutText(2, 1);
      fadeInText(1, 1);
      fadeOutCategory(2, 1);
      fadeInCategory(1, 1);
    }
  };

  return (
    <div className="home-slider-section">
      <div className="home-slider-container">
        <div className="column-left">
          <div className="slider-content-left">
            <ul ref={(el) => (textList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-home">
                  <h3 className="title-project">{content[0].title}</h3>
                  <p className="info">{content[0].info}</p>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-home">
                  <h3 className="title-project">{content[1].title}</h3>
                  <p className="info">{content[1].info}</p>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-home">
                  <h3 className="title-project">{content[2].title}</h3>
                  <p className="info">{content[2].info}</p>
                </div>
              </li>
            </ul>
            <div className="arrows">
              <div onClick={prevSlide} className="arrow-left">
                <span>
                  <img src={leftArrow} alt="left arrow" />
                </span>
              </div>
              <div onClick={nextSlide} className="arrow-right">
                <span>
                  <img src={rightArrow} alt="left arrow" />
                </span>
              </div>
            </div>
          </div>
          <div className="slider-content-right">
            <ul ref={(el) => (categoryList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="category-home">
                  <h3 className="category-project">{content[0].category}</h3>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="category-home">
                  <h3 className="category-project">{content[1].category}</h3>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
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
              <li className={state.isActive1 ? "active" : ""}>
                <img
                  src="./images/adidas1.jpg"
                  alt="{content[0].title}"
                  width="100%"
                />{" "}
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img
                  src="./images/products.jpg"
                  alt="{content[0].title}"
                  width="100%"
                />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
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
