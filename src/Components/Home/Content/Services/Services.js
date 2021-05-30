import React, { Component } from "react";
import { TimelineLite, Power3 } from "gsap";
import { connect } from "react-redux";
import {
  enableScroll,
  disableScroll,
  incrementCounter,
  decrementCounter
} from "../../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import { debounce } from "lodash";
import mobile from "./../../../../images/mobile.png";

class About extends Component {
  constructor(props) {
    super(props);
    this.bouncedFunction = debounce(this.onWheel, 500, {
      leading: true,
      trailing: false
    });
  }
  componentDidMount = () => {
    var {
      sectionHeading,
      sectionSubHeading,
      textLine,
      sectionPara,
      sectionImg,
      btnText,
      btnBack,
      viewBtn
    } = this.refs;
    var tl = new TimelineLite({onComplete: () => {
      this.props.enableScroll();
      window.addEventListener("wheel", this.bouncedFunction, false);
    }});
    tl.to(sectionHeading, 1, {
      transform: "translateY(0%)",
      ease: Power3.easeInOut
    })
      .to(
        sectionSubHeading,
        1,
        {
          transform: "translateY(0%)",
          ease: Power3.easeInOut
        },
        0
      )
      .to(
        sectionPara,
        1,
        {
          transform: "translateY(0%)",
          ease: Power3.easeOut
        },
        0
      )
      .to(
        textLine,
        1,
        {
          transform: "scaleX(1)",
          ease: Power3.easeInOut
        },
        0
      )
      .to(
        sectionImg,
        0.5,
        {
          transform: "translateX(0%)",
          ease: Power3.easeOut
        }
      )
      .to(
        btnBack,
        0.5,
        {
          transformOrigin: "0% 0%",
          transform: "scaleY(1)",
          ease: Power3.easeIn,
        }
      )
      .to(
        viewBtn,
        0.1,
        {
         borderColor: "orange"
        },
      )
      .to(
        btnText,
        0.1,
        {
          opacity: 1
        },
      )
      .to(
        btnBack,
        0.5,
        {
         transformOrigin: "0% 100%",
         transform: "scaleY(0)",
         ease: Power3.easeOut,
         
        },
      )
      .set(
        btnBack,
        {clearProps:"transform, transformOrigin",
        transition: "transform 300ms ease-in-out"
        }
      )
      ;
  };

  componentWillUnmount() {
    window.removeEventListener("wheel", this.bouncedFunction, false);
  }

  onWheel = e => {
    var {
      sectionHeading,
      sectionSubHeading,
      textLine,
      sectionPara,
      sectionImg,
      btnText,
      btnBack,
      viewBtn
    } = this.refs;
    if (e.wheelDeltaY < 0) {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter < 3) {
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          var tlED = new TimelineLite({
            onComplete: () => {
              this.props.incrementCounter()
            }
          });
          tlED.set(btnBack,{clearProps: "transition"})
          .to(
              sectionSubHeading,
              1,
              {
                transform: "translateY(100%)",
                ease: Power3.easeInOut
              },
              0
            )
            .to(
              sectionPara,
              1,
              {
                transform: "translateY(100%)",
                ease: Power3.easeIn
              },
              0
            )
            .to(
              textLine,
              1,
              {
                transform: "scaleX(0)",
                ease: Power3.easeInOut
              },
              0
            )
            .to(
              sectionImg,
              1,
              {
                transform: "translateX(100%)",
                ease: Power3.easeOut
              },
              0
            )
            .to(sectionHeading, 1, {
              transform: "translateY(100%)",
              ease: Power3.easeInOut
            },
            1)
            .to(
              btnBack,
              0.5,
              {
                transformOrigin: "0% 0%",
                transform: "scaleY(1)",
                ease: Power3.easeIn,
              },
              1
            )
            .to(
              btnText,
              0.1,
              {
                opacity: 0
              },
              1.5
            )
            .to(
              viewBtn,
              0.1,
              {
               borderColor: "transparent"
              },
              1.5
            )
            .to(
              btnBack,
              0.5,
              {
               transformOrigin: "0% 100%",
               transform: "scaleY(0)",
               ease: Power3.easeOut,
              },
              1.5
            )

          //exit animation start
          // var tlEU = new TimelineLite({
          //   onComplete: () => {
          //     this.props.incrementCounter();
          //   }
          // });

        }
      }
    } else {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter > 1) {
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          var tlED = new TimelineLite({
            onComplete: () => {
              this.props.exitAnimationOnWheelDown();
            }
          });
          tlED.set(btnBack,{clearProps: "transition"})
          .to(
              sectionSubHeading,
              1,
              {
                transform: "translateY(100%)",
                ease: Power3.easeInOut
              },
              0
            )
            .to(
              sectionPara,
              1,
              {
                transform: "translateY(100%)",
                ease: Power3.easeIn
              },
              0
            )
            .to(
              textLine,
              1,
              {
                transform: "scaleX(0)",
                ease: Power3.easeInOut
              },
              0
            )
            .to(
              sectionImg,
              1,
              {
                transform: "translateX(100%)",
                ease: Power3.easeOut
              },
              0
            )
            .to(sectionHeading, 1, {
              transform: "translateY(100%)",
              ease: Power3.easeInOut
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
                opacity: 0
              },
              // 1.5
              0.5
            )
            .to(
              viewBtn,
              0.1,
              {
               borderColor: "transparent"
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
            )
        }
      }
    }
  };

  render() {
    return (
      <div ref="contentWrapper" className="clientsInnerContainer">
        <div ref="viewBtn" className="viewBtn">
          <div className="viewBtnInnerWrapper">
            <div ref="btnBack" className="viewBtnBack"></div>
            <h3 ref="btnText" >VIEW</h3>
          </div>
        </div>
        <div className="contentHeader">
          <div className="overflowWrapper">
            <h3 ref="sectionHeading" className="hideDown">
              SERVICES
            </h3>
          </div>
        </div>
        <div className="lefty">
          <div className="overflowWrapper">
            <h1 ref="sectionSubHeading" className="hideDown">
              Believe Us
            </h1>
          </div>

          <div className="textDiv">
            <div>
              <div ref="textLine" className="textLine"></div>
            </div>
            <div className="overflowWrapper">
              <p ref="sectionPara" className="hideDown">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae repellendus assumenda voluptas magni? Odio facilis
                cumque iste quaerat deleniti, numquam culpa veritatis tempora
                rerum est. Quod, iusto. Voluptates
              </p>
            </div>
          </div>
        </div>

        <div className="righty">
          <div className="overfloWrapper">
            <img alt="" ref="sectionImg" src={mobile} className="mobileImage" />
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
  decrementCounter
};

var mapStateToProps = state => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable
});

export default connect(
  mapStateToProps,
  actions
)(About);
