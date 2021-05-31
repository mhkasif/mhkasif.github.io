import { motion } from "framer-motion";
import { TimelineLite, Power3 } from "gsap";

import React, { useEffect, useRef } from "react";
import "./CircleSvg.scss";
const CircleSvg = () => {
  const topOuterCircle = useRef();
  const topInnerCircle = useRef();
  const leftOuterCircle = useRef();
  const leftInnerCircle = useRef();
  const rightOuterCircle = useRef();
  const rightInnerCircle = useRef();
  const bottomOuterCircle = useRef();
  const bottomInnerCircle = useRef();

  const topRightPath = useRef();
  const topLeftPath = useRef();
  const bottomLeftPath = useRef();
  const bottomRightPath = useRef();
  useEffect(() => {
    const tl = new TimelineLite();
    tl.to(topRightPath.current, 1, {
      //strokeDasharray:0,
      strokeDashoffset: 0,

      ease: Power3.easeInOut,
    },0)
      .to(bottomRightPath.current, 1, {
        //strokeDasharray:0,
        strokeDashoffset: 0,


        ease: Power3.easeInOut,
      },0)
      .to(bottomLeftPath.current, 1, {
        //strokeDasharray:0,
        strokeDashoffset: 0,

        ease: Power3.easeInOut,
      },0)
      .to(topLeftPath.current, 1, {
        //strokeDasharray:0,
        strokeDashoffset: 0,

        ease: Power3.easeInOut,
      },0);
  }, []);
  const fillTopLeftPath = () => {
    console.log("click", topRightPath.current);
      topRightPath.current.style.transition='all 1.5s ease'
    topRightPath.current.style.strokeDashoffset = 0;
  };
  const fillAllPath = () => {
    //   topRightPath.current.style.transition='all 0.5s ease'
    const tl = new TimelineLite();
    tl.to(topRightPath.current, {
      stroke: "red",
      fill: "red",
      duration: 4,
    })
      .to(bottomRightPath.current, 4, {
        stroke: "red",
        fill: "red",
      })
      .to(bottomLeftPath.current, 4, {
        stroke: "red",
        fill: "red",
      })
      .to(topLeftPath.current, 4, {
        stroke: "red",
        fill: "red",
      });
    //   topRightPath.current.style.stroke='red'
    //   topLeftPath.current.style.stroke='red'
    //   bottomRightPath.current.style.stroke='red'
    //   bottomLeftPath.current.style.stroke='red'
  };
  return (
    <div className="circle-div">
    <svg width="335" height="355" viewBox="0 0 632 633" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="path" ref={topLeftPath} d="M9.12134 308.5L307.52 10.1009" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    <circle ref={topOuterCircle} className="circle" cx="316.1" cy="9" r="8.5" stroke="black"/>
    <path className="path" ref={bottomLeftPath} d="M306.12 622.5L9.13515 325.515" stroke="black" strokeLinecap="round"/>
    <circle ref={leftOuterCircle} className="circle" cx="9" cy="317" r="8.5" stroke="black"/>
    <path className="path" ref={bottomRightPath} d="M621.999 325.5L323.6 623.899" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    <circle onClick={fillTopLeftPath} ref={bottomOuterCircle} className="circle" cx="315.02" cy="623.5" r="8.5" transform="rotate(-180 315.02 623.5)" stroke="black"/>
    <path className="path" ref={topRightPath} d="M324.88 10.5L621.865 307.485" stroke="black"  strokeLinecap="round"/>
    <circle ref={rightOuterCircle} className="circle" cx="622.12" cy="316.5" r="8.5" transform="rotate(-180 622.12 316.5)" stroke="black"/>
    </svg>
    </div>
  );
};

export default CircleSvg;
