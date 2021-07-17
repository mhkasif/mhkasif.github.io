// /* eslint-disable react-hooks/exhaustive-deps */

// import { motion } from "framer-motion";
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import "./Slectus.scss";
// // import mobileImage from "../../images/slectus/slectus-macbook.png";
// import mobileImage from "../../images/slectus/Slectus_Main.png";
// import {
//   enableScroll,
//   redirected,
//   setScrollCounter,
// } from "../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
// import BackButton from "../../Components/BackButton/BackButton";
// import ScrollLine from "../../Components/ScrollLine/ScrollLine";
// import { gsap } from "gsap/all";
// import CanvasImage from '../../images/slectus/canvas.png'
// const Slectus = ({ redirected, enableScroll,setScrollCounter }) => {
//   useEffect(() => {
//     redirected(true);
//     enableScroll();
//     setScrollCounter(2)
//     gsap.timeline({
//       defaults: { duration: 1 },
//       scrollTrigger: {
//         trigger: ".slectus-path-container",
//         scrub: true,
//         start: "-100px bottom",
//         end: "top center",
//         // markers: true,
//       },
//     }).from('.canvas-img',{
//       opacity:0
//     })
//     gsap
//       .timeline({
//         defaults: { duration: 1 },
//         scrollTrigger: {
//           trigger: "#svg",
//           scrub: true,
//           start: "top center",
//           end: "bottom center",
//           // markers: true,
//         },
//       })
//       .set("#circle", { xPercent: -50 })
//       // .to("#circle", {duration: 0.01, autoAlpha: 1})
//       .to("#circle", { motionPath: { path: "#path", align: "self" } });

//     return () => {};
//   }, []);
//   const variant = {
//     exit: {
//       x: "-100%",
//       // transistion: {
//       //   ease: [0.58, 0.28, 0.02, 1.03],
//       // },
//       delay: 0.6,
//       duration: 1,
//     },
//   };
//   const textContainer = {
//     // animate: {
//     //   //   x: "20px",
//     //   opacity: 0,
//     //   transition: {
//     //     delayChildren: 0.6,
//     //     staggerChildren: 0.3,
//     //     staggerDirection: 1,
//     //     // repeatType: "reverse",
//     //     // repeat:1
//     //   },
//     // },
//     exit: {
//       x: "100%",
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.1,
//         staggerDirection: -1,
//       },
//     },
//     hidden: { opacity: 1 },
//     show: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 1.8,
//       },
//     },
//   };

//   const RightText = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, x: 0 },
//     exit: {
//       opacity: 0,
//       x: "100%",
//       transition: {
//         repeat: 1,
//         repeatType: "reverse",
//       },
//     },
//   };
//   return (
//     <React.Fragment>
//       <motion.div
//         exit={{ x: 0, y: 0 }}
//         key="img"
//         // initial={{ translateX: "686px", translateY: "-1px" }}
//         animate={{ x: "-180%" }}
//         // animate={{ translateX: "0px",  }}
//         transition={{
//           delay: 0.5,

//           ease: [0.35, -0.01, 0.32, 1.275],
//           // ease:'backIn',
//           duration: 1,
//         }}
//         className="left-side"
//       >
//         <motion.img
//           src={mobileImage}
//           alt=""
//           className="zoom"
//           initial={{ translateX: "50px" }}
//         />
//       </motion.div>

//       <motion.div className="work-page">
//         <BackButton />
//         <div className="landing">
//           {/* <ScrollLine/> */}

