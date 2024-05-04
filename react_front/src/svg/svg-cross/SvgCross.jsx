import React from "react";
import "./svgCross.css";

const SvgCross = function ({getData}) {
  return (
    <div onClick={() => getData(0)} className="svg_cross">
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20.0117"
          y="12.646"
          width="46"
          height="9"
          transform="rotate(45.4087 20.0117 12.646)"
          fill="#47A67C"
        />
        <rect
          x="52.1934"
          y="19.7993"
          width="46"
          height="9"
          transform="rotate(136.155 52.1934 19.7993)"
          fill="#47A67C"
        />
      </svg>
    </div>
  );
};

export default SvgCross;
