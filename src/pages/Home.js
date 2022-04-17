import React, { useEffect, useRef, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import { Title } from "../components/Title/Title";
import AboutSection from "../components/AboutSection/AboutSection";
import arrowDown from "./assets/down-arrow.svg";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Horizontal from "../components/Horizontal/Horizontal";
import Footer from "../components/Footer/Footer";
import "./Home.scss";
import useLocoScroll from "../hooks/useLocoSroll";
import ContactSection from "../components/ContactSection/ContactSection";

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
                QV Studio is an Amsterdam based creative agency with a focus on{" "}
                <span className="info-topics">strategy, design</span> and
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
          <ServiceSection />
          <ContactSection />
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );
};

export default Home;
