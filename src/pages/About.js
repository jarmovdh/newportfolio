import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <AnimatedPage>
      <div className="main-container" id="main-container" data-scroll-container>
        <div className="inner">
          <Projects />

          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
