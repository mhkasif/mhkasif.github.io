import { motion } from "framer-motion";
import { TimelineLite, Power3 } from "gsap";

import React, { useEffect, useRef } from "react";
import "./CircleSvg.scss";
const CircleSvg = () => {
  const topOuterDiamond = useRef();
  const topInnerDiamond = useRef();
  const leftOuterDiamond = useRef();
  const leftInnerDiamond = useRef();
  const rightOuterDiamond = useRef();
  const rightInnerDiamond = useRef();
  const bottomOuterDiamond = useRef();
  const bottomInnerDiamond = useRef();

  const topRightPath = useRef();
  const topLeftPath = useRef();
  const bottomLeftPath = useRef();
  const bottomRightPath = useRef();
  const detailRef = useRef();
  useEffect(() => {
    const tl = new TimelineLite({
      delay: 0.5,
    });
    tl.to(
      topOuterDiamond.current,

      {
        // ease: Power3.easeOut,
        strokeDashoffset: 0,
      },
      0
    )
      .to(
        rightOuterDiamond.current,

        {
          ease: Power3.easeOut,
          strokeDashoffset: 0,
        },
        0
      )
      .to(
        bottomOuterDiamond.current,

        {
          ease: Power3.easeOut,
          strokeDashoffset: 0,
        },
        0
      )
      .to(
        leftOuterDiamond.current,

        {
          ease: Power3.easeOut,
          strokeDashoffset: 0,
        },
        0
      );
    // tl.to(topRightPath.current, 1, {
    //   //strokeDasharray:0,
    //   strokeDashoffset: 0,

    //   ease: Power3.easeInOut,
    // },0)
    //   .to(bottomRightPath.current, 1, {
    //     //strokeDasharray:0,
    //     strokeDashoffset: 0,

    //     ease: Power3.easeInOut,
    //   },0)
    //   .to(bottomLeftPath.current, 1, {
    //     //strokeDasharray:0,
    //     strokeDashoffset: 0,

    //     ease: Power3.easeInOut,
    //   },0)
    //   .to(topLeftPath.current, 1, {
    //     //strokeDasharray:0,
    //     strokeDashoffset: 0,

    //     ease: Power3.easeInOut,
    //   },0);
  }, []);

  const showData = () => {
    const tl = new TimelineLite();
    tl.to(detailRef.current, {
      transform: "translateX(0%)",
    }).to(
      topInnerDiamond.current,
      {
        fill: "white",
      },
      0
    );
  };

  const tdClick = () => {
    const tl = new TimelineLite();
    if (
      topInnerDiamond.current.style.fill.includes("transparent") ||
      !topInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });

    if (topRightPath.current.style.strokeDashoffset !== "0px") {
      tl.to(
        topRightPath.current,
        0.3,
        {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        },
        0
      )
        .to(bottomRightPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        })
        .to(bottomLeftPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeOut,
        })
        .to(topLeftPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeOut,
        })
        .set(topInnerDiamond.current, {
          fill: "#fff",
        });
      return;
    }
    if (bottomRightPath.current.style.strokeDashoffset !== "0px") {
      tl.to(bottomRightPath.current, 0.3, {
        strokeDashoffset: 0,
        // ease: Power3.easeIn,
      })
        .to(bottomLeftPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeOut,
        })
        .to(topLeftPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeOut,
        })
        .set(topInnerDiamond.current, {
          fill: "#fff",
        });
      return;
    }
    if (bottomLeftPath.current.style.strokeDashoffset !== "0px") {
      tl.to(bottomLeftPath.current, 0.3, {
        strokeDashoffset: 0,
        // ease: Power3.easeOut,
      })
        .to(topLeftPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeOut,
        })
        .set(topInnerDiamond.current, {
          fill: "#fff",
        });
      return;
    }
    if (topLeftPath.current.style.strokeDashoffset !== "0px") {
      tl.to(topLeftPath.current, 0.3, {
        strokeDashoffset: 0,
        // ease: Power3.easeOut,
      }).set(topInnerDiamond.current, {
        fill: "#fff",
      });
      return;
    }
  };
  const rdClick = () => {
    const tl = new TimelineLite();
    if (
      rightInnerDiamond.current.style.fill.includes("transparent") ||
      !rightInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });
    if (topRightPath.current.style.strokeDashoffset !== "0px") {
      tl.to(
        topRightPath.current,
        0.3,
        {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        },
        0
      ).set(rightInnerDiamond.current, {
        fill: "#fff",
      });
      return;
    }
    if (topLeftPath.current.style.strokeDashoffset === "0px") {
      tl.to(topLeftPath.current, 0.3, {
        strokeDashoffset: 400,
        // ease: Power3.easeOut,
      })
        .to(bottomLeftPath.current, 0.3, {
          strokeDashoffset: 400,
          // ease: Power3.easeOut,
        })
        .to(bottomRightPath.current, 0.3, {
          strokeDashoffset: -400,
          // ease: Power3.easeIn,
        })
        .set(rightInnerDiamond.current, {
          fill: "#fff",
        });

      return;
    }
    if (bottomLeftPath.current.style.strokeDashoffset === "0px") {
      tl.to(bottomLeftPath.current, 0.3, {
        strokeDashoffset: 400,
        // ease: Power3.easeOut,
      })
        .to(bottomRightPath.current, 0.3, {
          strokeDashoffset: -400,
          // ease: Power3.easeOut,
        })
        .set(rightInnerDiamond.current, {
          fill: "#fff",
        });
      return;
    }
    if (bottomRightPath.current.style.strokeDashoffset === "0px") {
      tl.to(bottomRightPath.current, 0.3, {
        strokeDashoffset: -400,
        // ease: Power3.easeIn,
      }).set(rightInnerDiamond.current, {
        fill: "#fff",
      });

      return;
    }
  };
  const bdClick = () => {
    const tl = new TimelineLite();
    if (
      bottomInnerDiamond.current.style.fill.includes("transparent") ||
      !bottomInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });
    if (topRightPath.current.style.strokeDashoffset !== "0px") {
      tl.to(
        topRightPath.current,
        0.3,
        {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        },
        0
      )
        .to(bottomRightPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        })
        .set(bottomInnerDiamond.current, {
          fill: "#fff",
        });

      return;
    }
    if (bottomRightPath.current.style.strokeDashoffset !== "0px") {
      tl.to(bottomRightPath.current, 0.3, {
        strokeDashoffset: 0,
        // ease: Power3.easeIn,
      }).set(bottomInnerDiamond.current, {
        fill: "#fff",
      });

      return;
    }

    if (topLeftPath.current.style.strokeDashoffset === "0px") {
      tl.to(topLeftPath.current, 0.3, {
        strokeDashoffset: 400,
        // ease: Power3.easeOut,
      })
        .to(bottomLeftPath.current, 0.3, {
          strokeDashoffset: 400,
          // ease: Power3.easeOut,
        })
        .set(bottomInnerDiamond.current, {
          fill: "#fff",
        });

      return;
    }
    if (bottomLeftPath.current.style.strokeDashoffset === "0px") {
      tl.to(bottomLeftPath.current, 0.3, {
        strokeDashoffset: 400,
        // ease: Power3.easeOut,
      }).set(bottomInnerDiamond.current, {
        fill: "#fff",
      });
      return;
    }
  };
  const ldClick = () => {
    const tl = new TimelineLite();
    if (
      leftInnerDiamond.current.style.fill.includes("transparent") ||
      !leftInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });
    if (topRightPath.current.style.strokeDashoffset !== "0px") {
      tl.to(
        topRightPath.current,
        0.3,
        {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        },
        0
      )
        .to(bottomRightPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        })
        .to(bottomLeftPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeIn,
        })
        .set(leftInnerDiamond.current, {
          fill: "#fff",
        });
      return;
    }
    if (topLeftPath.current.style.strokeDashoffset === "0px") {
      tl.to(topLeftPath.current, 0.3, {
        strokeDashoffset: 400,
        // ease: Power3.easeOut,
      }).set(leftInnerDiamond.current, {
        fill: "#fff",
      });
      return;
    }
    if (bottomRightPath.current.style.strokeDashoffset !== "0px") {
      tl.to(bottomRightPath.current, 0.3, {
        strokeDashoffset: 0,
        // ease: Power3.easeOut,
      })
        .to(bottomLeftPath.current, 0.3, {
          strokeDashoffset: 0,
          // ease: Power3.easeOut,
        })
        .set(leftInnerDiamond.current, {
          fill: "#fff",
        });

      return;
    }
    if (bottomRightPath.current.style.strokeDashoffset === "0px") {
      tl.to(bottomLeftPath.current, 0.3, {
        strokeDashoffset: 0,
        // ease: Power3.easeOut,
      }).set(leftInnerDiamond.current, {
        fill: "#fff",
      });

      return;
    }
  };
  return (
    <div className="circle-div">
      <div className="svg-container">
        <div className="overflow-wrapper detail-container">
          <div ref={detailRef} className="detail">
            <h2>Web Developer</h2>
            <div>
              im a web developer and blah blach asdasjkdhsa sajdhsajdas jhasdj.
            </div>
          </div>
        </div>
        <svg
          width="621"
          height="621"
          viewBox="0 0 621 621"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* back diamond */}
          <line
            className="inner-path"
            x1="296.896"
            y1="606.354"
            x2="14.0537"
            y2="323.511"
          />
          <line
            className="inner-path"
            x1="13.6464"
            y1="297.489"
            x2="296.489"
            y2="14.6464"
          />
          <line
            className="inner-path"
            x1="323.026"
            y1="606.489"
            x2="605.869"
            y2="323.646"
          />
          <line
            className="inner-path"
            x1="606.326"
            y1="297.196"
            x2="323.484"
            y2="14.3535"
          />
          <rect
            x="296.84"
            y="14.2968"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 296.84 14.2968)"
            stroke="#A8A8A8"
          />
          <rect
            x="296.84"
            y="606.297"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 296.84 606.297)"
            stroke="#A8A8A8"
          />
          <rect
            x="0.839919"
            y="310.297"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 0.839919 310.297)"
            stroke="#A8A8A8"
          />
          <rect
            x="592.84"
            y="310.297"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 592.84 310.297)"
            stroke="#A8A8A8"
          />
          {/* front diamond */}
          <line
            ref={topRightPath}
            className="top-right-path svg-path"
            x1="606.326"
            y1="297.196"
            x2="323.484"
            y2="14.3535"
          />
          <line
            ref={bottomRightPath}
            className="bottom-right-path svg-path"
            x1="323.026"
            y1="606.489"
            x2="605.869"
            y2="323.646"
          />
          <line
            ref={bottomLeftPath}
            className="bottom-left-path svg-path"
            x1="296.896"
            y1="606.354"
            x2="14.0537"
            y2="323.511"
          />
          <line
            ref={topLeftPath}
            className="top-left-path svg-path"
            x1="13.6464"
            y1="297.489"
            x2="296.489"
            y2="14.6464"
          />
          <rect
            ref={topOuterDiamond}
            className="top-outer-diamond outer-diamond diamond "
            x="296.707"
            y="14.2968"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 296.707 14.2968)"
            onClick={tdClick}
          />
          <rect
            ref={topInnerDiamond}
            className="top-inner-diamond inner-diamond diamond "
            x="304.307"
            y="14.2968"
            width="8"
            height="7.92884"
            transform="rotate(-45 304.307 14.2968)"
            onClick={tdClick}
          />
          <rect
            ref={bottomOuterDiamond}
            onClick={bdClick}
            className="bottom-outer-diamond outer-diamond diamond"
            x="296.707"
            y="606.297"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 296.707 606.297)"
          />
          <rect
            ref={bottomInnerDiamond}
            onClick={bdClick}
            className="bottom-inner-diamond inner-diamond diamond"
            x="304.307"
            y="606.27"
            width="8"
            height="7.92884"
            transform="rotate(-45 304.307 606.27)"
          />
          <rect
            ref={leftOuterDiamond}
            onClick={ldClick}
            className="left-outer-diamond outer-diamond diamond"
            x="0.839919"
            y="310.297"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 0.839919 310.297)"
          />
          <rect
            ref={leftInnerDiamond}
            onClick={ldClick}
            className="left-inner-diamond inner-diamond diamond"
            x="8.4471"
            y="310.27"
            width="8"
            height="7.92884"
            transform="rotate(-45 8.4471 310.27)"
          />
          <rect
            onClick={rdClick}
            ref={rightOuterDiamond}
            className="right-outer-diamond outer-diamond diamond"
            x="592.84"
            y="310.297"
            width="18.8"
            height="18.6434"
            transform="rotate(-45 592.84 310.297)"
          />
          <rect
            onClick={rdClick}
            ref={rightInnerDiamond}
            className="right-inner-diamond inner-diamond diamond"
            x="600.447"
            y="310.27"
            width="8"
            height="7.92884"
            transform="rotate(-45 600.447 310.27)"
          />
        </svg>
      </div>
    </div>
  );
};

export default CircleSvg;
