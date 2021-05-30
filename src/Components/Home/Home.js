import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Content from './Content/Content';


const Home=({scrollCounter})=>{
  return(
    <div style={{position: "relative"}}>
    {/* <div className="hm"></div>
    <div className="ss"></div> */}
    {scrollCounter === 1 && <Main />}
    {scrollCounter >= 2 && scrollCounter <= 6 && <Content />}
    {/* {scrollCounter === 3 && <Footer />} */}

  </div>
  )
}

var mapStateToProps = state => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
});

export default connect(mapStateToProps)(Home);
