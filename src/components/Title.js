import React, { useEffect, useRef } from "react";

export const Title = () => {
  let line1 = useRef(null);
  let line2 = useRef(null);

  return (
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={(el) => (line1 = el)} className="line">
          Hello World
        </div>
      </div>
      <div className="line-wrap">
        <div ref={(el) => (line2 = el)} className="line">
          This is Jarmo
        </div>
      </div>
    </h1>
  );
};
