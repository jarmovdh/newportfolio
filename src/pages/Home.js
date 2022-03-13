import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import { Title } from "../components/Title";
import Featured from "../components/Featured/Featured";
import AboutSection from "../components/AboutSection/AboutSection";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="inner">
        <Title lineContent="QV Studio" lineContent2={"Full Service Agency"} />
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
      <Featured />
      <AboutSection />
    </AnimatedPage>
  );
};

export default Home;
