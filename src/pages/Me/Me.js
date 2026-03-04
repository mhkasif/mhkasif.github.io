import { motion } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  disableScroll,
  enableScroll,
  setScrollCounter,
} from "../../Redux/slices/homeComponentInfoSlice";
import Bitmoji from "../../images/bitmoji/bitmoji.gif";
import MyImage from "../../images/me/MyImage-min.png";
import EmailPopup from "./EmailPopup";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillsOrbs from "./SkillsOrbs";
import ContactLinks from "./ContactLinks";
import Projects from "./Projects";
import useIntroAnimation from "./hooks/useIntroAnimation";
import useExperienceTimeline from "./hooks/useExperienceTimeline";
import useSkillsAnimation from "./hooks/useSkillsAnimation";
import "./Me.scss";

const Me = () => {
  const dispatch = useDispatch();
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

  // Dispatch wrappers
  const dispatchSetScrollCounter = useCallback(
    (val) => dispatch(setScrollCounter(val)),
    [dispatch]
  );
  const dispatchEnableScroll = useCallback(
    () => dispatch(enableScroll()),
    [dispatch]
  );
  const dispatchDisableScroll = useCallback(
    () => dispatch(disableScroll()),
    [dispatch]
  );

  // Animation hooks
  useIntroAnimation(
    dispatchSetScrollCounter,
    dispatchEnableScroll,
    dispatchDisableScroll
  );
  useExperienceTimeline(pathRef);
  useSkillsAnimation();

  // Skill tooltip handlers
  const handleMouseEnterOnSkillsImage = useCallback((ref, name) => {
    const rect = ref.current.getBoundingClientRect();
    setElementPosition({
      top: rect.y - 30,
      left: rect.x,
      display: "block",
      name,
    });
  }, []);

  const handleMouseLeaveOnSkillsImage = useCallback(() => {
    setElementPosition((prev) => ({ ...prev, display: "none" }));
  }, []);

  return (
    <React.Fragment>
      <motion.div
        exit={{ x: "100%" }}
        key="me-div"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="viewport"
      >
        <div className="element-name" style={elementPosition}>
          {elementPosition.name}
        </div>
        <EmailPopup />
        <div className="me-container">
          {/* Hero Section */}
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

          {/* About Section */}
          <div className="container-center" data-depth="10">
            <div className="about-me big-heading">
              I build products people love — from web apps to desktop tools to
              blockchain systems.
            </div>
            <div className="summary-container" data-depth="10">
              <div className="summary-title medium-paragraph">Who I am</div>
              <div className="summary medium-paragraph">
                Full Stack Engineer with 7+ years of experience building
                production-grade applications since 2018. I architect scalable
                web platforms, craft cross-platform desktop apps, and ship
                products end-to-end — from concept to deployment. Obsessed with
                clean code, pixel-perfect UI, and performance that users can
                feel. I've built everything from MERN stack platforms and React
                Native mobile apps to Electron desktop tools and blockchain
                systems. I don't just write code — I solve problems, ship fast,
                and grow ideas into reality.
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="exp-heading" data-depth="10">
            Experience
          </div>
          <ExperienceTimeline ref={pathRef} />

          {/* Hobbies Marquee */}
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

          {/* Skills Section */}
          <div data-depth="10" className="exp-heading skills-heading">
            Skills
          </div>
          <SkillsOrbs
            onMouseEnter={handleMouseEnterOnSkillsImage}
            onMouseLeave={handleMouseLeaveOnSkillsImage}
            refs={{ muiImage, reactImage, nodeImage, rnImage }}
          />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
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
                I have an inbox zero rule so I'll see your message for sure and,
                I'll reply with at least one smiley. I promise.
              </div>
            </div>
          </div>
          <ContactLinks />

          {/* Footer */}
          <div className="me-footer" data-depth="10">
            <div className="bitmoji-container">
              <img src={Bitmoji} className="bitmoji-gif" alt="mhk mhkasif" />
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

export default Me;
