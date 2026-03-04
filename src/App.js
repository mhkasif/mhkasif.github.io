import { AnimatePresence } from "framer-motion";
import {
  CSSPlugin,
  CSSRulePlugin,
  EaselPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  TextPlugin,
} from "gsap/all";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Me from "./pages/Me/Me";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

gsap.registerPlugin(
  CSSPlugin,
  EaselPlugin,
  TextPlugin,
  CSSRulePlugin,
  ScrollTrigger,
  MotionPathPlugin,
  ScrollToPlugin
);

function App() {
  const isScrollable = useSelector(
    (state) => state.homeComponentInfo.isScrollable
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isScrollable) {
      document.body.classList.add("loading-cursor");
    } else {
      document.body.classList.remove("loading-cursor");
    }
  }, [isScrollable]);

  const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      <AnimatePresence initial={true} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Me />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
