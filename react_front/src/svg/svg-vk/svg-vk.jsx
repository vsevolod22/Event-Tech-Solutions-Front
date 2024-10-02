import React from "react";
const SvgVk = function () {
  return (
    <div className="telegram_link_svg" style={{ display: "flex" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 59 59"
        fill="none"
      >
        <rect
          x="-0.000488281"
          width="58.8838"
          height="59"
          fill="url(#pattern0_463_1311)"
        />
        <defs>
          <pattern
            id="pattern0_463_1311"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_463_1311"
              transform="matrix(0.01 0 0 0.0099803 0 0.000984903)"
            />
          </pattern>
          <image
            id="image0_463_1311"
            width="100"
            height="100"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};
export default SvgVk;
