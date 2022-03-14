import React, { useEffect, useRef, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import { Title } from "../components/Title";
import Featured from "../components/Featured/Featured";
import AboutSection from "../components/AboutSection/AboutSection";
import Gallery from "../components/Gallery/Gallery";

import "./Home.scss";
import useLocoScroll from "../hooks/useLocoSroll";

const Home = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) clear();
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>QV Studio</h1>
          <h2>Amsterdam</h2>
        </div>
      ) : (
        <AnimatedPage>
          <div
            className="main-container"
            id="main-container"
            data-scroll-container
          >
            <div className="inner">
              <Title
                lineContent="QV Studio"
                lineContent2={"Full Service Agency"}
              />
              <div>
                <p className="info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum explicabo sed voluptatem et pariatur corporis impedit
                  aperiam repellendus nesciunt illum. Sapiente facilis ea,
                  eveniet vel possimus saepe tenetur quaerat, numquam architecto
                  delectus libero molestias impedit esse reprehenderit nulla.
                  Ullam veniam modi asperiores similique neque nihil animi
                  eligendi perspiciatis possimus recusandae?
                </p>
              </div>
            </div>
            <Featured />
            <AboutSection />
            <Gallery />
          </div>
        </AnimatedPage>
      )}
    </>
  );
};

export default Home;
