import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "../../utilis/Split3.min.js";
import useOnScreen from "../../hooks/useOnSreen";
import cn from "classnames";
import "./AboutSection.scss";

const AboutSection = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
        linesClass: "lineChildren",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  return (
    <section className={cn("about-section")} data-scroll-section>
      <p
        ref={ref}
        className={cn("about-text", { "is-reveal": reveal })}
        id="headline"
      >
        QV Studio is an Amsterdam based creative agency with a focus on
        strategy, design and content. Our purpose is to build modern and
        user-friendly websites to transform your vision into an outstanding
        digital experience.
        <br />
        <br />
        As a full-service agency we can help you with the complete package to
        move your online business forward. From basic Search Engine Optimization
        (SEO) and advanced Social Media Marketing campaigns to photo and
        editorial content. We make sure you become visible and gain traction
        online.
      </p>
    </section>
  );
};

export default AboutSection;
