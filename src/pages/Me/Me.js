import React, { useEffect, useRef, useState } from "react";
import Image from "../../images/me/mhkasif.jpg";

import { TimelineLite, TweenLite } from "gsap/all";
import { Power3 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import BackButton from "../../Components/BackButton/BackButton";
import { connect } from "react-redux";
import Bitmoji from "../../images/bitmoji/bitmoji.gif";
import laugh from "../../images/bitmoji/laugh.PNG";
import popper from "../../images/bitmoji/popper.PNG";
import "./Me.scss";

import {
  enableScroll,
  disableScroll,
  setScrollCounter,
} from "../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import MyImage from "./MyImage.png";
import { debounce } from "lodash";
import cap from "../../images/design/cap.jpg";
import shoe from "../../images/design/shoes.jpg";
import woman from "../../images/design/women.jpg";
import gsapCore from "gsap/gsap-core";
import { gsap } from "gsap/all";
import SmoothScroll from "../../utils/SmoothScroll";
import { motion } from "framer-motion";
const Me = ({ enableScroll, disableScroll,setScrollCounter }) => {
  const pathRef = useRef();
  useEffect(() => {
    setScrollCounter(4)
    //scroll to slow down

    function scrollEffect() {
      var scroller = new SmoothScroll({
        target: document.querySelector(".me-container"), // element container to scroll
        scrollEase: 0.1, // scroll speed
        maxOffset: 200,
      });
      //   var container = document.querySelector(".me-container");

      //   var height;
      //   function setHeight() {
      //     height = container.clientHeight;
      //     document.body.style.height = height + "px";
      //   }
      //   // ScrollTrigger.addEventListener("refreshInit", setHeight);

      //   gsap.to(container, {
      //     y: () => -(height - document.documentElement.clientHeight),
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: document.body,
      //       start: "top top",
      //       end: "bottom bottom",
      //       scrub: 1,
      //       // invalidateOnRefresh: true
      //     },
      //   });
    }
    scrollEffect();
    //scroll to slow down

    enableScroll();
    gsap.defaults({ ease: "none" });
    // const tim = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".me-container",
    //     // pin: true,
    //     scrub: 1,
    //     // end: () => "+=" + document.querySelector(".me-container").offsetHeight/100
    //   },
    // });
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const tl = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02", {}, 0.2)
      .to(".text01", { y: -20 }, 0.2)
      .to(".exp-par-1", { opacity: 1, display: "block", scale: 1, y: -20 }, 0.2)
      // .to(".ball03, .text02", {}, 0.33)
      // .to(".ball04, .text03", {}, 0.46)
      .to(".ball05", {}, 0.52)
      .to(".text04", { y: -20 }, 0.52)
      .to(".exp-par-1", { opacity: 0, display: "none", scale: 1, y: -20 }, 0.51)
      .to(
        ".exp-par-2",
        { opacity: 1, display: "block", scale: 1, y: -20 },
        0.52
      )
      // .to(".ball06, .text05", {}, 0.74)
      .to(".ball07", {}, 1)
      .to(".text06", { y: -20 }, 1)
      .to(".exp-par-2", { opacity: 0, display: "none", scale: 1, y: -20 }, 0.98)
      .to(".exp-par-3", { opacity: 1, display: "block", scale: 1, y: -20 }, 1);
    // gsap.timeline({
    //   defaults: { duration: 1 },
    //   scrollTrigger: {
    //     trigger: ".exp-par-1",
    //     scrub: true,
    //     start: "-100 center",
    //     // end: "+=1050px",
    //     end: "+=1150",
    //     pin: '.exp',
    //     markers: true,
    //   },
    // });

    var action = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top bottom",
          end: "bottom center",
          // markers:true
        },
      })
      .set(".theLine", {
        strokeDasharray: pathRef.current.getTotalLength(),
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .to(
        ".ball01",
        { motionPath: { path: ".theLine", alignOrigin: [0.5, 0.5] } },
        0
      )
      .from(
        ".theLine",
        {
          strokeDashoffset: pathRef.current.getTotalLength(),
        },
        0
      )
      .add(tl, 0);

    // me-image animation
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".me-intro",
          scrub: true,
          start: "center top",
          end: "bottom 10%",
          // markers:true,
        },
      })
      .to(".img-container", {
        opacity: 0,
        ease: Power3.easeIn,
      });

    //me-image animation

    // me-info animation

    // gsap.timeline({
    //   defaults: { duration: 1 },
    //   scrollTrigger: {
    //     trigger: ".info",
    //     scrub: true,
    //     start: "-120 start",
    //     end: "70% center",
    //     markers:true,
    //     // pin:".info"
    //   },
    // })
    // .to(".info", {
    //   y:-50,
    //   ease: Power3.easeIn,
    // });

    // me-info animation

    return () => {
      document.body.style.height = "unset";
      disableScroll();
    };
    // const tl = new TimelineLite({
    //   scrollTrigger: {
    //     trigger: ".me-image-left",
    //     // toggleActions:"restart pause reverse pause",
    //     // start: "top top",
    //     scrub: true,
    //     // end: "bottom top",
    //     markers: true,
    //   },
    // });
    // tl.from(".me-image-left", {
    //   x: "-400%",
    //   duration: 1,
    //   // opacity:0
    // });
  }, []);
  return (
    <React.Fragment>
      <motion.div
      exit={{ x: "100%"}}
        key="me-div"
        initial={{ x:'100%' }}
        animate={{ x: 0 }}
        // animate={{ translateX: "0px",  }}
        transition={{
          // ease:'backIn',
          duration: .8,
        }}
      className="viewport">
        <EmailPopup />
        <div className="me-container">
          <BackButton />
          <div className="me-intro" data-depth="1">
            <div className="img-container">
              <img className="my-image" src={MyImage} alt="" />
            </div>
            <div className="info" data-depth="10">
              <div className="name-container">
                <div className="my-name extra-large-heading">Hola!</div>
                <div className="my-name extra-large-heading">I'm Haseeb</div>
              </div>
              <p className="big-paragraph intro-text">
                I'm a Full Stack developer from Pakistan and available for
                full-time roles
              </p>
            </div>
          </div>
          <div className="container-center" data-depth="10">
            <div className="about-me big-heading">
              I develop minimilist websites and designs for startups, brands,
              and entrepreneurs with cool projects.
            </div>
            <div className="summary-container" data-depth="10">
              <div className="summary-title medium-paragraph">Who i am</div>
              <div className="summary medium-paragraph">
                Goal-oriented passionate website-Developer and
                solutions-oriented problem-solving. Use numerous website design
                software system to develop customer-focused websites web design.
                Committed to high standards of website design, user experience,
                usability, and speed for multiple forms of end-users. Fortunate
                at maintaining client satisfaction through effective client
                support. Innovative website Developer with 4 years of experience
                in web design and website development. incontestible talent for
                front and back-end internet development to optimise online
                presence.
              </div>
            </div>
          </div>
          <div className="exp-heading" data-depth="10">
            Experience
          </div>
          <div className="me-svg-path-container">
            {/* <div className="exp">
              <p className="exp-par exp-par-1 medium-heading">
                Started As a freelancer
              </p>
              <p className="exp-par exp-par-2 medium-heading">
                Started Working For Slectus
              </p>
              <p className="exp-par exp-par-3 medium-heading">
                Started My Job At Maavan
              </p>
            </div> */}
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 1200"
            >
              <path className="line01 line" d="M 10 200  600 200"></path>
              {/* <path className="line02 line" d="M 10 400  600 400"></path>
            <path className="line03 line" d="M 10 600  600 600"></path> */}
              <path className="line04 line" d="M 10 700  600 700"></path>
              {/* <path className="line05 line" d="M 10 1000  600 1000"></path> */}
              <path className="line05 line" d="M 10 1200  600 1200"></path>
              <text className="svg-text text01" x="30" y="190">
                2016
              </text>
              <text
                className="exp-par exp-par-1 medium-heading"
                x="450"
                y="190"
              >
                Started As a freelancer
              </text>
              {/*  <text className="text02" x="30" y="390">
              2017
            </text>
            <text className="text03" x="30" y="590">
              2018
            </text> */}
              <text className="svg-text text04" x="30" y="690">
                2019
              </text>
              <text
                className="exp-par exp-par-2 medium-heading"
                x="450"
                y="690"
              >
                Started Working For Slectus
              </text>
              {/*  <text className="text05" x="30" y="990">
            2020
          </text> */}
              <text className="svg-text text06" x="30" y="1190">
                2021
              </text>
              <text
                className="exp-par exp-par-3 medium-heading"
                x="450"
                y="1190"
              >
                Started My Job At Maavan
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
              {/* <circle className="ball ball03" r="20" cx="347" cy="419"></circle>
            <circle className="ball ball04" r="20" cx="223" cy="621"></circle> */}
              <circle className="ball ball05" r="20" cx="160" cy="715"></circle>
              {/* <circle className="ball ball06" r="20" cx="323" cy="1014"></circle> */}
              <circle
                className="ball ball07"
                r="20"
                cx="160"
                cy="1220"
              ></circle>
            </svg>
          </div>
          <div className="marquee">
            <div className="marqueeone">
              <span>Badminton</span>&nbsp;&nbsp;&nbsp;
              <span>Photography</span>&nbsp;&nbsp;&nbsp;
              <span>Table-Tennis</span>&nbsp;&nbsp;&nbsp;
              <span>Cricket</span>&nbsp;&nbsp;&nbsp;
              <span>Movies</span>&nbsp;&nbsp;&nbsp;
              <span>Songs</span>&nbsp;&nbsp;&nbsp;
            </div>
            <div className="marqueetwo">
              <span>Badminton</span>&nbsp;&nbsp;&nbsp;
              <span>Photography</span>&nbsp;&nbsp;&nbsp;
              <span>Table-Tennis</span>&nbsp;&nbsp;&nbsp;
              <span>Cricket</span>&nbsp;&nbsp;&nbsp;
              <span>Movies</span>&nbsp;&nbsp;&nbsp;
              <span>Songs</span>&nbsp;&nbsp;&nbsp;
            </div>
            <div className="marqueethree">
              <span>Badminton</span>&nbsp;&nbsp;&nbsp;
              <span>Photography</span>&nbsp;&nbsp;&nbsp;
              <span>Table-Tennis</span>&nbsp;&nbsp;&nbsp;
              <span>Cricket</span>&nbsp;&nbsp;&nbsp;
              <span>Movies</span>&nbsp;&nbsp;&nbsp;
              <span>Songs</span>&nbsp;&nbsp;&nbsp;
            </div>
            <div className="marqueefour">
              <span>Badminton</span>&nbsp;&nbsp;&nbsp;
              <span>Table-Tennis</span>&nbsp;&nbsp;&nbsp;
              <span>Cricket</span>&nbsp;&nbsp;&nbsp;
              <span>Movies</span>&nbsp;&nbsp;&nbsp;
              <span>Songs</span>&nbsp;&nbsp;&nbsp;
            </div>
          </div>

          <div className="container-center" data-depth="10">
            <div className="about-me big-heading">
              Whenever, wherever. We're meant to work together.
            </div>
            <div className="regards-container">
              <div className="regards-title medium-paragraph">
                Contact me for full-time jobs, freelance projects or to say
                hello
              </div>
              <div className="regards medium-paragraph">
                I have an inbox zero rule so I’ll see your message for sure and,
                I’ll reply with at least one smiley. I promise.
              </div>
            </div>
          </div>
          <div className="me-footer">
            <div className="bitmoji-container">
              <img src={Bitmoji} className="bitmoji-gif" alt="" />
              Inspired from &nbsp;
              <span style={{ textDecoration: "underline" }}> Robin</span>
            </div>
            <div>Let my magical skills to be applied on your work </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

const EmailPopup = () => {
  const [emailPopupState, setState] = useState("");
  const mouseOver = () => {
    if (emailPopupState !== "copied") {
      const tl = new TimelineLite({});
      tl.to(".content-list", 0.25, {
        y: "-60px",
      })

      // .to('.email-popup-copied',{
      //   y:"-100%"
      // })
    }
  };
  const mouseLeave = () => {
    if (emailPopupState) setState("");
    const tl = new TimelineLite().set(".email-popup", {
      className: "email-popup",
    });
    tl.to(".content-list", 0.25, {
      y: 0,
    });
  };
  const emailClicked = () => {
    setState("copied");
    const tl = new TimelineLite();
    // tl.to('.content-list',{
    //   y:"-100px"

    // })
    tl.set(
      ".email-popup",

      {
        className: "email-popup email-popup-white",
      }
    );
    navigator.clipboard.writeText("Mhkasif97@gmail.com");
  };
  return (
    <React.Fragment>
      <div
        className="email-popup"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onClick={emailClicked}
      >
        <div className="content-list">
          <div className="email-popup-email">
            <div className="bitmoji-wrapper"> haseebasif97@gmail.com</div>
          </div>
          <div className="email-popup-copy">
            {emailPopupState !== "copied" ? (
              <div className="bitmoji-wrapper">
                <img className="email-popup-bitmoji" src={laugh} alt="" />
                <div> Copy Email</div>
              </div>
            ) : (
              <div className="bitmoji-wrapper">
                <img className="email-popup-bitmoji" src={popper} alt="" />
                <div> Email Copied</div>
              </div>
            )}
          </div>

          {/* <div className="email-popup-copied">

              <div className="bitmoji-wrapper">

                <img className="email-popup-bitmoji" src={wink} alt="" />
                <div> Email Copied</div>
              </div>
            </div> */}
        </div>
      </div>

      {/* <div onClick={emailClicked} onMouseOver={mouseOver} onMouseLeave={mouseLeave} className={`email-popup ${emailPopupState==="copied"? "email-popup-white":""}`}>
     {!emailPopupState?<div>Haseebasif97@gmail.com</div>:(emailPopupState==='hover'?<div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}><img className="email-popup-bitmoji" src={laugh} alt="" /><p>Copy Email</p></div>:<div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}><img className="email-popup-bitmoji" src={wink} alt="" /><p>Email Copied</p></div>)}
     </div> */}
    </React.Fragment>
  );
};
const actions = {
  enableScroll,
  disableScroll,setScrollCounter
};

export default connect(null, actions)(Me);
