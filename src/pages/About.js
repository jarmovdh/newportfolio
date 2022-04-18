import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import Projects from "../components/Projects/Projects";

const About = () => {
  return (
    <AnimatedPage>
      <div className="inner" data-scroll-container>
        <div className="project-list">
          <h1>Adidas</h1>
          <h1>DIV. Amsterdam</h1>
          <h1>Portraits</h1>
          <h1>Studio Pands</h1>
          <h1>Goldkimono</h1>
          <h1>Iceland</h1>
          <h1>Italy</h1>
        </div>
        <Projects
          title="Project Name"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, necessitatibus."
        />
        <Projects
          title="Project Name"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, necessitatibus."
        />
      </div>
    </AnimatedPage>
  );
};

export default About;
