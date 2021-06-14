import React, { Component } from "react";
import { TimelineLite, Power3 } from "gsap";
import { connect } from "react-redux";
import {
  enableScroll,
  disableScroll,
  incrementCounter,
  decrementCounter,
} from "../../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import { debounce } from "lodash";
import Logo from "../../../../images/mhkLogo.png";
import "./Contact.scss";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.bouncedFunction = debounce(this.onWheel, 500, {
      leading: true,
      trailing: false,
    });
  }
  componentDidMount = () => {
    var {
      sectionHeading,
      // sectionSubHeading,
      // textLine,
      // sectionPara,
      // sectionImg,
      btnText,
      btnBack,
      viewBtn,
    } = this.refs;
    var tl = new TimelineLite({
      onComplete: () => {
        this.props.enableScroll();
        window.addEventListener("wheel", this.bouncedFunction, false);
      },
    });
    tl.to(sectionHeading, 1, {
      transform: "translateY(0%)",
      ease: Power3.easeInOut,
    })
      .to(btnBack, 0.5, {
        transformOrigin: "0% 0%",
        transform: "scaleY(1)",
        ease: Power3.easeIn,
      })
      .to(viewBtn, 0.1, {
        borderColor: "purple",
      })
      .to(btnText, 0.1, {
        opacity: 1,
      })
      .to(btnBack, 0.5, {
        transformOrigin: "0% 100%",
        transform: "scaleY(0)",
        ease: Power3.easeOut,
      })
      .set(btnBack, {
        clearProps: "transform, transformOrigin",
        transition: "transform 300ms ease-in-out",
      });
  };

  componentWillUnmount() {
    window.removeEventListener("wheel", this.bouncedFunction, false);
  }

  onWheel = (e) => {
    var {
      sectionHeading,
      // sectionSubHeading,
      // textLine,
      // sectionPara,
      // sectionImg,
      btnText,
      btnBack,
      viewBtn,
    } = this.refs;
    if (e.wheelDeltaY > 0) {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter > 1) {
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          var tlED = new TimelineLite({
            onComplete: () => {
              this.props.decrementCounter();
            },
          });
          tlED
            .set(btnBack, { clearProps: "transition" })
            .to(
              sectionHeading,
              1,
              {
                transform: "translateY(100%)",
                ease: Power3.easeInOut,
              },
              // 1
              0
            )
            .to(
              btnBack,
              0.5,
              {
                transformOrigin: "0% 0%",
                transform: "scaleY(1)",
                ease: Power3.easeIn,
              },
              // 1
              0
            )
            .to(
              btnText,
              0.1,
              {
                opacity: 0,
              },
              // 1.5
              0.5
            )
            .to(
              viewBtn,
              0.1,
              {
                borderColor: "transparent",
              },
              // 1.5
              0.5
            )
            .to(
              btnBack,
              0.5,
              {
                transformOrigin: "0% 100%",
                transform: "scaleY(0)",
                ease: Power3.easeOut,
              },
              // 1.5
              0.5
            );
        }
      }
    }
  };

  render() {
    return (
      <div ref="contentWrapper" className="footerContainer">
        {" "}
        {/* must apply poition relative in container */}
        <div className="footer-content">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="social-links-container">
            <div>Social Links</div>
            <div className="social-links">
              <div className="link">Email</div>
              <div className="link">Phone</div>
              <div className="link">Linkedin</div>
              <div className="link">Github</div>
              <div className="link">Fb </div>
              <div className="link">Insta </div>
              <div className="link">Twitter </div>
            </div>
          </div>
        </div>
        <div ref="viewBtn" className="viewBtn viewBtnClients">
          <div className="viewBtnInnerWrapper viewBtnInnerWrapperClients">
            <div ref="btnBack" className="viewBtnBack viewBtnBackClients"></div>
            <h3 ref="btnText">Download Resume</h3>
          </div>
        </div>
        <div className="contentHeader contentHeaderClients">
          <div className="overflowWrapper">
            <h3 ref="sectionHeading" className="hideDown">
              Contact
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

var actions = {
  enableScroll,
  disableScroll,
  incrementCounter,
  decrementCounter,
};

var mapStateToProps = (state) => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable,
});

export default connect(mapStateToProps, actions)(Contact);
