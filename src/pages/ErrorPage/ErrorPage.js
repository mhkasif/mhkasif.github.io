import React from "react";
import "./ErrorPage.scss";
import Image from "../../images/bitmoji/error.png";
import Image2 from "../../images/bitmoji/error2.png";
import logo from "../../images/mhkLogo.png";
const ErrorPage = ({ screenError }) => {
  return (
    <div className="error-page-container">
      <img src={logo} className="logo" alt="" />
      <img className="emoji" src={screenError?Image:Image2} alt="" />
     {screenError? <p className="medium-heading">
        Sorry, Your screen size is too small to handle my portfolio
        <span role="img" aria-label="emoji">
          😊
        </span>
      </p>
    :
    <p className="medium-heading">
    Dev is busy in making this page,
    Right now it is unavailable
    <span role="img" aria-label="emoji">
      😊
    </span>
  </p>
    }
    </div>
  );
};

export default ErrorPage;
