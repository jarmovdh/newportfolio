import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], {
      duration: 0.8,
      opacity: 0,
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <h1 className="page-title" data-scroll-section>
      <div className="line-wrap">
        <div ref={(el) => (line1 = el)} className="line">
          {lineContent}
        </div>
      </div>
      <div className="line-wrap">
        <div ref={(el) => (line2 = el)} className="line">
          {lineContent2}
        </div>
      </div>
    </h1>
  );
};
