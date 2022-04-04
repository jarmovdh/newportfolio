import React, { useEffect, useRef, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import { Title } from "../components/Title/Title";
import Featured from "../components/Featured/Featured";
import AboutSection from "../components/AboutSection/AboutSection";
import arrowDown from "./assets/down-arrow.svg";

import "./Home.scss";
import useLocoScroll from "../hooks/useLocoSroll";
import Slider from "../components/Slider/Slider";
import { HeroFont } from "../components/HeroFont/HeroFont";
import Horizontal from "../components/Horizontal/Horizontal";

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
            <div className="home-section">
              <div className="home-section-left" data-scroll-section>
                <Title
                  lineContent="Q\V. Studio"
                  lineContent2={"by Jarmo van der Heul"}
                  lineContent3={"Full Service Agency"}
                />
                <div className="arrow-down">
                  <img
                    className="arrow-down-icon"
                    src={arrowDown}
                    alt="left arrow"
                  />
                </div>
              </div>

              <div className="home-section-right" data-scroll-section>
                <p className="info">
                  QV Studio is an Amsterdam based creative agency with a focus
                  on <span className="info-topics">strategy, design</span> and
                  <span className="info-topics"> content</span>. The studio
                  operates globally across a range of assignments, from one-off
                  projects to long-term partnerships, with a network of
                  collaborators supporting the studio across disciplines. Feel
                  free to contact us through hello@qvstudio.com
                </p>
                <p className="sub-line">
                  an independent creative and collaborative studio based out of
                  amsterdam
                </p>
              </div>
            </div>
            <div className="horizontal-section" data-scroll-section>
              <Horizontal />
            </div>

            <AboutSection />
            <Featured />
          </div>
        </AnimatedPage>
      )}
    </>
  );
};

export default Home;
