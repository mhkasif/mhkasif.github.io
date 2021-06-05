import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.scss";

const BackButton = () => {
  const textContainer = {
    hov: {
      y: 0,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
        staggerDirection: -1,
      },
    },
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.8,
      },
    },
  };

  const firstText = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    hov: {
      opacity: 0,
      transition: {
        repeat: 1,
        repeatType: "reverse",
      },
    },
  };

  const itemB = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    hov: { y: -10 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      hover="hover"
      exit="exit"
      className="back-button"
    >
      <motion.div
        exit={{
          width: "0px",
          transition: { duration: 0.6, ease: "linear", delay: 0.1 },
        }}
        initial={{ width: "0px" }}
        animate={{ width: "40px" }}
        transition={{ duration: 0.6, ease: "linear", delay: 1 }}
        className="back-button-line"
      ></motion.div>
      <Link to="/">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          whileHover="hov"
          exit="hidden"
          className="back-button-text-container"
        >
          <motion.span key={"a"} variants={firstText}>
            S
          </motion.span>
          <motion.span key={"b"} variants={firstText}>
            l
          </motion.span>
          <motion.span key={"c"} variants={firstText}>
            i
          </motion.span>
          <motion.span key={"d"} variants={firstText}>
            d
          </motion.span>
          <motion.span key={"e"} variants={firstText}>
            e&nbsp;
          </motion.span>
          <motion.span key={"f"} variants={firstText}>
            B
          </motion.span>
          <motion.span key={"g"} variants={firstText}>
            a
          </motion.span>
          <motion.span key={"h"} variants={firstText}>
            c
          </motion.span>
          <motion.span key={"i"} variants={firstText}>
            k
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BackButton;
// export default function BackButton() {
//     const container = {
//         hidden: { rotate: 90 },
//         show: {
//             rotate: 0,
//             transition: {
//                 staggerChildren: 0.1,
//                 delayChildren: 0.3,
//             },
//         },
//     }

//     const itemA = {
//         hidden: { scale: 0, top: 100 },
//         show: { scale: 1, top: 30 },
//     }

//     const itemB = {
//         hidden: { scale: 0, top: 200 },
//         show: { scale: 1, top: 80 },
//     }

//     const background = "#80F"

//     return (

//             <motion.div
//                 style={{
//                     width: 150,
//                     height: 150,
//                     borderRadius: 30,
//                     backgroundColor: "#fff",
//                     position: "relative",
//                 }}
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//             >
//                 <motion.div
//                     style={{
//                         width: 40,
//                         height: 40,
//                         borderRadius: 75,
//                         backgroundColor: background,
//                         position: "absolute",
//                         left: 30,
//                     }}
//                     variants={itemA}
//                 />
//                 <motion.div
//                     style={{
//                         width: 40,
//                         height: 40,
//                         borderRadius: 75,
//                         backgroundColor: background,
//                         position: "absolute",
//                         left: 80,
//                     }}
//                     variants={itemA}
//                 />
//                 <motion.div
//                     style={{
//                         width: 40,
//                         height: 40,
//                         borderRadius: 75,
//                         backgroundColor: background,
//                         position: "absolute",
//                         left: 30,
//                     }}
//                     variants={itemB}
//                 />
//                 <motion.div
//                     style={{
//                         width: 40,
//                         height: 40,
//                         borderRadius: 75,
//                         backgroundColor: background,
//                         position: "absolute",
//                         left: 80,
//                     }}
//                     variants={itemB}
//                 />
//             </motion.div>

//     )
// }
