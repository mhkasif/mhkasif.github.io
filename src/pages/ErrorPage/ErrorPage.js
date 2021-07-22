import React from "react";
import "./ErrorPage.scss";
import Image from "../../images/bitmoji/error.png";
import logo from "../../images/mhkLogo.png";
const ErrorPage = () => {
  return (
    <div className="error-page-container">
<img src={logo} className="logo" alt="" />
      <img className="emoji" src={Image} alt="" />
      <p className="medium-heading">Sorry, Your screen size is too small to handle my portfolio <span role="img" aria-label="emoji">😟</span></p>
    </div>
  );
};

export default ErrorPage;
