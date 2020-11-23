import { TimelineLite, Power3 } from "gsap";

import React, { useRef } from "react";
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

  const topRightPath =useRef();
  const topLeftPath =useRef();
  const bottomLeftPath =useRef();
  const bottomRightPath =useRef();

  const fillTopLeftPath = () => {
      console.log("click",topRightPath.current);
    //   topRightPath.current.style.transition='all 0.5s ease'
      topRightPath.current.style.stroke='red'
  };
  const fillAllPath = () => {
    //   topRightPath.current.style.transition='all 0.5s ease'
    const tl=new TimelineLite()
    tl.to(
        topRightPath.current,0.5,{
stroke:'black'
        }
    ).to(
        bottomRightPath.current,0.5,{
stroke:'black'
        }
    ).to(
        bottomLeftPath.current,0.5,{
stroke:'black'
        }
    ).
    to(
        topLeftPath.current,0.5,{
stroke:'black'
        }
    )
    //   topRightPath.current.style.stroke='red'
    //   topLeftPath.current.style.stroke='red'
    //   bottomRightPath.current.style.stroke='red'
    //   bottomLeftPath.current.style.stroke='red'
  };
  return (
      <div className='circle-div'>
      {/*
        //group 1
        <svg
      width="300"
      height="300"
      viewBox="0 0 632 632"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={topRightPath}
        className="path"
        id="topRightPath"
        d="M332 16C497.685 16 616 134.315 616 300"
        stroke="black"
      />
      <path
        ref={topLeftPath}
        className="path"
        id="topLeftPath"
        d="M16 300C16 134.315 134.315 16 300 16"
        stroke="black"
      />
      <path
        ref={bottomLeftPath}
        className="path"
        id="bottomLeftPath"
        d="M300 616C134.315 616 16 497.685 16 332"
        stroke="black"
      />
      <path
        ref={bottomRightPath}
        className="path"
        id="bottomRightPath"
        d="M616 332C616 497.685 497.685 616 332 616"
        stroke="black"
      />
      <circle
        className="circle innerCircle"
        onClick={fillAllPath}
        ref={topOuterCircle}
        id="topOuterCircle"
        cx="316"
        cy="16"
        r="15.5"
        stroke="black"
      />
      <circle
        className="circle outerCircle"
        ref={topInnerCircle}
        id="topInnerCircle"
        cx="316"
        cy="16"
        r="7.5"
        stroke="black"
      />
      <circle
        className="circle innerCircle"
        ref={leftOuterCircle}
        id="leftOuterCircle"
        cx="16"
        cy="316"
        r="15.5"
        stroke="black"
      />
      <circle
        className="circle outerCircle"
        ref={leftInnerCircle}
        id="leftInnerCircle"
        cx="16"
        cy="316"
        r="7.5"
        stroke="black"
      />
      <circle
        onClick={fillTopLeftPath}
        className="circle innerCircle"
        ref={rightOuterCircle}
        id="rightOuterCircle"
        cx="616"
        cy="316"
        r="15.5"
        stroke="black"
      />
      <circle
        className="circle outerCircle"
        ref={rightInnerCircle}
        id="rightInnerCircle"
        cx="616"
        cy="316"
        r="7.5"
        stroke="black"
      />
      <circle
        className="circle innerCircle"
        ref={bottomOuterCircle}
        id="bottomOuterCircle"
        cx="316"
        cy="616"
        r="15.5"
        stroke="black"
      />
      <circle
        className="circle outerCircle"
        ref={bottomInnerCircle}
        id="bottomInnerCircle"
        cx="316"
        cy="616"
        r="7.5"
        stroke="black"
      />
    </svg>
    */}
   {/*  <svg width="324" height="324" viewBox="0 0 324 324" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="162" cy="2" r="1.95" stroke="#a4a4a4" stroke-width=".1"/>
<circle cx="162" cy="322" r="1.95" stroke="#a4a4a4" stroke-width=".1"/>
<circle cx="2" cy="162" r="1.95" stroke="#a4a4a4" stroke-width=".1"/>
<circle cx="322" cy="162" r="1.95" stroke="#a4a4a4" stroke-width=".1"/>
<circle cx="162" cy="2" r="1" fill="white"/>
<circle cx="162" cy="322" r="1" fill="white"/>
<circle cx="2" cy="162" r="1" fill="white"/>
<circle cx="322" cy="162" r="1" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M164 321.938C250.751 320.875 320.875 250.751 321.938 164H322.038C320.975 250.806 250.806 320.975 164 322.038L164 321.938Z" fill="#a4a4a4" stroke='#a4a4a4'/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.96223 164C3.02524 250.806 73.1942 320.975 160 322.038V321.938C73.2494 320.875 3.12524 250.751 2.06225 164H1.96223Z" fill="#a4a4a4"  stroke='#a4a4a4'/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M164 2.06224C250.751 3.12523 320.875 73.2494 321.938 160H322.038C320.975 73.1942 250.806 3.02524 164 1.96223V2.06224Z" fill="#a4a4a4" stroke='#a4a4a4'/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M160 1.96223C73.1942 3.02524 3.02524 73.1942 1.96223 160H2.06224C3.12523 73.2494 73.2494 3.12524 160 2.06225V1.96223Z" fill="#a4a4a4" stroke='#a4a4a4'/>
</svg> */}

    </div>
    );
};

export default CircleSvg;
