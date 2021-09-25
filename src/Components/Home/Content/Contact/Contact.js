/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { TimelineLite, Power3 } from "gsap";
import { connect } from "react-redux";
import {
  enableScroll,
  disableScroll,
  incrementCounter,
  decrementCounter,
  setScrollCounter,
} from "../../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import { debounce } from "lodash";
import Logo from "../../../../images/mhkLogo.png";
import "./Contact.scss";
import {Link} from 'react-router-dom'
import fb from '../../../../images/icons/fb.png'
import gh from '../../../../images/icons/github.png'
import insta from '../../../../images/icons/insta.png'
import li from '../../../../images/icons/linkedin.png'
import twitter from '../../../../images/icons/twitter.png'
import email from '../../../../images/icons/email.png'
import phone from '../../../../images/icons/phone.png'
import location from '../../../../images/icons/location.png'
import Resume from '../../../../resume/resume.pdf'
class Contact extends Component {
  constructor(props) {
    super(props);
    this.bouncedFunction = debounce(this.onWheel, 500, {
      leading: true,
      trailing: false,
    });
  }

  componentDidMount = () => {
    // const {linkRef}=this.refs
    // fetch('/resume.pdf', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/pdf',
    //   },
    // })
    // .then((response) =>{console.log(response);return response.blob()})
    // .then((blob) => {
    //   console.log(blob);
    //   const url = window.URL.createObjectURL(
    //     new Blob([blob]),
    //   );

    //   linkRef.href = url;
    //   linkRef.setAttribute(
    //     'download',
    //     `resume.pdf`,
    //   );

    // })


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
        borderColor: "white",
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
            <div className="list-heading">Expore Links</div>
            <div className="social-links">
              <div onClick={()=>this.props.setScrollCounter(1)} className="link">Home</div>
              <div onClick={()=>this.props.setScrollCounter(2)} className="link">Slectus</div>
              <div onClick={()=>this.props.setScrollCounter(3)} className="link">Hkjobz</div>
              <div onClick={()=>this.props.setScrollCounter(4)} className="link">About</div>
              <div onClick={()=>this.props.setScrollCounter(5)} className="link">Projects</div>
            </div>
          </div>
          <div className="social-links-container">
            <div className="list-heading">Social Links</div>
            <div className="social-links">

              <div className="link"> <img className="icons"  src={li} height="20px" width="20px" alt="" /> <a href="https://www.linkedin.com/in/mhkasif97/" target="_blank">Linkedin</a> </div>
              <div className="link"> <img className="icons"  src={gh} height="20px" width="20px"  alt="" /> <a href="https://github.com/mhkasif" target="_blank"> Github</a></div>
              <div className="link"><img  className="icons" src={fb}  height="20px" width="20px" alt=""/> <a href="https://www.facebook.com/mhkasif97" target="_blank">Facebook</a> </div>
              <div className="link"> <img className="icons"  src={insta}  height="20px" width="20px" alt="" /> <a href="https://www.instagram.com/mhkasif/" target="_blank">Instagram</a>  </div>
              <div className="link"> <img className="icons"  src={twitter}  height="20px" width="20px" alt="" /> <a href="https://twitter.com/mhkasif" target="_blank">Twitter</a> </div>
            </div>
          </div>

          <div className="social-links-container">
            <div className="list-heading">Info</div>
            <div className="social-links">
            <div className="link"> <img className="icons"  src={email} height="20px" width="20px" alt="" /> <a href="mailto:mhkasif97@gmail.com">mhkasif97@gmail.com</a> </div>
            <div className="link"> <img className="icons"  src={phone} height="20px" width="20px" alt="" /> <a href="tel:+923002965676">+923002965676</a> </div>
            <div className="link"> <img className="icons"  src={location} height="20px" width="20px" alt="" /> <p>Karachi, Pakistan</p> </div>

            </div>
          </div>
        </div>
        <div ref="viewBtn" className="viewBtn viewBtnTeam">
        <Link  target="_blank" rel="noopener noreferrer"  ref="linkRef" to={Resume}  download="resume.pdf" >
          <div className="viewBtnInnerWrapper viewBtnInnerWrapperTeam white-font-color">
            <div ref="btnBack" className="viewBtnBack viewBtnBackTeam white-background-color"></div>
            <h3 ref="btnText">Download Resume</h3>
          </div>
          </Link>
        </div>
        <div className="contentHeader contentHeaderTeam">
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
  setScrollCounter
};

var mapStateToProps = (state) => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable,
});

export default connect(mapStateToProps, actions)(Contact);