//           <motion.div
//             variants={variant}
//             exit="exit"
//             key="div"
//             className="left-side-wrapper"
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             transition={{
//               delay: 0.6,
//               ease: [0.49, 0.47, 0.21, 1.04],
//               duration: 1,
//             }}
//           ></motion.div>

//           <motion.div
//             variants={textContainer}
//             exit="exit"
//             animate="show"
//             className="right-side"
//           >
//             <div className="content-container">
//               <motion.div
//                 variants={RightText}
//                 initial={{ translateY: "100%", opacity: 0 }}
//                 animate={{ translateY: "0px", opacity: 1 }}
//                 transition={{
//                   ease: [0.25, 0.1, 0.25, 1],
//                   duration: 0.8,
//                   delay: 1.3,
//                 }}
//                 className="heading"
//               >
//                 <h1>McDonald's App</h1>
//               </motion.div>
//               <motion.div
//                 variants={RightText}
//                 animate={{ width: "90px" }}
//                 transition={{
//                   ease: [0.25, 0.1, 0.25, 1],
//                   duration: 1,
//                   delay: 2,
//                 }}
//                 initial={{ width: 0 }}
//                 className="border-line"
//               ></motion.div>
//               <div className="paragraph">
//                 <motion.p
//                   variants={RightText}
//                   animate={{ translateY: "0px", opacity: 1 }}
//                   transition={{
//                     ease: [0.25, 0.1, 0.25, 1],
//                     duration: 1,
//                     delay: 2.2,
//                   }}
//                   initial={{ translateY: "100%", opacity: 0 }}
//                 >
//                   We were briefed by McDonald’s Netherlands to evolve their
//                   existing native app into a rich, personalised user experience.
//                   Enable rewards, loyalty and geo-targeted offers to be
//                   delivered with measurable results.
//                 </motion.p>
//                 <motion.p
//                   variants={RightText}
//                   animate={{ translateY: "0px", opacity: 1 }}
//                   transition={{
//                     ease: [0.25, 0.1, 0.25, 1],
//                     duration: 1,
//                     delay: 2.4,
//                   }}
//                   initial={{ translateY: "100%", opacity: 0 }}
//                 >
//                   With great team effort we managed to design and developmotion.
//                   this app within the strict 2½ months time limit we were given
//                   by the client. Three weeks after the app was launched, it was
//                   downloaded 800’000 times, got over 500’000 registered users
//                   and over 250’000 users liking products within the app. The app
//                   was ranked number 1 in both iTunes store and Google Play in
//                   the Netherlands.
//                 </motion.p>
//                 <motion.p
//                   variants={RightText}
//                   animate={{ translateY: "0px", opacity: 1 }}
//                   transition={{
//                     ease: [0.25, 0.1, 0.25, 1],
//                     duration: 1,
//                     delay: 2.6,
//                   }}
//                   initial={{ translateY: "100%", opacity: 0 }}
//                 >
//                   Since the launch of the app we’ve done several updates
//                   featuring new campaigns and general improvements to make sure
//                   the app stays relevant to the users.
//                 </motion.p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//         <div className="below-landing page-2 ">
//         <p className="big-paragraph" style={{padding:"100px"}}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
//           blanditiis dignissimos? Sapiente, beatae maxime nobis itaque cumque ab
//           temporibus. Sapiente fugit consequatur nobis! Quidem error
//           consequuntur assumenda, molestiae numquam suscipit. Lorem ipsum dolor
//           sit amet consectetur adipisicing elit. Earum, saepe vitae? Inventore
//           ut commodi quo? Vel velit, excepturi dicta, ex modi reiciendis
//           aliquam, alias fugit numquam magni dolor nam consectetur. Lorem ipsum
//           dolor sit amet, consectetur adipisicing elit. Hic quos non iusto
//           expedita cumque distinctio nulla et libero, iste repellat ea dolor
//           praesentium! Facere aliquid perferendis commodi suscipit, odit optio?
//           </p>
//           </div>
//         <div className="slectus-path-container">
//           <div className="slectus-svg-container">
//           <img className="canvas-img" src={CanvasImage} alt="" />
//             <svg
//               id="svg"
//               width="1151"
//               height="805"
//               viewBox="0 0 1151 805"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 id="path"
//                 d="M1034.82 45.4242C588.791 31.579 682.577 759.485 100.577 730.485"
//                 stroke="#00acc1"
//                 strokeWidth="3"
//               />
//               <circle
//                 id="circle"
//                 cx="1051"
//                 cy="45"
//                 r="17"
//                 fill="white"
//                 stroke="#00acc1"
//                 strokeWidth="2"
//               />
//             </svg>
//           </div>
//         </div>
//       </motion.div>
//     </React.Fragment>
//   );
// };
// const action = {
//   redirected,
//   enableScroll,
//   setScrollCounter
// };
// export default connect(null, action)(Slectus);
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Slectus.scss";
// import mobileImage from "../../images/Slectus/Group1.png";
import mobileImage from "../../images/slectus/Slectus_Main.png";
import Devices from "../../images/slectus/Slectus Devices.png";
import Artist_hand from "../../images/slectus/Artist_hand.png";
import {
  enableScroll,
  redirected,
  setScrollCounter,
} from "../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import BackButton from "../../Components/BackButton/BackButton";
import ScrollLine from "../../Components/ScrollLine/ScrollLine";
import { gsap } from "gsap/all";
import { Power3 } from "gsap/gsap-core";
const Slectus = ({ redirected, enableScroll, setScrollCounter }) => {
  useEffect(() => {
    redirected(true);
    enableScroll();
    setScrollCounter(2);
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
          end: "bottom center",
          // markers: true,
        },
      })
      .set("#circle", { xPercent: -50 })
      // .to("#circle", {duration: 0.01, autoAlpha: 1})
      .to("#circle", { motionPath: { path: "#path", align: "self" } });

    return () => {};
  }, []);
  const variant = {
    exit: {
      x: "-100%",
      // transistion: {
      //   ease: [0.58, 0.28, 0.02, 1.03],
      // },
      delay: 0.6,
      duration: 1,
    },
  };
  const textContainer = {
    // animate: {
    //   //   x: "20px",
    //   opacity: 0,
    //   transition: {
    //     delayChildren: 0.6,
    //     staggerChildren: 0.3,
    //     staggerDirection: 1,
    //     // repeatType: "reverse",
    //     // repeat:1
    //   },
    // },
    exit: {
      x: "100%",
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
        staggerDirection: -1,
      },
    },
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.8,
      },
    },
  };

  const RightText = {
    hidden: { opacity: 0 },
    show: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        repeat: 1,
        repeatType: "reverse",
      },
    },
  };
  return (
    <React.Fragment>
      <motion.div
        exit={{ x: "0%", y: "0%" }}
        key="img"
        // initial={{ translateX: "686px", translateY: "-1px" }}
        animate={{ x: "-180%" }}
        // animate={{ translateX: "0px",  }}
        transition={{
          delay: 0.5,
          ease: [0.35, -0.01, 0.32, 1.275],
          // ease:'backIn',
          duration: 1,
        }}
        className="left-side"
      >
        <motion.img
          className="zoom"
          initial={{ translateX: "50px" }}
          src={mobileImage}
          alt=""
        />
      </motion.div>

      <motion.div className="work-page">
        <BackButton color="black" />
        <div className="landing">
          {/* <ScrollLine/> */}

          <motion.div
            variants={variant}
            exit="exit"
            key="div"
            className="left-side-wrapper"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              delay: 0.6,
              ease: [0.49, 0.47, 0.21, 1.04],
              duration: 1,
            }}
          ></motion.div>

          <motion.div
            variants={textContainer}
            exit="exit"
            animate="show"
            className="right-side"
          >
            <div className="content-container">
              <motion.div
                variants={RightText}
                initial={{ translateY: "100%", opacity: 0 }}
                animate={{ translateY: "0px", opacity: 1 }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1],
                  duration: 0.8,
                  delay: 1.3,
                }}
                className="heading"
              >
                <h1>Slectus</h1>
              </motion.div>
              <motion.div
                variants={RightText}
                animate={{ width: "90px" }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1],
                  duration: 1,
                  delay: 2,
                }}
                initial={{ width: 0 }}
                className="border-line"
              ></motion.div>
              <div className="paragraph">
                <motion.p
                  variants={RightText}
                  animate={{ translateY: "0px", opacity: 1 }}
                  transition={{
                    ease: [0.25, 0.1, 0.25, 1],
                    duration: 1,
                    delay: 2.2,
                  }}
                  initial={{ translateY: "100%", opacity: 0 }}
                >
                  We were briefed by McDonald’s Netherlands to evolve their
                  existing native app into a rich, personalised user experience.
                  Enable rewards, loyalty and geo-targeted offers to be
                  delivered with measurable results.
                </motion.p>
                <motion.p
                  variants={RightText}
                  animate={{ translateY: "0px", opacity: 1 }}
                  transition={{
                    ease: [0.25, 0.1, 0.25, 1],
                    duration: 1,
                    delay: 2.4,
                  }}
                  initial={{ translateY: "100%", opacity: 0 }}
                >
                  With great team effort we managed to design and developmotion.
                  this app within the strict 2½ months time limit we were given
                  by the client. Three weeks after the app was launched, it was
                  downloaded 800’000 times, got over 500’000 registered users
                  and over 250’000 users liking products within the app. The app
                  was ranked number 1 in both iTunes store and Google Play in
                  the Netherlands.
                </motion.p>
                <motion.p
                  variants={RightText}
                  animate={{ translateY: "0px", opacity: 1 }}
                  transition={{
                    ease: [0.25, 0.1, 0.25, 1],
                    duration: 1,
                    delay: 2.6,
                  }}
                  initial={{ translateY: "100%", opacity: 0 }}
                >
                  Since the launch of the app we’ve done several updates
                  featuring new campaigns and general improvements to make sure
                  the app stays relevant to the users.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="below-landing page-2 margin-80 ">
          <div className="heading">Tools and Frameworks</div>
          <div className="paragraph" style={{ width: "30%",marginBottom:"50px" }}>
            First of all Spaceflipper is a game entirely written in HTML5
            Canvas. After some research I decided to use the following
            frameworks to help me develop the application:
          </div>
          <section className="section section-1">
            <div className="img-left">
              <img src={Devices} alt="" />
            </div>
            <div className="details">
              <div className="margin-50">
                <div className="heading">EASELJS – CANVAS</div>
                <div className="paragraph">
                <p>
                  EaselJS is an outstanding javascript canvas library. It’s
                  pretty fast, super easy to use and extend (especially for
                  former flash developers): http://www.easeljs.com
                  <br />
                  Besides that it has support for touch events out of the box
                  which makes it even more awesome. If you’re interested in how
                  to extend EaselJS for multitouch gestures, you can read my
                  post Multitouch gesture transformations with EaselJS.
                  <br />
                  Actually apart from EaselJS I also used PreloadJS for
                  preloading all the needed assets in advance and SoundJS for
                  handling sound output on specific events.
                  <br />
                  So pretty much the complete CreateJS suite except from
                  TweenJS, because I personally prefer:
                  </p>
                </div>
              </div>

              <div className="margin-20">
                <div className="heading">GSAP – ANIMATION</div>
                <div className="paragraph">
                <p>
                  GSAP was immensly popular in the actionscript community. It is
                  very small and an extremely fast animation engine.
                  <br />A very nice feature of the framework is that you can
                  animate an object along a defined curve. That was used for the
                  pinball ramp in the upper-left corner. But more on that later.
                  </p>
                  </div>
              </div>
            </div>
          </section>
          <section className="section section-2">
            <div className="details">
              <div className="margin-30">
                <div className="heading">Problems and Solutions</div>
                <div className="paragraph">
                <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="margin-20">
                <div className="heading">Result</div>
                <div className="paragraph">
                <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  </div>
              </div>
            </div>
            <div className="img-left">
            <img src={Artist_hand} alt="" />
          </div>

            </section>

        </div>
      </motion.div>
    </React.Fragment>
  );
};
const action = {
  redirected,
  enableScroll,
  setScrollCounter,
};
export default connect(null, action)(Slectus);
