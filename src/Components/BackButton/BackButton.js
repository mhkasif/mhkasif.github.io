import { motion } from "framer-motion";
import React from "react";
import "./BackButton.scss";

const BackButton = () => {
  const textContainer = {
      initial:{
y:0
      },
      hover:{
        // y:10,
        transition: {
            staggerChildren:0.4,
            delayChildren:1.6,
            staggerDirection:-1
        }
    },
    }

  const firstText = {
      initial: {
        y: 0,
      },
      hover:{
          y:-10,
        transition: {
          duration: 2.4,
          ease: "easeIn",
        delay:2

        }
      },
    //   animate:{

    //     transition: {
    //         duration: 2.4,
    //         ease: "easeIn",
    //       delay:2

    //       }
    //         }

  };
  const secondText = {
    secondText: {
      animate: {
        y: 10,
      },
      transistion: {
        duration: 1,
        ease: "linear",
      },
    },
  };

  return (
    <div className="back-button">
      <motion.div
        exit={{ width: "0px" }}
        initial={{ width: "0px" }}
        animate={{ width: "40px" }}
        transition={{ duration: 0.6, ease: "linear", delay: 1 }}
        className="back-button-line"
      ></motion.div>

      <motion.div animate='animate' initial='initial'  whileHover="hover" variants={textContainer} className="back-button-text-container">
        {/* <motion.div className="firstText"> */}
          <motion.span  initial="initial" variants={firstText}>S</motion.span>
          <motion.span  initial="initial" variants={firstText}>l</motion.span>
          <motion.span  initial="initial" variants={firstText}>i</motion.span>
          <motion.span  initial="initial" variants={firstText}>d</motion.span>
          <motion.span  initial="initial" variants={firstText}>e</motion.span>
          &nbsp;
        {/* </motion.div> */}
        {/* <div className="secondText"> */}
          <motion.span  initial="initial" variants={firstText}>B</motion.span>
          <motion.span  initial="initial" variants={firstText}>a</motion.span>
          <motion.span  initial="initial" variants={firstText}>c</motion.span>
          <motion.span  initial="initial" variants={firstText}>k</motion.span>
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default BackButton;
