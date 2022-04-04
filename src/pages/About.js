import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import { Title } from "../components/Title/Title";

const About = () => {
  return (
    <AnimatedPage>
      <div className="inner" data-scroll-container>
        <Title lineContent="About Page" lineContent2={"Learn More"} />
        <div>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            explicabo sed voluptatem et pariatur corporis impedit aperiam
            repellendus nesciunt illum. Sapiente facilis ea, eveniet vel
            possimus saepe tenetur quaerat, numquam architecto delectus libero
            molestias impedit esse reprehenderit nulla. Ullam veniam modi
            asperiores similique neque nihil animi eligendi perspiciatis
            possimus recusandae?
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
