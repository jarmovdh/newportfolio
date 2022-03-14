import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className={"about-section"} data-scroll-section>
      <SectionHeader title="about" />
      <div className="about-text" id="headline">
        QV Studio is an Amsterdam based creative agency with a focus on
        strategy, design and content. Our purpose is to build modern and
        user-friendly websites to transform your vision into an outstanding
        digital experience. As a full-service agency we can help you with the
        complete package to move your online business forward. From basic Search
        Engine Optimization (SEO) and advanced Social Media Marketing campaigns
        to photo and editorial content. We make sure you become visible and gain
        traction online.
      </div>
    </section>
  );
};

export default AboutSection;
