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
    tl.to(topRightPath.current, 4, {
      //strokeDasharray:0,
      strokeDashoffset: 0,

      ease: Power3.easeInOut,
    })
      .to(bottomRightPath.current, 4, {
        //strokeDasharray:0,
        strokeDashoffset: 0,

        ease: Power3.easeInOut,
      })
      .to(bottomLeftPath.current, 4, {
        //strokeDasharray:0,
        strokeDashoffset: 0,

        ease: Power3.easeInOut,
      })
      .to(topLeftPath.current, 4, {
        //strokeDasharray:0,
        strokeDashoffset: 0,

        ease: Power3.easeInOut,
      });
  }, []);
  const fillTopLeftPath = () => {
    console.log("click", topRightPath.current);
    //   topRightPath.current.style.transition='all 0.5s ease'
    topRightPath.current.style.stroke = "red";
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
      { /* <svg
        width="336"
        height="336"
        viewBox="0 0 336 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='circle_svg'
      >
        <circle
          className="circle outerCircle"
          ref={topOuterCircle}
          id="topOuterCircle"
          cx="168"
          cy="6"
          r="6"
          fill="#C4C4C4"
        onClick={fillAllPath}

        />
        <circle
          className="circle outerCircle"
          ref={bottomOuterCircle}
          id="bottomOuterCircle"
          cx="168"
          cy="330"
          r="6"
          fill="#C4C4C4"
        />
        <circle
          className="circle outerCircle"
          ref={rightOuterCircle}
          id="rightOuterCircle"
          cx="330"
          cy="168"
          r="6"
          fill="#C4C4C4"
        />
        <circle
          className="circle outerCircle"
          ref={leftOuterCircle}
          id="leftOuterCircle"
          cx="6"
          cy="168"
          r="6"
          fill="#C4C4C4"
        />
        <circle
          className="circle innerCircle"
          ref={topInnerCircle}
          id="topInnerCircle"
          cx="168"
          cy="6"
          r="3"
          fill="#FF0000"
        />
        <circle
          className="circle innerCircle"
          ref={bottomInnerCircle}
          id="bottomInnerCircle"
          cx="168"
          cy="330"
          r="3"
          fill="#FF0000"
        />
        <circle
          className="circle innerCircle"
          ref={rightInnerCircle}
          id="rightInnerCircle"
          cx="330"
          cy="168"
          r="3"
          fill="#FF0000"
        />
        <circle
          className="circle innerCircle"
          ref={leftInnerCircle}
          id="leftInnerCircle"
          cx="6"
          cy="168"
          r="3"
          fill="#FF0000"
        />
        <motion.path

          ref={bottomRightPath}
          className="path"
          id="bottomRightPath"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162 330.391C77.0245 327.307 8.69303 258.976 5.60872 174H6.60939C9.69272 258.423 77.5768 326.307 162 329.391V330.391Z"
initial={{strokeDasharray: 1000,
strokeDashoffset: 1000}}
transition={{
    duration:4,
}}

        />
        <motion.path
          ref={topLeftPath}
          className="path"
          id="topLeftPath"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M329.391 162C326.307 77.5768 258.423 9.69272 174 6.60939V5.60872C258.976 8.69303 327.307 77.0245 330.391 162H329.391Z"
initial={{strokeDasharray: 1000,
strokeDashoffset: 1000}}
transition={{
    duration:4,
}}
/>
        <motion.path
          ref={bottomLeftPath}
          className="path"
          id="bottomLeftPath"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M174 329.391C258.423 326.307 326.307 258.423 329.391 174H330.391C327.307 258.976 258.976 327.307 174 330.391V329.391Z"
initial={{strokeDasharray: 1000,
strokeDashoffset: 1000}}
transition={{
    duration:4,
}}
/>
        <motion.path
          ref={topRightPath}
          className="path"
          id="topRightPath"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162 5.60872C77.0245 8.69303 8.69303 77.0245 5.60872 162H6.60939C9.69272 77.5768 77.5768 9.69272 162 6.60939V5.60872Z"
initial={{strokeDasharray: 1000,
strokeDashoffset: 1000}}
transition={{
    duration:4,
}}
/>
      </svg>}


 */    }
{/*  <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="168" cy="5" r="4" stroke="black"/>
<circle cx="168" cy="331" r="4" stroke="black"/>
<circle cx="5" cy="168" r="4" stroke="black"/>
<circle cx="331" cy="168" r="4" stroke="black"/>
<circle cx="168" cy="5" r="3" fill="#FF1234"/>
<circle cx="168" cy="331" r="3" fill="#FF1234"/>
<circle cx="5" cy="168" r="3" fill="#FF1234"/>
<circle cx="331" cy="168" r="3" fill="#FF1234"/>
<mask id="path-9-inside-1" fill="white">
<path fillRule="evenodd" clipRule="evenodd" d="M4.54797 172C6.63175 258.787 76.3419 328.822 163 331.425C163.325 331.435 163.65 331.444 163.976 331.451L164 331.452V330.452C77.4316 328.361 7.63964 258.569 5.54827 172H4.54797Z"/>
</mask>
<path d="M163 331.425L163.03 330.425L163.03 330.425L163 331.425ZM4.54797 172V171H3.52367L3.54826 172.024L4.54797 172ZM163.976 331.451L163.952 332.451L163.952 332.451L163.976 331.451ZM164 331.452L163.976 332.452L165 332.476V331.452H164ZM164 330.452H165V329.476L164.024 329.452L164 330.452ZM5.54827 172L6.54798 171.976L6.5244 171H5.54827V172ZM163.03 330.425C76.9026 327.838 7.6187 258.232 5.54768 171.976L3.54826 172.024C5.6448 259.343 75.7811 329.805 162.97 332.425L163.03 330.425ZM164 330.452C163.676 330.444 163.353 330.435 163.03 330.425L162.97 332.425C163.297 332.434 163.624 332.443 163.952 332.451L164 330.452ZM164.024 330.452L164 330.452L163.952 332.451L163.976 332.452L164.024 330.452ZM163 330.452V331.452H165V330.452H163ZM4.54856 172.024C6.65282 259.126 76.8741 329.347 163.976 331.451L164.024 329.452C77.9891 327.374 8.62646 258.011 6.54798 171.976L4.54856 172.024ZM5.54827 171H4.54797V173H5.54827V171Z" fill="black" mask="url(#path-9-inside-1)"/>
<mask id="path-11-inside-2" fill="white">
<path fillRule="evenodd" clipRule="evenodd" d="M330.452 164H331.452C330.024 104.525 296.837 52.9182 248.201 25.4886C225.865 12.8919 200.272 5.39415 173 4.575C172.667 4.56499 172.334 4.55598 172 4.54797V5.54827C196.758 6.14632 220.145 12.282 240.967 22.764C292.952 48.9325 328.958 102.19 330.452 164Z"/>
</mask>
<path d="M330.452 164L329.452 164.024L329.476 165H330.452V164ZM331.452 164V165H332.476L332.452 163.976L331.452 164ZM248.201 25.4886L247.71 26.3596L247.71 26.3596L248.201 25.4886ZM173 4.575L173.03 3.57545L173 4.575ZM172 4.54797L172.024 3.54826L171 3.52368V4.54797H172ZM172 5.54827H171V6.5244L171.976 6.54798L172 5.54827ZM240.967 22.764L240.518 23.6572L240.518 23.6572L240.967 22.764ZM330.452 165H331.452V163H330.452V165ZM247.71 26.3596C296.051 53.6229 329.033 104.915 330.452 164.024L332.452 163.976C331.015 104.136 297.623 52.2135 248.692 24.6175L247.71 26.3596ZM172.97 5.57455C200.076 6.38872 225.512 13.8405 247.71 26.3596L248.692 24.6175C226.219 11.9434 200.468 4.39959 173.03 3.57545L172.97 5.57455ZM171.976 5.54769C172.308 5.55565 172.639 5.5646 172.97 5.57455L173.03 3.57545C172.695 3.56538 172.36 3.55632 172.024 3.54826L171.976 5.54769ZM173 5.54827V4.54797H171V5.54827H173ZM241.417 21.8708C220.465 11.3237 196.934 5.15027 172.024 4.54856L171.976 6.54798C196.583 7.14238 219.824 13.2403 240.518 23.6572L241.417 21.8708ZM331.451 163.976C329.949 101.783 293.719 48.1991 241.417 21.8708L240.518 23.6572C292.185 49.6659 327.968 102.596 329.452 164.024L331.451 163.976Z" fill="black" mask="url(#path-11-inside-2)"/>
<mask id="path-13-inside-3" fill="white">
<path fillRule="evenodd" clipRule="evenodd" d="M172 330.452L172 331.452C258.787 329.368 328.822 259.658 331.425 173C331.435 172.675 331.444 172.35 331.451 172.024L331.452 172H330.452C328.361 258.568 258.569 328.36 172 330.452Z"/>
</mask>
<path d="M172 330.452L171.976 329.452L171 329.476V330.452H172ZM172 331.452H171V332.476L172.024 332.452L172 331.452ZM331.425 173L330.425 172.97L330.425 172.97L331.425 173ZM331.451 172.024L332.451 172.048L332.451 172.048L331.451 172.024ZM331.452 172L332.452 172.024L332.476 171H331.452V172ZM330.452 172V171H329.476L329.452 171.976L330.452 172ZM171 330.452L171 331.452H173L173 330.452H171ZM330.425 172.97C327.838 259.097 258.232 328.381 171.976 330.452L172.024 332.452C259.343 330.355 329.805 260.219 332.425 173.03L330.425 172.97ZM330.452 172C330.444 172.324 330.435 172.647 330.425 172.97L332.425 173.03C332.434 172.703 332.443 172.376 332.451 172.048L330.452 172ZM330.452 171.976L330.452 172L332.451 172.048L332.452 172.024L330.452 171.976ZM330.452 173H331.452V171H330.452V173ZM172.024 331.451C259.126 329.347 329.347 259.126 331.451 172.024L329.452 171.976C327.374 258.011 258.011 327.374 171.976 329.452L172.024 331.451Z" fill="black" mask="url(#path-13-inside-3)"/>
<mask id="path-15-inside-4" fill="white">
<path fillRule="evenodd" clipRule="evenodd" d="M5.54827 164C7.10891 99.3998 46.3693 44.142 102.168 19.3877C111.82 15.1056 121.967 11.7363 132.5 9.38925C137.502 8.27448 142.592 7.39033 147.757 6.74856C149.796 6.49517 151.847 6.27957 153.909 6.10247C156.577 5.87328 159.263 5.70858 161.967 5.60991C162.644 5.58522 163.321 5.56467 164 5.54827V4.54797C163.666 4.55598 163.333 4.56499 163 4.575C139.804 5.27172 117.823 10.7998 98.0273 20.1873C43.8685 45.8707 6.07399 100.443 4.54797 164H5.54827Z"/>
</mask>
<path d="M102.168 19.3877L101.763 18.4736L102.168 19.3877ZM5.54827 164V165H6.5244L6.54798 164.024L5.54827 164ZM132.5 9.38925L132.717 10.3653L132.717 10.3653L132.5 9.38925ZM147.757 6.74856L147.88 7.74092L147.88 7.74092L147.757 6.74856ZM153.909 6.10247L153.823 5.10614L153.823 5.10614L153.909 6.10247ZM161.967 5.60991L161.93 4.61058L161.93 4.61058L161.967 5.60991ZM164 5.54827L164.024 6.54798L165 6.52441V5.54827H164ZM164 4.54797H165V3.52368L163.976 3.54826L164 4.54797ZM163 4.575L162.97 3.57545L162.97 3.57545L163 4.575ZM98.0273 20.1873L98.4558 21.0908L98.4558 21.0908L98.0273 20.1873ZM4.54797 164L3.54826 163.976L3.52368 165H4.54797V164ZM101.763 18.4736C45.6224 43.3793 6.11886 98.976 4.54856 163.976L6.54798 164.024C8.09897 99.8237 47.1161 44.9046 102.574 20.3017L101.763 18.4736ZM132.282 8.41319C121.685 10.7748 111.475 14.165 101.763 18.4736L102.574 20.3017C112.166 16.0462 122.25 12.6978 132.717 10.3653L132.282 8.41319ZM147.633 5.75619C142.437 6.40191 137.316 7.29151 132.282 8.41319L132.717 10.3653C137.689 9.25744 142.747 8.37875 147.88 7.74092L147.633 5.75619ZM153.823 5.10614C151.749 5.28432 149.685 5.50125 147.633 5.75619L147.88 7.74092C149.907 7.4891 151.945 7.27482 153.994 7.0988L153.823 5.10614ZM161.93 4.61058C159.21 4.70984 156.507 4.87555 153.823 5.10614L153.994 7.0988C156.646 6.87102 159.316 6.70731 162.003 6.60925L161.93 4.61058ZM163.976 4.54856C163.293 4.56506 162.611 4.58573 161.93 4.61058L162.003 6.60925C162.676 6.5847 163.349 6.56427 164.024 6.54798L163.976 4.54856ZM163 4.54797V5.54827H165V4.54797H163ZM163.03 5.57455C163.361 5.5646 163.692 5.55565 164.024 5.54769L163.976 3.54826C163.64 3.55632 163.305 3.56538 162.97 3.57545L163.03 5.57455ZM98.4558 21.0908C118.129 11.7613 139.975 6.26704 163.03 5.57455L162.97 3.57545C139.633 4.2764 117.516 9.83832 97.5988 19.2837L98.4558 21.0908ZM5.54769 164.024C7.06431 100.858 44.6259 46.6183 98.4558 21.0908L97.5988 19.2837C43.111 45.1232 5.08366 100.028 3.54826 163.976L5.54769 164.024ZM4.54797 165H5.54827V163H4.54797V165Z" fill="black" mask="url(#path-15-inside-4)"/>
</svg>
 */}
{/*  <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="168" cy="5" r="4.5" stroke="black"/>
 <circle cx="168" cy="331" r="4.5" stroke="black"/>
 <circle cx="331" cy="168" r="3" fill="#C4C4C4"/>
 <circle cx="5" cy="168" r="3" fill="#C4C4C4"/>
 <circle cx="331" cy="168" r="4.5" stroke="black"/>
 <circle cx="5" cy="168" r="4.5" stroke="black"/>
 <circle cx="168" cy="5" r="3" fill="#C4C4C4"/>
 <circle cx="168" cy="331" r="3" fill="#C4C4C4"/>
 <mask id="path-9-inside-1" fill="white">
 <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55944 164C6.88285 77.0882 77.0297 7.08817 164 5V6.0003C77.5821 8.08802 7.88271 77.6405 5.55981 164H4.55944ZM4.53773 172C6.39694 259.33 76.7284 329.809 164 331.904V330.904C77.2807 328.809 7.39681 258.778 5.53797 172H4.53773ZM172 331.904V330.904C258.719 328.809 328.603 258.778 330.462 172H331.462C329.603 259.33 259.272 329.809 172 331.904ZM331.441 164C329.117 77.0882 258.97 7.08817 172 5V6.0003C258.418 8.08802 328.117 77.6405 330.44 164H331.441Z"/>
 </mask>
 <path d="M164 5H165V3.9757L163.976 4.00029L164 5ZM4.55944 164L3.5598 163.973L3.53235 165H4.55944V164ZM164 6.0003L164.024 7L165 6.97643V6.0003H164ZM5.55981 164V165H6.53327L6.55945 164.027L5.55981 164ZM4.53773 172V171H3.51622L3.53796 172.021L4.53773 172ZM164 331.904L163.976 332.904L165 332.928V331.904H164ZM164 330.904H165V329.928L164.024 329.904L164 330.904ZM5.53797 172L6.53774 171.979L6.51678 171H5.53797V172ZM172 330.904L171.976 329.904L171 329.928V330.904H172ZM172 331.904H171V332.928L172.024 332.904L172 331.904ZM330.462 172V171H329.483L329.462 171.979L330.462 172ZM331.462 172L332.462 172.021L332.484 171H331.462V172ZM172 5L172.024 4.00029L171 3.9757V5H172ZM331.441 164V165H332.468L332.44 163.973L331.441 164ZM172 6.0003H171V6.97643L171.976 7L172 6.0003ZM330.44 164L329.441 164.027L329.467 165H330.44V164ZM163.976 4.00029C76.4732 6.10125 5.89744 76.5293 3.5598 163.973L5.55908 164.027C7.86827 77.6472 77.5863 8.0751 164.024 5.99971L163.976 4.00029ZM165 6.0003V5H163V6.0003H165ZM6.55945 164.027C8.86804 78.1995 78.1387 9.07486 164.024 7L163.976 5.00059C77.0255 7.10117 6.89739 77.0815 4.56017 163.973L6.55945 164.027ZM4.55944 165H5.55981V163H4.55944V165ZM3.53796 172.021C5.40855 259.886 76.17 330.796 163.976 332.904L164.024 330.904C77.2868 328.822 7.38533 258.774 5.53751 171.979L3.53796 172.021ZM165 331.904V330.904H163V331.904H165ZM164.024 329.904C77.8391 327.822 8.38513 258.222 6.53774 171.979L4.5382 172.021C6.4085 259.334 76.7223 329.796 163.976 331.903L164.024 329.904ZM5.53797 171H4.53773V173H5.53797V171ZM171 330.904V331.904H173V330.904H171ZM329.462 171.979C327.615 258.222 258.161 327.822 171.976 329.904L172.024 331.903C259.278 329.796 329.591 259.334 331.462 172.021L329.462 171.979ZM331.462 171H330.462V173H331.462V171ZM172.024 332.904C259.83 330.796 330.591 259.886 332.462 172.021L330.463 171.979C328.615 258.774 258.713 328.822 171.976 330.904L172.024 332.904ZM171.976 5.99971C258.414 8.0751 328.132 77.6472 330.441 164.027L332.44 163.973C330.103 76.5293 259.527 6.10125 172.024 4.00029L171.976 5.99971ZM173 6.0003V5H171V6.0003H173ZM331.44 163.973C329.103 77.0815 258.975 7.10117 172.024 5.00059L171.976 7C257.861 9.07486 327.132 78.1995 329.441 164.027L331.44 163.973ZM331.441 163H330.44V165H331.441V163Z" fill="black" mask="url(#path-9-inside-1)"/>
 </svg>
 */}
 <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M168 331.452C258.022 331.452 331 258.474 331 168.452C331 78.4296 258.022 5.45203 168 5.45203C77.9776 5.45203 5 78.4296 5 168.452C5 258.474 77.9776 331.452 168 331.452Z" stroke="black"/>
<circle cx="168" cy="5" r="4.5" stroke="black"/>
<circle cx="168" cy="331" r="4.5" stroke="black"/>
<circle cx="331" cy="168" r="3" fill="#C4C4C4"/>
<circle cx="5" cy="168" r="3" fill="#C4C4C4"/>
<circle cx="331" cy="168" r="4.5" stroke="black"/>
<circle cx="5" cy="168" r="4.5" stroke="black"/>
<circle cx="168" cy="5" r="3" fill="#C4C4C4"/>
<circle cx="168" cy="331" r="3" fill="#C4C4C4"/>
</svg>


    </div>
  );
};

export default CircleSvg;
