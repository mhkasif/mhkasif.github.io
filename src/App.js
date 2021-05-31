// import WorkPage from "./Components/WorkPage/WorkPage";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import CircleSvg from "./Components/CircleSvg/CircleSvg";
import Home from "./Components/Home/Home";
import Hkjobz from "./pages/Hkjobz/Hkjobz";
import Slectus from "./pages/Slectus/Slectus";

function App() {
  const location = useLocation();
  return (
    <div>
<AnimatePresence initial={true} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route key="a" exact path="/" component={Home} />
          <Route key="b" exact path="/hkjobz" component={Hkjobz} />
          <Route key="c" exact path="/slectus" component={Slectus} />
        </Switch>
      </AnimatePresence>
      {/* <CircleSvg/> */}
    </div>
  );
}

export default App;
