import React, { useState } from "react";
import { TimelineLite } from "gsap/all";
import laugh from "../../images/bitmoji/laugh-min.PNG";
import popper from "../../images/bitmoji/popper-min.PNG";

const EmailPopup = () => {
  const [emailPopupState, setState] = useState("");

  const mouseOver = () => {
    if (emailPopupState !== "copied") {
      const tl = new TimelineLite({});
      tl.to(".content-list", 0.25, {
        y: "-60px",
      });
    }
  };

  const mouseLeave = () => {
    if (emailPopupState) setState("");
    const tl = new TimelineLite().set(".email-popup", {
      className: "email-popup",
    });
    tl.to(".content-list", 0.25, {
      y: 0,
    });
  };

  const emailClicked = () => {
    setState("copied");
    const tl = new TimelineLite();
    tl.set(".email-popup", {
      className: "email-popup email-popup-white",
    });
    navigator.clipboard.writeText("mhkasif97@gmail.com");
  };

  return (
    <div
      className="email-popup"
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
      onClick={emailClicked}
    >
      <div className="content-list">
        <div className="email-popup-email">
          <div className="bitmoji-wrapper">Mhkasif97@gmail.com</div>
        </div>
        <div className="email-popup-copy">
          {emailPopupState !== "copied" ? (
            <div className="bitmoji-wrapper" key="imge1">
              <img
                className="email-popup-bitmoji"
                src={laugh}
                alt="mhk mhkasif"
              />
              <div>Copy Email</div>
            </div>
          ) : (
            <div className="bitmoji-wrapper" key="imge2">
              <img
                className="email-popup-bitmoji"
                src={popper}
                alt="mhk mhkasif"
              />
              <div>Email Copied</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
