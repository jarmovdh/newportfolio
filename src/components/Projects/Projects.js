import React, { useState, useRef } from "react";
import "./Projects.scss";
import Arrow from "./Arrow";

const Projects = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("projects_icon");
  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "projects_icon" : "projects_icon rotate"
    );
  }

  return (
    <div className="projects_section" data-scroll-section>
      <button className={`projects ${setActive}`} onClick={toggleAccordion}>
        <h1 className="projects_title">{props.title}</h1>
        <Arrow width={50} className={`${setRotate}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="projects_content"
      >
        <div
          className="projects_text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Projects;
