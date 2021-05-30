import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
// import WorkPage from "./Components/WorkPage/WorkPage";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import CircleSvg from "./Components/CircleSvg/CircleSvg";
import WorkPage from "./pages/WorkPage/WorkPage";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route key="a" exact path="/" component={Home} />
          <Route key="b" exact path="/work-page" component={WorkPage} />
        </Switch>
      </AnimatePresence>
      {/* <CircleSvg/> */}
    </div>
  );
}

export default App;
