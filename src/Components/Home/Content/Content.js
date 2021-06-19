import React, { Component, useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { TimelineLite, Power3 } from "gsap";
import {
  decrementCounter,
  setScrollCounter,
} from "../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";

import SlectusHome from "./SlectusHome/SlectusHome";
import HkjobzHome from "./HkjobzHome/HkjobzHome";
import AboutHome from "./AboutHome/AboutHome";
import ProjectHome from "./ProjectsHome/ProjectHome";
import { Timeline } from "gsap/gsap-core";
import "../../../CSS/Content.scss";
import gsap from "gsap/gsap-core";
import Contact from "./Contact/Contact";
import { motion } from "framer-motion";
const Content = ({ scrollCounter, setScrollCounter }) => {
  const isFirstRender = React.useRef(true);
  const LineTL = useRef();
  const LineTR = useRef();
  const LineLT = useRef();
  const LineLB = useRef();
  const LineBL = useRef();
  const LineBR = useRef();
  const LineR = useRef();
  useEffect(() => {

    if (!isFirstRender.current) {
      const tl = new TimelineLite({});
      tl.set(".non-active", { display: "none" })
        .to(
          ".active",
          1,
          {
            y: "-100%",
          },
          0
        )
        .to(
          ".page-number-down",
          1,
          {
            y: "100%",
          },
          0
        )
        .to(
          ".divider",
          1,
          {
            width: "0%",
          },
          0
        )
        .to(
          ".active",
          1,
          {
            y: "0",
          },
          2.1
        )
        .to(
          ".page-number-down",
          1,
          {
            y: "0%",
          },
          2.1
        )
        .to(
          ".divider",
          1,
          {
            width: "80%",
          },
          2.1
        );
    }
  }, [scrollCounter]);
  useEffect(() => {
    linesAnimationOnRenderFilled()
    isFirstRender.current = false;
    // var { l1, l2, l3, l4 } = this.refs;
    var tl = new TimelineLite({});
    // tl.to(l1, 1, { scale:(1), ease: Power3.easeOut })
    //   .to(l2, 1, {scale:(1), ease: Power3.easeOut }, 0)
    //   .to(l3, 1, { scale:(1), ease: Power3.easeOut }, 0)
    //   .to(l4, 1, { scale:(1), ease: Power3.easeOut }, 0);
    tl.set(".active", {
      y: -100,
      opacity: 0,
    })
      .to(".active", 1, {
        y: 0,
        opacity: 1,
      })
      .to(
        ".page-number-down",
        1,
        {
          y: 0,
          opacity: 1,
        },
        0
      )
      .to(
        ".divider",
        1,
        {
          width: "80%",
        },
        0
      );


    console.log('unm')
    // linesAnimationOnRenderUnFilled()
    }, []);

  const linesAnimationOnRenderFilled = () => {
  const tl=new Timeline({

  })
  tl
  .from(LineTL.current,1.2,{
    x:"-100%"
  },.4)
  .from(LineTR.current,1.2,{
    x:"100%"
  },.4)
  .from(LineBL.current,1.2,{
    x:"-100%"
  },.4)
  .from(LineBR.current,1.2,{
    x:"100%"
  },.4)
  .from(LineLT.current,1.2,{
    y:"-100%"
  },.4)
  .from(LineLB.current,1.2,{
    y:"100%"
  },.4)
  .from(LineR.current,1.2,{

    y:"100%"
  },.4)
}
  const linesAnimationOnRenderUnFilled = () => {
  const tl=new Timeline({

  })
  tl
  .to(LineTL.current,1.2,{
    x:"-100%"
  },0)
  .to(LineTR.current,1.2,{
    x:"100%"
  },0)
  .to(LineBL.current,1,{
    x:"-100%"
  },0)
  .to(LineBR.current,1,{
    x:"100%"
  },0)
  .to(LineLT.current,1,{
    y:"-100%"
  },0)
  .to(LineLB.current,1,{
    y:"100%"
  },0)
  .to(LineR.current,1,{

    y:"100%"
  },0)
}
  // exitAnimationOnWheelDown = () => {
  //   console.log("called");
  //   var { l1, l2, l3, l4 } = this.refs;
  //   var tl = new TimelineLite({
  //     onComplete: () => {
  //       this.props.decrementCounter();
  //     },
  //   });
  //   tl.to(l1, 1, { scaleX: 0, ease: Power3.easeInOut })
  //     .to(l2, 1, { scaleY: 0, ease: Power3.easeInOut }, 0)
  //     .to(l3, 1, { scaleX: 0, ease: Power3.easeInOut }, 0)
  //     .to(l4, 1, { scaleY: 0, ease: Power3.easeInOut }, 0);
  // };

  const hover = () => {
    const tl = new Timeline();
    tl.to(".page-number-up", {
      display: "block",
      ease: Power3.easeIn,
      duration: 0.5,
    });
  };
  const mouseOver = (cname) => {
    console.log(cname);
    gsap.to(".overflow-wrapper", {
      ease: Power3.easeInOut,
      scrollTo: {
        y: cname,
        offsetY: 20,
      },
    });
  };
  const leave = () => {
    const tl = new Timeline();
    tl.to(".non-active", {
      display: "none",
      ease: Power3.easeOut,
      duration: 0.5,
    });
  };
  return (
    <motion.div

    key="contet-div"
    exit={{x:"-100%"}}
    // initial={{x:"100%"}}
    // animate={{x:0}}
    transition={{
      delay:1,
      duration:1
    }}
      className={`contentContainer ${scrollCounter === 5 ? "blue-bg" : ""} ${
        scrollCounter === 6 ? "dark-bg" : ""
      }`}
    >
      {scrollCounter === 5 && <div className="background-ball"></div>}
      <div className="contentWindow">
        <div
          className="page-count"
          style={{
            color:
              (scrollCounter === 5 ||
                scrollCounter === 4 ||
                scrollCounter === 6) &&
              "rgba(255,255,255,0.7)",
          }}
        >
          <div
            onMouseLeave={leave}
            onMouseOver={hover}
            className="overflow-wrapper "
          >
            <div className="page-number-up-container page-number-overflow-wrapper">
              <div
                onClick={() => setScrollCounter(1)}
                onMouseOver={() => mouseOver("#page-number-up-1")}
                id="page-number-up-1"
                className={`page-number page-number-up page-number-up-1 ${
                  scrollCounter === 1 ? "active" : "non-active"
                }`}
                style={{ display: scrollCounter === 1 ? "block" : "none" }}
              >
                1
              </div>
              <div
                onClick={() => setScrollCounter(2)}
                onMouseOver={() => mouseOver("#page-number-up-2")}
                id="page-number-up-2"
                className={`page-number page-number-up page-number-up-2 ${
                  scrollCounter === 2 ? "active" : "non-active"
                }`}
                style={{ display: scrollCounter === 2 ? "block" : "none" }}
              >
                2
              </div>
              <div
                onClick={() => setScrollCounter(3)}
                onMouseOver={() => mouseOver("#page-number-up-3")}
                id="page-number-up-3"
                className={`page-number page-number-up page-number-up-3 ${
                  scrollCounter === 3 ? "active" : "non-active"
                }`}
                style={{ display: scrollCounter === 3 ? "block" : "none" }}
              >
                3
              </div>
              <div
                onClick={() => setScrollCounter(4)}
                onMouseOver={() => mouseOver("#page-number-up-4")}
                id="page-number-up-4"
                className={`page-number page-number-up page-number-up-4 ${
                  scrollCounter === 4 ? "active" : "non-active"
                }`}
                style={{ display: scrollCounter === 4 ? "block" : "none" }}
              >
                4
              </div>
              <div
                onClick={() => setScrollCounter(5)}
                onMouseOver={() => mouseOver("#page-number-up-5")}
                id="page-number-up-5"
                className={`page-number page-number-up page-number-up-5 ${
                  scrollCounter === 5 ? "active" : "non-active"
                }`}
                style={{ display: scrollCounter === 5 ? "block" : "none" }}
              >
                5
              </div>
              <div
                onClick={() => setScrollCounter(6)}
                onMouseOver={() => mouseOver("#page-number-up-6")}
                id="page-number-up-6"
                className={`page-number page-number-up page-number-up-6 ${
                  scrollCounter === 6 ? "active" : "non-active"
                }`}
                style={{ display: scrollCounter === 6 ? "block" : "none" }}
              >
                6
              </div>
            </div>
          </div>

          <div
            className="divider"
            style={{
              borderBottomColor:
                (scrollCounter === 5 ||
                  scrollCounter === 4 ||
                  scrollCounter === 6) &&
                "rgba(255,255,255,0.7)",
            }}
          />
          <div className="overflow-wrapper">
            <div className="page-number page-number-down">6</div>
          </div>
        </div>
        <div className="lineWrapperTopLeft lineWrapper">
          <div
            // ref="l2"
            ref={LineTL}
            className={`line lineTopLeft ${
              scrollCounter === 4 ? "line-white" : ""
            }`}
          ></div>
        </div>

        <div className="lineWrapperTopRight lineWrapper">
          <div
            // ref="l1"
            ref={LineTR}
            className={`line lineTopRight ${
              scrollCounter === 4 ? "line-white" : ""
            }`}
          ></div>
        </div>

        <div className="lineWrapperRight lineWrapper">
          <div
            // ref="l3"
            ref={LineR}
            className={`line lineRight ${
              scrollCounter === 4 ? "line-white" : ""
            }`}
          ></div>
        </div>
        {scrollCounter !== 5 ? (
          <React.Fragment>
            <div className="lineWrapperBottomRight lineWrapper">
              <div
                // ref="l4"
                ref={LineBR}
                className={`line lineBottomRight ${
                  scrollCounter === 4 ? "line-white" : ""
                }`}
              ></div>
            </div>
            <div className="lineWrapperBottomLeft lineWrapper">
              <div
                // ref="l4"
                ref={LineBL}
                className={`line lineBottomLeft ${
                  scrollCounter === 4 ? "line-white" : ""
                }`}
              ></div>
            </div>
          </React.Fragment>
        ) : (
          <div className="lineWrapperBottomFull lineWrapper">
            <div
              // ref="l4"
              className={`line lineBottomFull ${
                scrollCounter === 4 ? "line-white" : ""
              }`}
            ></div>
          </div>
        )}
        <div className="lineWrapperLeftBottom lineWrapper">
          <div
            // ref="l4"
            ref={LineLB}
            className={`line lineLeftBottom ${
              scrollCounter === 4 ? "line-white" : ""
            }`}
          ></div>
        </div>
        <div className="lineWrapperLeftTop lineWrapper">
          <div
            // ref="l4"
            ref={LineLT}
            className={`line lineLeftTop ${
              scrollCounter === 4 ? "line-white" : ""
            }`}
          ></div>
        </div>
        {/* <div className="hamPadder"></div>
                        <div className="pageStatusPadder"></div>
                        <div className="btnPadder"></div>
                        <div className="headingPadder"></div> */}

        {scrollCounter === 2 && (
          <SlectusHome
          // exitAnimationOnWheelDown={this.exitAnimationOnWheelDown}
          />
        )}

        {scrollCounter === 3 && <HkjobzHome
           linesTransitionOnUnmount={linesAnimationOnRenderUnFilled}
           />}
        {scrollCounter === 4 && <AboutHome
          linesTransitionOnUnmount={linesAnimationOnRenderUnFilled}
          />}
        {scrollCounter === 5 && <ProjectHome
           linesTransitionOnUnmount={linesAnimationOnRenderUnFilled}
           />}
        {scrollCounter === 6 && <Contact
          linesTransitionOnUnmount={linesAnimationOnRenderUnFilled}
          />}
      </div>
    </motion.div>
  );
  // }
};

var mapStateToProps = (state) => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable,
});

var actions = {
  decrementCounter,
  setScrollCounter,
};

export default connect(mapStateToProps, actions)(Content);
