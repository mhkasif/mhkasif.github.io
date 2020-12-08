import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../CSS/workPage.scss";
import mobileImage from "../../images/mobile.png";
import { redirected } from "../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import BackButton from "../BackButton/BackButton";
import ScrollLine from "../ScrollLine/ScrollLine";
const WorkPage = ({ redirected }) => {
  useEffect(() => {
    redirected(true);

    return () => {
      console.log("unmounted");
    };
  }, []);
  const variant = {
    exit: {
      x: "-100%",
      transistion: {
        ease: [0.58, 0.28, 0.02, 1.03],
      },
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
exit:{
    x:"100%",
    transition: {
        staggerChildren: 0.3,
        delayChildren: .1,
        staggerDirection:-1,

    },
},
    hidden: { opacity:1},
    show: {
        opacity:1,
        x:0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1.8,
        },
    },
  };

  const RightText = {

    hidden: { opacity:0 },
    show: { opacity:1,x:0 },
    exit: { opacity:0,
      x:"100%",
    transition:{
        repeat:1,
        repeatType:'reverse'
    } },
}
  return (
    <React.Fragment>
    <motion.div
    exit={{ x: 0,y:0 }}
    key="img"
    // initial={{ translateX: "686px", translateY: "-1px" }}
    animate={{x:'-140%' }}
    // animate={{ translateX: "0px",  }}
    transition={{
      delay: 0.5,
      ease: [0.35, -0.01, 0.32, 1.275],
      // ease:'backIn',
      duration: 1,
    }}
    className="left-side">
      <img
        src={mobileImage}
        alt=""
      />
    </motion.div>

    <motion.div className="work-page">
    <BackButton/>
      <div className="landing">
    {/* <ScrollLine/> */}

        <motion.div
          variants={variant}
          exit="exit"
          key="div"
          className="left-side-wrapper"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.6,
            ease: [0.49, 0.47, 0.21, 1.04],
            duration: 1,
          }}
        ></motion.div>


        <motion.div variants={textContainer} exit='exit' animate='show' className="right-side">
          <div className="content-container">
            <motion.div variants={RightText} initial={{translateY:"100%",opacity:0}} animate={{translateY:"0px",opacity:1}} transition={{ease:[.25,.1,.25,1] ,duration:0.8,delay:1.3}} className="heading">
              <h1>McDonald's App</h1>
            </motion.div>
            <motion.div  variants={RightText} animate={{width:"90px"}} transition={{ease:[.25,.1,.25,1] ,duration:1,delay:2}} initial={{width:0}} className="border-line"></motion.div>
            <div className="paragraph">
              <motion.p variants={RightText} animate={{translateY:"0px",opacity:1}} transition={{ease:[.25,.1,.25,1] ,duration:1,delay:2.2}} initial={{translateY:"100%",opacity:0}}>
                We were briefed by McDonald’s Netherlands to evolve their
                existing native app into a rich, personalised user experience.
                Enable rewards, loyalty and geo-targeted offers to be delivered
                with measurable results.
              </motion.p>
              <motion.p variants={RightText} animate={{translateY:"0px",opacity:1}} transition={{ease:[.25,.1,.25,1] ,duration:1,delay:2.4}}  initial={{translateY:"100%",opacity:0}} >
                With great team effort we managed to design and developmotion. this app
                within the strict 2½ months time limit we were given by the
                client. Three weeks after the app was launched, it was
                downloaded 800’000 times, got over 500’000 registered users and
                over 250’000 users liking products within the app. The app was
                ranked number 1 in both iTunes store and Google Play in the
                Netherlands.
              </motion.p>
              <motion.p variants={RightText} animate={{translateY:"0px",opacity:1}} transition={{ease:[.25,.1,.25,1] ,duration:1,delay:2.6}}  initial={{translateY:"100%",opacity:0}}>
                Since the launch of the app we’ve done several updates featuring
                new campaigns and general improvements to make sure the app
                stays relevant to the users.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

    </motion.div>

    </React.Fragment>
  );
};
const action = {
  redirected,
};
export default connect(null, action)(WorkPage);
