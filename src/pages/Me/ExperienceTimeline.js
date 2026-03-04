import React, { forwardRef } from "react";

const ExperienceTimeline = forwardRef((_props, pathRef) => {
  return (
    <div className="me-svg-path-container">
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
        <path className="line01 line" d="M 10 200  800 200"></path>
        <path className="line04 line" d="M 10 700  800 700"></path>
        <path className="line05 line" d="M 10 1200  800 1200"></path>

        <text className="svg-text text01" x="30" y="190">
          2019
        </text>
        <text className="exp-par exp-par-1 medium-heading" x="450" y="190">
          MERN developer at Slectus
        </text>

        <text className="svg-text text04" x="30" y="690">
          2021
        </text>
        <text className="exp-par exp-par-2 medium-heading" x="450" y="690">
          Software Engineer at Mavaan LLC
        </text>

        <text className="svg-text text06" x="30" y="1190">
          2025
        </text>
        <text className="exp-par exp-par-3 medium-heading" x="450" y="1190">
          Software Engineer at Nybl
        </text>

        <path
          ref={pathRef}
          className="theLine"
          d="M -5,0
         Q 450 230 300 450
         T 130 750
         Q 100 850 300 1000
         T 150 1200"
          fill="none"
          stroke="white"
          strokeWidth="10px"
        />

        <circle className="ball ball01" r="20" cx="25" cy="25"></circle>
        <circle className="ball ball02" r="20" cx="298" cy="221"></circle>
        <circle className="ball ball05" r="20" cx="160" cy="715"></circle>
        <circle className="ball ball07" r="20" cx="160" cy="1220"></circle>
      </svg>
    </div>
  );
});

ExperienceTimeline.displayName = "ExperienceTimeline";

export default ExperienceTimeline;
