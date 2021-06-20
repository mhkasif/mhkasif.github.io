import { motion } from "framer-motion";
import { TimelineLite, Power3 } from "gsap";
import { set } from "lodash";

import React, { useEffect, useRef, useState } from "react";
import "./DiamondSvg.scss";
const DiamondSvg = () => {
  const [active, setActive] = useState("");
  const topOuterDiamond = useRef();
  const topInnerDiamond = useRef();
  const leftOuterDiamond = useRef();
  const leftInnerDiamond = useRef();
  const rightOuterDiamond = useRef();
  const rightInnerDiamond = useRef();
  const bottomOuterDiamond = useRef();
  const bottomInnerDiamond = useRef();

  const topHeading = useRef();
  const rightHeading = useRef();
  const bottomHeading = useRef();
  const leftHeading = useRef();

  const topRightPath = useRef();
  const topLeftPath = useRef();
  const bottomLeftPath = useRef();
  const bottomRightPath = useRef();
  // const videoRef = useRef();
  useEffect(() => {
    const tl = new TimelineLite({
      delay: .8,
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
      )
      .to(".detail", 1, {
        delay: 0.2,
        x: 0,
      })
      .to(".inside-heading", 0.5, {
        y: 0,
      })
      .to(".inside-paragraph", 0.5, {
        y: 0,
      })
      .set(".detail", {
        transition: "all .3s ease-in-out",
      });
  }, []);
  useEffect(() => {
    // videoRef.current.load()
    if (!active) return;
    const tl = new TimelineLite();
    tl.set([".inside-heading", ".inside-paragraph"], {
      y: "100%",
    })
      .to(".inside-heading", 0.5, {
        y: 0,
        // ease:Power3.easeInOut
      })
      .to(".inside-paragraph", 0.5, {
        y: 0,
        // ease:Power3.easeInOut
      });
  }, [active]);
  const tdClick = () => {
    setActive(".top-detail");

    const tl = new TimelineLite();
    if (
      topInnerDiamond.current.style.fill.includes("transparent") ||
      !topInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });
    hideText(topHeading);
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
    setActive(".right-detail");

    const tl = new TimelineLite();
    if (
      rightInnerDiamond.current.style.fill.includes("transparent") ||
      !rightInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });
    hideText(rightHeading);

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
    setActive(".bottom-detail");

    const tl = new TimelineLite();
    if (
      bottomInnerDiamond.current.style.fill.includes("transparent") ||
      !bottomInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });
    hideText(bottomHeading);

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
    setActive(".left-detail");

    const tl = new TimelineLite();
    if (
      leftInnerDiamond.current.style.fill.includes("transparent") ||
      !leftInnerDiamond.current.style.fill
    )
      tl.set(".inner-diamond", {
        fill: "transparent",
      });
    hideText(leftHeading);

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
  const hideText = (ref) => {
    const tl = new TimelineLite();
    tl.to(
      ".translate-negative",
      0.1,
      {
        x: "-110%",
        ease: Power3.easeOut,
      },
      0
    )
      .to(
        ".translate-positive",
        0.1,
        {
          x: "110%",
          ease: Power3.easeOut,
        },
        0
      )
      .set(ref.current, {
        x: 0,
      });
  };
  const onHover = (ref) => {
    const tl = new TimelineLite();

    tl.to(
      ".translate-negative",
      0.1,
      {
        x: "-110%",
        ease: Power3.easeOut,
      },
      0
    )
      .to(
        ".translate-positive",
        0.1,
        {
          x: "110%",
          ease: Power3.easeOut,
        },
        0
      )
      .set(ref.current, {
        x: 0,
      });
  };
  const onNotHover = (ref) => {
    const tl = new TimelineLite();
    tl.to(
      ".detail",
      0.1,
      {
        x: 0,
        ease: Power3.easeOut,
      },
      0
    );
  };
  const singleHover = (ref) => {
    const tl = new TimelineLite();
    tl.to(
      ref.current,
      0.02,
      {
        x: 0,
        ease: Power3.easeOut,
      },
      0
    );
  };
  const singleNotHover = (ref, dir, classname) => {
    const tl = new TimelineLite();
    tl.to(
      ref.current,
      0.02,
      {
        x: dir === "negative" ? "-110%" : "110%",
        ease: Power3.easeOut,
      },
      0
    );

    if (classname === active)
      tl.set(classname, {
        x: 0,
      });
  };
  return (
    <React.Fragment>
      <video
      className="about-videos"
        key=".top-detail"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        style={{ display: active === ".top-detail" ? "block" : "none" }}
        // ref={videoRef}
      >
        <source src="/videos/sara.mp4" />
      </video>
      <video
      className="about-videos"
        key=".right-detail"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        style={{ display: active === "" ? "block" : "none" }}
        // ref={videoRef}
      >
        <source src="/videos/reel.mp4" />
      </video>
      <video
      className="about-videos"
        key=".bottom-detail"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        style={{ display: active === ".right-detail" ? "block" : "none" }}
        // ref={videoRef}
      >
        <source src="/videos/ben.mp4" />
      </video>
      <video
      className="about-videos"
        key=".left-detail"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        style={{ display: active === ".bottom-detail" ? "block" : "none" }}
        // ref={videoRef}
      >
        <source src="/videos/aylin.mp4" />
      </video>
      <video
      className="about-videos"
        key="none"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        style={{ display: active === ".left-detail" ? "block" : "none" }}
        // ref={videoRef}
      >
        <source src="/videos/dave.mp4" />
      </video>

      <div className="circle-div">
        <div className="svg-container">
          {
            active === ".top-detail" ? (
              <Details
                heading="Web Developer"
                paragraph="Select a Circle member's name to hear how Squarespace empowered their professional evolution."
              />
            ) : active === ".right-detail" ? (
              <Details
                heading="Web Designer"
                paragraph="Select a Circle member's name to hear how Squarespace empowered their professional evolution."
              />
            ) : active === ".bottom-detail" ? (
              <Details
                heading="Mobile App Developer"
                paragraph="Select a Circle member's name to hear how Squarespace empowered their professional evolution."
              />
            ) : active === ".left-detail" ? (
              <Details
                heading="Photographer"
                paragraph="Select a Circle member's name to hear how Squarespace empowered their professional evolution."
              />
            ) : (
              <Details
                heading="Be With Us"
                paragraph="Select a Circle member's name to hear how Squarespace empowered their professional evolution."
              />
            )
            //   ["",
            //   ".top-detail",
            //   ".right-detail",
            //   ".bottom-detail",
            //   ".left-detail",
            // ].map((item) => {
            //   const data=[{heading:"Be With Us",paragraph:'"Select a Circle member name to hear how Squarespace empowered their professional evolution"'},{heading:"Web Designer",paragraph:""},{heading:"",paragraph:""},{heading:"",paragraph:""},{heading:"",paragraph:""}]
            //   console.log(item)
            //   if(active===item)
            //  return <Details
            //     heading={item|| "Heading"}
            //     paragraph="Select a Circle member's name to hear how Squarespace empowered their professional evolution."
            //   />;
            // })
          }

          <div
            onMouseLeave={
              !active
                ? onNotHover
                : () => singleNotHover(topHeading, "negative", ".top-detail")
            }
            onMouseOver={
              !active
                ? () => onHover(topHeading)
                : () => singleHover(topHeading)
            }
            className="overflow-wrapper detail-container top-detail-container"
            onClick={tdClick}
          >
            <div
              ref={topHeading}
              className="detail translate-negative top-detail"
            >
              <div>Web Developer</div>
            </div>
          </div>

          <div
            onMouseLeave={
              !active
                ? onNotHover
                : () =>
                    singleNotHover(rightHeading, "negative", ".right-detail")
            }
            onMouseOver={
              !active
                ? () => onHover(rightHeading)
                : () => singleHover(rightHeading)
            }
            onClick={rdClick}
            className="overflow-wrapper detail-container right-detail-container"
          >
            <div
              ref={rightHeading}
              className="detail translate-negative right-detail"
            >
              <div>Web Designer</div>
            </div>
          </div>

          <div
            onMouseLeave={
              !active
                ? onNotHover
                : () =>
                    singleNotHover(bottomHeading, "negative", ".bottom-detail")
            }
            onMouseOver={
              !active
                ? () => onHover(bottomHeading)
                : () => singleHover(bottomHeading)
            }
            onClick={bdClick}
            className="overflow-wrapper detail-container bottom-detail-container"
          >
            <div
              ref={bottomHeading}
              className="detail translate-negative bottom-detail"
            >
              <div>Mobile App Developer</div>
            </div>
          </div>

          <div
            onMouseLeave={
              !active
                ? onNotHover
                : () => singleNotHover(leftHeading, "positive", ".left-detail")
            }
            onMouseOver={
              !active
                ? () => onHover(leftHeading)
                : () => singleHover(leftHeading)
            }
            onClick={ldClick}
            className="overflow-wrapper detail-container  left-detail-container"
          >
            <div
              ref={leftHeading}
              className="detail translate-positive left-detail"
            >
              <div>Photographer</div>
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () => singleNotHover(topHeading, "negative", ".top-detail")
              }
              onMouseOver={
                !active
                  ? () => onHover(topHeading)
                  : () => singleHover(topHeading)
              }
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () => singleNotHover(topHeading, "negative", ".top-detail")
              }
              onMouseOver={
                !active
                  ? () => onHover(topHeading)
                  : () => singleHover(topHeading)
              }
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () =>
                      singleNotHover(
                        bottomHeading,
                        "negative",
                        ".bottom-detail"
                      )
              }
              onMouseOver={
                !active
                  ? () => onHover(bottomHeading)
                  : () => singleHover(bottomHeading)
              }
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () =>
                      singleNotHover(
                        bottomHeading,
                        "negative",
                        ".bottom-detail"
                      )
              }
              onMouseOver={
                !active
                  ? () => onHover(bottomHeading)
                  : () => singleHover(bottomHeading)
              }
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () =>
                      singleNotHover(leftHeading, "positive", ".left-detail")
              }
              onMouseOver={
                !active
                  ? () => onHover(leftHeading)
                  : () => singleHover(leftHeading)
              }
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () =>
                      singleNotHover(leftHeading, "positive", ".left-detail")
              }
              onMouseOver={
                !active
                  ? () => onHover(leftHeading)
                  : () => singleHover(leftHeading)
              }
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () =>
                      singleNotHover(rightHeading, "negative", ".right-detail")
              }
              onMouseOver={
                !active
                  ? () => onHover(rightHeading)
                  : () => singleHover(rightHeading)
              }
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
              onMouseLeave={
                !active
                  ? onNotHover
                  : () =>
                      singleNotHover(rightHeading, "negative", ".right-detail")
              }
              onMouseOver={
                !active
                  ? () => onHover(rightHeading)
                  : () => singleHover(rightHeading)
              }
            />
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};
const Details = ({ heading, paragraph }) => {
  return (
    <div className="inside-details-container">
      <div className="overflow-wrapper" style={{ margin: "20px 0" }}>
        <h1 className="inside-heading">{heading}</h1>
      </div>
      <div className="overflow-wrapper">
        <p className="inside-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default DiamondSvg;
