// import WorkPage from "./Components/WorkPage/WorkPage";
import { AnimatePresence } from "framer-motion";
import {
  CSSPlugin,
  EaselPlugin,
  TextPlugin,
  CSSRulePlugin,
  ScrollTrigger,
  ScrollToPlugin,
} from "gsap/all";

import { gsap } from "gsap";
import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Hkjobz from "./pages/Hkjobz/Hkjobz";
import Slectus from "./pages/Slectus/Slectus";
import Me from "./pages/Me/Me";
import { connect } from "react-redux";
import MotionPathPlugin from "gsap/MotionPathPlugin";
// import CircleSvg from './Components/CircleSvg/CircleSvg'
// import {gsap} fro

function App({ isScrollable }) {
  useEffect(() => {
    console.log(isScrollable)
    if (!isScrollable) document.body.classList.add("loading-cursor");
    else {
      document.body.classList.remove("loading-cursor");
    }
  }, [isScrollable]);
  // useEffect(() => {
  console.log("app called");
  gsap.registerPlugin(
    CSSPlugin,
    EaselPlugin,
    TextPlugin,
    CSSRulePlugin,
    ScrollTrigger,
    MotionPathPlugin,
    ScrollToPlugin
  );
  // }, []);
  const location = useLocation();
  return (
    <div>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route key="a" exact path="/" component={Home} />
          <Route key="b" exact path="/hkjobz" component={Hkjobz} />
          <Route key="c" exact path="/slectus" component={Slectus} />
          <Route key="d" exact path="/me" component={Me} />
        </Switch>
      </AnimatePresence>
      {/* <CircleSvg /> */}
    </div>
  );
}
const mapState = (state) => ({
  isScrollable: state.homeComponentInfo.isScrollable,
});
export default connect(mapState)(App);
