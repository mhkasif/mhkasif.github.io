import { motion } from "framer-motion";
import { gsap, TimelineLite } from "gsap/all";
import { Power3 } from "gsap/gsap-core";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bitmoji from "../../images/bitmoji/bitmoji.gif";
import laugh from "../../images/bitmoji/laugh-min.PNG";
import popper from "../../images/bitmoji/popper-min.PNG";
import dw from "../../images/icons/download.png";
import fb from "../../images/icons/fb.png";
import gh from "../../images/icons/github.png";
import insta from "../../images/icons/insta.png";
import li from "../../images/icons/linkedin.png";
import twitter from "../../images/icons/twitter.png";
import Mui from "../../images/skills/mui.png";
import NodejsImage from "../../images/skills/node.png";
import ReactImage from "../../images/skills/react.png";
import RN from "../../images/skills/rn.png";
import {
  disableScroll,
  enableScroll,
  setScrollCounter,
} from "../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import Resume from "../../resume/MHK Resume.pdf";
import SmoothScroll from "../../utils/SmoothScroll";
import "./Me.scss";
import MyImage from "../../images/me/MyImage-min.png";

const Me = ({ enableScroll, disableScroll, setScrollCounter }) => {
  const [elementPosition, setElementPosition] = useState({
    display: "none",
    top: 0,
    left: 0,
    name: "",
  });
  const pathRef = useRef();
  const muiImage = useRef();
  const reactImage = useRef();
  const nodeImage = useRef();
  const rnImage = useRef();

  useEffect(() => {
    document.getElementsByTagName("body")[0].classList.add("pinkScroll");
    window.onresize = window.onload = function () {
      gsap.set(".m1_stage", { x: "50%", opacity: 1 });
    };
    return () => {
      document.getElementsByTagName("body")[0].classList.remove("pinkScroll");
    };
  }, []);

  useEffect(() => {
    //
    window.scrollTo(0, 0);
    setScrollCounter(4);
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
  useEffect(() => {
    //skills func
    gsap
      .timeline({ defaults: { duration: 45 } })
      .from(".main1", { duration: 1, autoAlpha: 0, ease: "power1.inOut" }, 0)
      .fromTo(
        ".m1_cGroup",
        { opacity: 0 },
        { duration: 0.3, opacity: 1, stagger: -0.1 },
        0
      )
      .from(
        ".m1_cGroup",
        {
          duration: 2.5,
          scale: -0.3,
          transformOrigin: "50% 50%",
          stagger: -0.05,
          ease: "elastic",
        },
        0
      )
      .fromTo(
        ".m1Bg",
        { opacity: 0 },
        { duration: 1, opacity: 1, ease: "power2.inOut" },
        0.2
      )

      .add("orbs", 1.2)
      .add(function () {
        document.getElementsByClassName("main1")[0].addEventListener(
          "mousemove",

          // $('.main1').on('mousemove',
          function (e) {
            gsap.to(".m1_cGroup", {
              duration: 1,
              x: function (i) {
                return (e.clientX / window.innerWidth / (i + 1)) * 150;
              },
              y: function (i) {
                return i * -20 * (e.clientY / window.innerHeight);
              },
              rotation: Math.random() * 0.1,
              overwrite: "auto",
            });
            gsap.to(".c1_solid, .c1_line", {
              duration: 1,
              attr: { opacity: 1.1 - 0.75 * (e.clientY / window.innerHeight) },
            });
            gsap.to(".m1OrbBlank", {
              duration: 1,
              opacity: 0.2 + 0.55 * (e.clientY / window.innerHeight),
            });
          }
        );

        // $('.main1').on('click',
        document.getElementsByClassName("main1")[0].addEventListener(
          "click",

          function (e) {
            if (gsap.getProperty(".m1_cGroup", "scale") != 1) return; //prevent overlapping bouncy tweens
            for (
              var i = 0;
              i < document.getElementsByClassName("m1_cGroup").length;
              i++
            ) {
              gsap.fromTo(
                document.getElementsByClassName("m1_cGroup")[i],
                { transformOrigin: "50% 50%", scale: 1 },
                {
                  duration: 0.7 - i / 25,
                  scale: 0.9,
                  ease: "back.in(10)",
                  yoyo: true,
                  repeat: 1,
                }
              );
            }
          }
        );
      }, "orbs+=0.5")

      .fromTo(
        ".orb1",
        { xPercent: -35, yPercent: -5 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line1", false)[0];
            },
            start: 1.03,
            end: 1.22,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb2",
        { xPercent: -45, yPercent: -10 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line2", false)[0];
            },
            start: 0.98,
            end: 1.2,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb3",
        { xPercent: -50, yPercent: -15 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.06,
            end: 1.31,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb3b",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.49,
            end: 1.65,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb3c",
        { xPercent: -45, yPercent: -15 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 0.95,
            end: 1.2,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb4",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
            },
            start: 1.14,
            end: 1.26,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb4b",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
            },
            start: 1.41,
            end: 1.6,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".m1Orb",
        { scale: 0, transformOrigin: "50% 50%" },
        {
          duration: 0.8,
          scale: 1.5,
          ease: "back.out(3)",
          stagger: 0.15,
          overwrite: "auto",
        },
        "orbs"
      )
      .fromTo(
        ".m1OrbBlank",
        { opacity: 0 },
        {
          duration: 0.8,
          opacity: function (i) {
            return 0.2 + i / 7;
          },
          stagger: 0.1,
          overwrite: "auto",
        },
        "orbs"
      )
      .fromTo(
        ".m1OrbBlank",
        {
          x: function (i) {
            return 620 - (i / 4) * 380;
          },
          transformOrigin: function (i) {
            return -(620 - (i / 4) * 380) + "px 0px";
          },
          rotation: function (i) {
            return [99, -10, 55, 110, 120][i];
          },
        },
        { rotation: "+=75", yoyo: true, repeat: -1 },
        "orbs"
      );
  }, []);
  const handleMouseEnterOnSkillsImage = (ref, name) => {
    const x = ref.current.getBoundingClientRect().x;
    const y = ref.current.getBoundingClientRect().y - 30;
    console.log(x, y);
    setElementPosition({ top: y, left: x, display: "block", name });
    console.log("mouse entere", ref.current.getBoundingClientRect());
  };
  const handleMouseLeaveOnSkillsImage = (ref) => {
    setElementPosition({ ...elementPosition, display: "none" });
  };
  return (
    <React.Fragment>
      <motion.div
        exit={{ x: "100%" }}
        key="me-div"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        // animate={{ translateX: "0px",  }}
        transition={{
          // ease:'backIn',
          duration: 0.8,
        }}
        className="viewport"
      >
        <div className="element-name" style={elementPosition}>
          {elementPosition.name}
        </div>
        <EmailPopup />
        <div className="me-container">
          {/* <BackButton /> */}
          <div className="me-intro" data-depth="1">
            <div className="img-container">
              <img className="my-image" src={MyImage} alt="mhk mhkasif" />
            </div>
            <div className="info" data-depth="10">
              <div className="name-container">
                <div className="my-name extra-large-heading">Hola!</div>
                <div className="my-name extra-large-heading">I'm MHK Asif</div>
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
          <div data-depth="10" className="exp-heading skills-heading">
            Skills
          </div>
          <div className="skills-section" data-depth="1">
            {/* <div className="skill-details"></div> */}
            {/*
            <div className="skill-icon ">
                <div
                className="skill-logo"
                style={{ width: 200, height: 200 }}
              > */}
            {/*
              <img
              ref={rRef}

                src={ReactImage} height="200" width="200" alt="" />

                  </div>
                <div className="skill-logo" ref={rnRef}>
              <img src={NodejsImage} alt="" />
              </div>
              <div className="skill-logo" ref={nRef}>
              <img src={RN} alt="" />
              </div>
              <div className="skill-logo" ref={muiRef}>
              <img src={Mui} alt="" />
              </div> */}
            <svg className="main1" width="100vw" height="1000">
              <defs>
                <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop
                    offset="10%"
                    style={{ stopColor: "#c1033c", stopOpacity: 0.9 }}
                  />
                  <stop
                    offset="99%"
                    style={{ stopColor: "#c1033c", stopOpacity: 0.6 }}
                  />
                </linearGradient>
                <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop
                    offset="25%"
                    style={{ stopColor: "#252525", stopOpacity: 0.1 }}
                  />
                  <stop
                    offset="99%"
                    style={{ stopColor: "#252525", stopOpacity: 0.2 }}
                  />
                </linearGradient>
              </defs>

              <rect
                className="m1Bg"
                fill="url(#grad2)"
                width="100%"
                height="100%"
              />

              <g className="m1_stage">
                <g className="m1_cGroup">
                  <circle
                    className="c1_line c1_line4"
                    cx="0"
                    cy="50"
                    r="550"
                    fill="none"
                    strokeWidth="2"
                    stroke="url(#grad1)"
                    opacity="0.4"
                  />
                  <g className="m1Orb orb4b">
                    <image
                      style={{ cursor: "pointer" }}
                      className="svg-images"
                      ref={rnImage}
                      onMouseEnter={() =>
                        handleMouseEnterOnSkillsImage(rnImage, "React Native")
                      }
                      onMouseLeave={() =>
                        handleMouseLeaveOnSkillsImage(rnImage)
                      }
                      xlinkHref={RN}
                      width="60"
                      height="60"
                    />
                  </g>

                  <g className="m1Orb orb4">
                    <circle cx="15" cy="10.5" r="20" fill="#006bca" />
                    <path
                      fill="#fff"
                      opacity="0.75"
                      d="M5.29,14.59l-0.01-0.89v-2.32c0.23-0.05,0.53-0.07,0.9-0.07c0.36,0,0.66,0.02,0.9,0.07v8.17
                                            c-0.24,0.05-0.54,0.07-0.9,0.07s-0.65-0.02-0.9-0.07v-2.57l0.01-0.89l-0.6,0.01H3.25l-0.6-0.01l0.01,0.89v2.57
                                            c-0.23,0.05-0.54,0.07-0.9,0.07c-0.37,0-0.66-0.02-0.89-0.07v-8.17c0.23-0.05,0.52-0.07,0.89-0.07c0.37,0,0.67,0.02,0.9,0.07v2.32
                                            l-0.01,0.89l0.6-0.01h1.44L5.29,14.59z M11.74,12.89l0.01,0.89v5.78c-0.24,0.05-0.54,0.07-0.9,0.07c-0.36,0-0.65-0.02-0.9-0.07
                                            v-5.78l0.01-0.89H9.96L9.23,12.9H7.99c-0.04-0.23-0.06-0.48-0.06-0.76c0-0.28,0.02-0.53,0.06-0.76h5.75
                                            c0.06,0.21,0.09,0.45,0.09,0.73c0,0.28-0.07,0.48-0.22,0.6c-0.15,0.12-0.39,0.19-0.72,0.19h-0.41l-0.73-0.01H11.74z M14.19,19.53
                                            l0.62-8.14c0.3-0.06,0.69-0.08,1.18-0.08c0.49,0,0.88,0.03,1.17,0.08l0.75,3.04c0.21,0.89,0.36,1.6,0.45,2.14h0.07
                                            c0.09-0.54,0.23-1.26,0.45-2.14l0.75-3.04c0.3-0.06,0.69-0.08,1.17-0.08c0.48,0,0.87,0.03,1.16,0.08l0.62,8.14
                                            c-0.22,0.06-0.5,0.1-0.84,0.1s-0.63-0.02-0.84-0.06L20.7,16.1c-0.06-1.1-0.09-2.01-0.09-2.72h-0.08l-1.22,4.97
                                            c-0.21,0.04-0.51,0.06-0.91,0.06c-0.39,0-0.71-0.02-0.93-0.06l-1.21-4.97h-0.08c-0.02,0.97-0.05,1.88-0.09,2.72l-0.19,3.47
                                            c-0.22,0.04-0.5,0.06-0.84,0.06C14.7,19.63,14.42,19.6,14.19,19.53z M26.92,18.01H29c0,0.26-0.02,0.49-0.05,0.68
                                            c-0.09,0.6-0.48,0.9-1.17,0.9h-2.7c-0.32,0-0.57-0.1-0.76-0.29c-0.19-0.19-0.28-0.45-0.28-0.79v-7.13l0.08-0.07h0.66
                                            c0.7,0,1.06,0.38,1.06,1.15v5.59C26.23,18.03,26.59,18.01,26.92,18.01z M5.59,3.67c0-0.04,0-0.08,0-0.13c0-0.53-0.11-0.98-0.32-1.36
                                            C5.05,1.82,4.67,1.63,4.13,1.63S3.19,1.89,2.94,2.39C2.69,2.9,2.56,3.63,2.56,4.59c0,0.96,0.16,1.67,0.47,2.15
                                            c0.31,0.47,0.77,0.71,1.36,0.71c0.6,0,1.3-0.3,2.12-0.9C6.7,6.68,6.89,6.87,7.07,7.11c0.18,0.24,0.29,0.47,0.34,0.68
                                            c-0.38,0.38-0.88,0.7-1.49,0.96C5.3,9,4.7,9.13,4.11,9.13c-0.59,0-1.08-0.09-1.48-0.26C2.23,8.7,1.9,8.47,1.64,8.19
                                            C1.38,7.9,1.17,7.56,1,7.17C0.69,6.44,0.53,5.6,0.53,4.65c0-1.51,0.34-2.65,1.03-3.41C2.25,0.48,3.1,0.1,4.12,0.1
                                            c1.01,0,1.82,0.25,2.41,0.75c0.6,0.5,0.89,1.12,0.89,1.86c0,0.71-0.37,1.06-1.1,1.06C6.08,3.77,5.84,3.74,5.59,3.67z M7.9,8.18
                                            c0.03-0.27,0.11-0.54,0.25-0.8C8.3,7.11,8.47,6.9,8.66,6.74c0.92,0.56,1.77,0.84,2.56,0.84c0.36,0,0.64-0.09,0.83-0.26
                                            c0.19-0.17,0.28-0.38,0.28-0.63c0-0.42-0.28-0.76-0.85-1.01L9.99,5.04c-1.2-0.52-1.8-1.3-1.8-2.32c0-0.77,0.29-1.4,0.87-1.89
                                            c0.58-0.49,1.35-0.73,2.3-0.73c0.95,0,1.89,0.24,2.82,0.72c-0.04,0.58-0.26,1.07-0.66,1.46c-0.86-0.41-1.62-0.62-2.28-0.62
                                            c-0.35,0-0.61,0.08-0.8,0.25c-0.19,0.16-0.28,0.35-0.28,0.56c0,0.34,0.26,0.62,0.78,0.85l1.52,0.63c0.61,0.26,1.08,0.61,1.41,1.03
                                            c0.33,0.43,0.5,0.91,0.5,1.45c0,0.8-0.28,1.45-0.85,1.95c-0.57,0.5-1.39,0.75-2.45,0.75c-0.52,0-1.07-0.08-1.64-0.25
                                            C8.87,8.71,8.36,8.48,7.9,8.18z M14.83,8.18c0.03-0.27,0.11-0.54,0.25-0.8c0.14-0.27,0.31-0.48,0.51-0.64
                                            c0.92,0.56,1.77,0.84,2.56,0.84c0.36,0,0.64-0.09,0.83-0.26c0.19-0.17,0.28-0.38,0.28-0.63c0-0.42-0.28-0.76-0.85-1.01l-1.49-0.63
                                            c-1.2-0.52-1.8-1.3-1.8-2.32c0-0.77,0.29-1.4,0.87-1.89c0.58-0.49,1.35-0.73,2.3-0.73c0.95,0,1.89,0.24,2.82,0.72
                                            c-0.04,0.58-0.26,1.07-0.66,1.46c-0.86-0.41-1.62-0.62-2.28-0.62c-0.35,0-0.61,0.08-0.8,0.25c-0.19,0.16-0.28,0.35-0.28,0.56
                                            c0,0.34,0.26,0.62,0.78,0.85l1.52,0.63c0.61,0.26,1.08,0.61,1.41,1.03c0.33,0.43,0.5,0.91,0.5,1.45c0,0.8-0.28,1.45-0.85,1.95
                                            c-0.57,0.5-1.39,0.75-2.45,0.75c-0.52,0-1.07-0.08-1.64-0.25C15.8,8.71,15.29,8.48,14.83,8.18z M24.1,4.42l-0.01-0.85V2.43
                                            c0.24-0.04,0.51-0.06,0.82-0.06c0.31,0,0.58,0.02,0.8,0.06v1.14L25.7,4.42l0.82-0.01h1.06c0.05,0.27,0.08,0.53,0.08,0.77
                                            c0,0.25-0.03,0.49-0.08,0.75h-1.06L25.7,5.91l0.01,0.81v1.15c-0.23,0.04-0.5,0.06-0.81,0.06s-0.58-0.02-0.81-0.06V6.72l0.01-0.81
                                            l-0.82,0.01h-1.06c-0.05-0.24-0.08-0.49-0.08-0.76s0.03-0.52,0.08-0.76h1.06L24.1,4.42z"
                    />
                  </g>
                </g>
                <g className="m1_cGroup">
                  <circle
                    className="m1OrbBlank"
                    cx="0"
                    cy="50"
                    r="25"
                    fill="#983334"
                  />

                  <circle
                    className="c1_line c1_line3"
                    cx="0"
                    cy="50"
                    r="450"
                    fill="none"
                    strokeWidth="2"
                    stroke="url(#grad1)"
                    opacity="0.4"
                  />

                  <g className="m1Orb orb3c">
                    <image
                      className="svg-images"
                      ref={nodeImage}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() =>
                        handleMouseEnterOnSkillsImage(nodeImage, "Nodejs")
                      }
                      onMouseLeave={() =>
                        handleMouseLeaveOnSkillsImage(nodeImage)
                      }
                      xlinkHref={NodejsImage}
                      width="60"
                      height="60"
                    />
                  </g>

                  <g className="m1Orb orb3b">
                    <image
                      className="svg-images"
                      xlinkHref={ReactImage}
                      width="60"
                      height="60"
                      ref={reactImage}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() =>
                        handleMouseEnterOnSkillsImage(reactImage, "React")
                      }
                      onMouseLeave={() =>
                        handleMouseLeaveOnSkillsImage(reactImage)
                      }
                    />
                  </g>
                  <g className="m1Orb orb3">
                    <circle
                      cx="20"
                      cy="8"
                      r="24"
                      stroke="#bc7c00"
                      strokeWidth="3"
                      fill="#cc971b"
                    />
                    <path
                      fill="#fff"
                      opacity="0.7"
                      d="M5.82,6.1c0-0.05,0-0.09,0-0.14c0-0.57-0.11-1.06-0.34-1.46c-0.23-0.4-0.62-0.6-1.19-0.6S3.32,4.18,3.05,4.73
                                           c-0.27,0.55-0.4,1.34-0.4,2.37c0,1.03,0.16,1.81,0.49,2.31c0.33,0.51,0.8,0.76,1.43,0.76c0.62,0,1.36-0.32,2.22-0.97
                                           C7,9.35,7.19,9.55,7.38,9.81c0.19,0.26,0.31,0.5,0.35,0.73c-0.4,0.41-0.92,0.75-1.57,1.03c-0.65,0.28-1.28,0.42-1.89,0.42
                                           c-0.61,0-1.13-0.09-1.55-0.28c-0.42-0.19-0.77-0.43-1.03-0.74c-0.27-0.3-0.49-0.67-0.67-1.1C0.7,9.09,0.53,8.18,0.53,7.16
                                           c0-1.63,0.36-2.85,1.08-3.67c0.72-0.82,1.61-1.23,2.67-1.23c1.06,0,1.9,0.27,2.53,0.81C7.44,3.6,7.75,4.27,7.75,5.07
                                           c0,0.76-0.38,1.15-1.15,1.15C6.35,6.21,6.09,6.18,5.82,6.1z M14.18,10.84c-0.04,0.18-0.12,0.38-0.25,0.59
                                           c-0.13,0.21-0.25,0.36-0.38,0.46c-0.61-0.03-1.07-0.27-1.38-0.72c-0.57,0.55-1.19,0.82-1.88,0.82c-0.69,0-1.2-0.21-1.55-0.63
                                           c-0.35-0.42-0.52-0.9-0.52-1.43c0-0.77,0.25-1.36,0.75-1.76c0.5-0.4,1.12-0.6,1.86-0.6c0.29,0,0.62,0.01,0.99,0.04v-0.3
                                           c0-0.6-0.3-0.9-0.9-0.9c-0.38,0-1.04,0.15-1.98,0.44C8.69,6.52,8.53,6.05,8.48,5.42c0.42-0.18,0.91-0.33,1.48-0.44
                                           c0.57-0.11,1.08-0.16,1.52-0.16c0.66,0,1.22,0.19,1.66,0.57c0.45,0.38,0.67,0.96,0.67,1.76v2.79
                                           C13.81,10.36,13.93,10.66,14.18,10.84z M10.8,10.47c0.34,0,0.69-0.15,1.03-0.45V8.89c-0.19-0.01-0.46-0.01-0.8-0.01
                                           c-0.59,0-0.89,0.31-0.89,0.92c0,0.19,0.06,0.35,0.18,0.48C10.45,10.41,10.6,10.47,10.8,10.47z M20.52,7.27v2.84
                                           c0,0.58,0.11,1.03,0.32,1.35c-0.34,0.29-0.73,0.44-1.16,0.44c-0.43,0-0.73-0.1-0.89-0.31c-0.16-0.21-0.25-0.53-0.25-0.96V7.65
                                           c0-0.34-0.04-0.58-0.13-0.74c-0.09-0.15-0.24-0.23-0.46-0.23c-0.38,0-0.74,0.18-1.09,0.53v4.58c-0.27,0.05-0.6,0.08-0.98,0.08
                                           c-0.38,0-0.71-0.03-1-0.08v-6.8l0.09-0.1h0.74c0.55,0,0.9,0.27,1.05,0.82c0.65-0.56,1.27-0.85,1.88-0.85c0.61,0,1.07,0.22,1.39,0.66
                                           C20.36,5.95,20.52,6.54,20.52,7.27z M24.2,10.23l1.22-5.24c0.19-0.05,0.46-0.07,0.8-0.07c0.34,0,0.65,0.05,0.94,0.15l0.07,0.1
                                           c-0.87,3.17-1.49,5.38-1.87,6.62c-0.44,0.05-0.9,0.08-1.37,0.08s-0.8-0.07-1.01-0.2c-0.2-0.13-0.36-0.39-0.48-0.78l-1.62-5.75
                                           c0.43-0.18,0.8-0.27,1.11-0.27c0.31,0,0.55,0.07,0.73,0.22c0.18,0.15,0.31,0.39,0.39,0.72l0.64,2.61c0.06,0.23,0.13,0.55,0.2,0.96
                                           c0.07,0.41,0.11,0.66,0.13,0.74C24.09,10.19,24.13,10.23,24.2,10.23z M33.3,10.84c-0.04,0.18-0.12,0.38-0.25,0.59
                                           c-0.13,0.21-0.25,0.36-0.38,0.46c-0.61-0.03-1.07-0.27-1.38-0.72c-0.57,0.55-1.19,0.82-1.88,0.82c-0.69,0-1.2-0.21-1.55-0.63
                                           c-0.35-0.42-0.52-0.9-0.52-1.43c0-0.77,0.25-1.36,0.75-1.76c0.5-0.4,1.12-0.6,1.86-0.6c0.29,0,0.62,0.01,0.99,0.04v-0.3
                                           c0-0.6-0.3-0.9-0.9-0.9c-0.38,0-1.04,0.15-1.98,0.44c-0.27-0.32-0.42-0.79-0.48-1.42c0.42-0.18,0.91-0.33,1.48-0.44
                                           c0.57-0.11,1.08-0.16,1.52-0.16c0.66,0,1.22,0.19,1.66,0.57c0.45,0.38,0.67,0.96,0.67,1.76v2.79C32.92,10.36,33.05,10.66,33.3,10.84
                                           z M29.91,10.47c0.34,0,0.69-0.15,1.03-0.45V8.89c-0.19-0.01-0.46-0.01-0.8-0.01c-0.59,0-0.89,0.31-0.89,0.92
                                           c0,0.19,0.06,0.35,0.18,0.48C29.56,10.41,29.72,10.47,29.91,10.47z M33.72,11.31c0.01-0.22,0.07-0.46,0.18-0.74
                                           c0.11-0.27,0.24-0.48,0.38-0.63c0.69,0.37,1.3,0.56,1.84,0.56c0.27,0,0.47-0.05,0.62-0.14c0.15-0.1,0.22-0.22,0.22-0.38
                                           c0-0.29-0.21-0.51-0.64-0.67l-0.73-0.27c-1.11-0.42-1.67-1.1-1.67-2.03c0-0.68,0.23-1.22,0.69-1.63s1.07-0.6,1.84-0.6
                                           c0.38,0,0.8,0.05,1.26,0.16c0.46,0.11,0.84,0.24,1.15,0.4c0.01,0.25-0.04,0.51-0.15,0.81c-0.11,0.29-0.25,0.5-0.4,0.61
                                           c-0.73-0.34-1.34-0.51-1.83-0.51c-0.19,0-0.35,0.05-0.45,0.14s-0.16,0.21-0.16,0.35c0,0.23,0.19,0.41,0.56,0.56l0.81,0.3
                                           C38.41,8.05,39,8.78,39,9.78c0,0.67-0.24,1.21-0.73,1.61c-0.49,0.4-1.17,0.6-2.06,0.6C35.33,11.99,34.5,11.76,33.72,11.31z"
                    />
                  </g>
                </g>
                <g className="m1_cGroup">
                  <circle
                    className="m1OrbBlank"
                    cx="0"
                    cy="50"
                    r="15"
                    fill="#653997"
                  />

                  <circle
                    className="c1_line c1_line2"
                    cx="0"
                    cy="50"
                    r="360"
                    fill="none"
                    strokeWidth="2"
                    stroke="url(#grad1)"
                    opacity="0.5"
                  />

                  <g className="m1Orb orb2">
                    {/* <circle
                        cx="18.5"
                        cy="7"
                        r="24.5"
                        fill="#983334"
                        strokeWidth="2.5"
                        stroke="#b9393a"
                      /> */}
                    <image
                      className="svg-images"
                      ref={muiImage}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() =>
                        handleMouseEnterOnSkillsImage(muiImage, "Material-UI")
                      }
                      onMouseLeave={() =>
                        handleMouseLeaveOnSkillsImage(muiImage)
                      }
                      xlinkHref={Mui}
                      width="60"
                      height="60"
                    />
                  </g>
                </g>
                <g className="m1_cGroup">
                  <circle
                    className="m1OrbBlank"
                    cx="0"
                    cy="50"
                    r="20"
                    fill="#653997"
                  />
                  <circle
                    className="m1OrbBlank"
                    cx="0"
                    cy="50"
                    r="40"
                    fill="rgba(125,200,32,0.19)"
                  />

                  <circle
                    className="c1_solid"
                    cx="0"
                    cy="50"
                    r="280"
                    fill="url(#grad1)"
                    opacity="0.2"
                  />
                  <circle
                    className="c1_line c1_line1"
                    cx="0"
                    cy="50"
                    r="279"
                    fill="none"
                    strokeWidth="3"
                    stroke="url(#grad1)"
                    opacity="0.5"
                  />
                  <g className="m1Orb orb1">
                    <circle cx="12.5" cy="7" r="17" fill="#653997" />
                    <circle
                      cx="12.5"
                      cy="7"
                      r="20"
                      fill="none"
                      stroke="#653997"
                    />
                    <path
                      fill="#fff"
                      opacity="0.7"
                      d="M0.24,10.94c0.03-0.3,0.12-0.6,0.28-0.89s0.35-0.53,0.56-0.71c1.02,0.62,1.96,0.92,2.83,0.92
                                           c0.4,0,0.71-0.1,0.92-0.29c0.21-0.19,0.31-0.42,0.31-0.69c0-0.47-0.31-0.84-0.94-1.12l-1.65-0.7C1.22,6.89,0.56,6.04,0.56,4.91
                                           c0-0.85,0.32-1.54,0.97-2.09c0.64-0.54,1.49-0.81,2.54-0.81c1.05,0,2.09,0.27,3.12,0.8C7.14,3.45,6.89,3.99,6.45,4.42
                                           C5.5,3.96,4.66,3.73,3.93,3.73C3.55,3.73,3.26,3.82,3.05,4C2.85,4.19,2.74,4.39,2.74,4.63c0,0.37,0.29,0.69,0.87,0.94l1.68,0.7
                                           c0.67,0.29,1.19,0.67,1.56,1.14s0.55,1.01,0.55,1.6c0,0.89-0.31,1.61-0.94,2.16c-0.63,0.55-1.53,0.83-2.71,0.83
                                           c-0.58,0-1.18-0.09-1.81-0.28C1.31,11.52,0.74,11.27,0.24,10.94z M12.19,9.99l1.9-7.77c0.24-0.06,0.55-0.08,0.93-0.08
                                           s0.7,0.05,0.97,0.14l0.1,0.13l-2.65,9.38c-0.5,0.06-1.01,0.08-1.53,0.08s-0.88-0.07-1.11-0.2c-0.23-0.13-0.4-0.39-0.51-0.78
                                           L7.94,2.41C8.44,2.2,8.86,2.09,9.2,2.09s0.59,0.08,0.77,0.25s0.32,0.44,0.42,0.81l1.12,4.13c0.19,0.65,0.37,1.49,0.55,2.52
                                           C12.07,9.93,12.12,9.99,12.19,9.99z M21.01,6.4l2.18-0.01c0.01,0,0.02,0,0.03,0c0.93,0,1.4,0.45,1.4,1.34v3.67
                                           c-1.16,0.39-2.41,0.59-3.75,0.59c-1.34,0-2.37-0.44-3.07-1.32s-1.05-2.08-1.05-3.61c0-0.82,0.12-1.56,0.37-2.22
                                           c0.25-0.66,0.58-1.19,1-1.6c0.84-0.82,1.87-1.23,3.08-1.23s2.34,0.34,3.39,1.01c-0.03,0.29-0.14,0.58-0.33,0.88s-0.4,0.52-0.64,0.67
                                           c-0.77-0.51-1.54-0.77-2.31-0.77c-1.59,0-2.38,1.08-2.38,3.26c0,2.17,0.79,3.25,2.38,3.25c0.4,0,0.83-0.04,1.29-0.13V9.15
                                           c0-0.42,0.01-0.74,0.03-0.97h-0.77c-0.35,0-0.61-0.07-0.77-0.2s-0.24-0.37-0.24-0.69C20.86,6.96,20.91,6.67,21.01,6.4z"
                    />
                  </g>
                </g>

                <g className="m1_cGroup">
                  <circle
                    className="c1_solid"
                    cx="0"
                    cy="50"
                    r="220"
                    fill="url(#grad1)"
                    opacity="0.4"
                  />
                </g>
                <g className="m1_cGroup">
                  <circle
                    className="c1_solid"
                    cx="0"
                    cy="50"
                    r="150"
                    fill="url(#grad1)"
                    opacity="0.5"
                  />
                </g>
                <g className="m1_cGroup">
                  <circle
                    className="c1_solid"
                    cx="0"
                    cy="50"
                    r="80"
                    fill="#c1033c"
                    opacity="0.6"
                  />
                </g>
              </g>
            </svg>
            {/* </div> */}
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
          <div className="contact-icons">
            <div className="link">
              <img className="icons" src={dw} alt="" loading="lazy" />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={Resume}
                download="MHK-Resume.pdf"
              >
                Resume
              </Link>
            </div>
            <div className="link">
              {" "}
              <img loading="lazy" className="icons" src={li} alt="" />{" "}
              <a href="https://www.linkedin.com/in/mhkasif97/" target="_blank">
                Linkedin
              </a>{" "}
            </div>
            <div className="link">
              {" "}
              <img loading="lazy" className="icons" src={gh} alt="" />{" "}
              <a href="https://github.com/mhkasif" target="_blank">
                {" "}
                Github
              </a>
            </div>
            <div className="link">
              <img loading="lazy" className="icons" src={fb} alt="" />{" "}
              <a href="https://www.facebook.com/mhkasif97" target="_blank">
                Facebook
              </a>{" "}
            </div>
            <div className="link">
              {" "}
              <img loading="lazy" className="icons" src={insta} alt="" />{" "}
              <a href="https://www.instagram.com/mhkasif/" target="_blank">
                Instagram
              </a>{" "}
            </div>
            <div className="link">
              {" "}
              <img loading="lazy" className="icons" src={twitter} alt="" />{" "}
              <a href="https://twitter.com/mhkasif" target="_blank">
                Twitter
              </a>{" "}
            </div>
          </div>
          <div className="me-footer" data-depth="10">
            <div className="bitmoji-container">
              <img
                // loading="lazy"
                src={Bitmoji}
                className="bitmoji-gif"
                alt="mhk mhkasif"
              />
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
      });

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
    navigator.clipboard.writeText("mhkasif97@gmail.com");
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
            <div className="bitmoji-wrapper"> Mhkasif97@gmail.com</div>
          </div>
          <div className="email-popup-copy">
            {emailPopupState !== "copied" ? (
              <div className="bitmoji-wrapper" key="imge1">
                <img
                  className="email-popup-bitmoji"
                  src={laugh}
                  alt="mhk mhkasif"
                />
                <div> Copy Email</div>
              </div>
            ) : (
              <div className="bitmoji-wrapper" key="imge2">
                <img
                  className="email-popup-bitmoji"
                  src={popper}
                  alt="mhk mhkasif"
                />
                <div> Email Copied</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const actions = {
  enableScroll,
  disableScroll,
  setScrollCounter,
};

export default connect(null, actions)(Me);
