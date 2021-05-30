import { motion } from "framer-motion";
import { Power3, TimelineLite } from "gsap";
import { debounce } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import "../../../../CSS/Service.scss";
import {
  decrementCounter, disableScroll, enableScroll,

  incrementCounter,

  redirected
} from "../../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
// import mobile from "./../../../../images/mobile.png";
import image from '../../../../images/slectus/slectus-macbook.png'
import '../../../../CSS/Service.scss'
class Clients extends Component {
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
      sectionSubHeading,
      textLine,
      sectionPara,
      sectionImg,
      btnText,
      btnBack,
      viewBtn,
    } = this.refs;
    var tl = new TimelineLite({
      onComplete: () => {
        this.props.enableScroll();
        this.props.redirected(false);
        window.addEventListener("wheel", this.bouncedFunction, false);
      },
    });
    if (this.props.isRedirected) {
      tl.to(".overflow-visible",{
        overflow:"visible",
        duration:0

      })
      // .to(sectionImg,{
      //   transform:"translate(50px,0px)"
      // })
      .to(sectionHeading, 1, {
        transform: "translateY(0%)",
        ease: Power3.easeInOut,
      })
        .to(
          sectionSubHeading,
          1,
          {
            transform: "translateY(0%)",
            ease: Power3.easeInOut,
          },
          0
        )
        .to(
          sectionPara,
          1,
          {
            transform: "translateY(0%)",
            ease: Power3.easeOut,
          },
          0
        )
        .to(
          textLine,
          1,
          {
            transform: "scaleX(1)",
            ease: Power3.easeInOut,
          },
          0
        )

        .to(btnBack, 0.5, {
          transformOrigin: "0% 0%",
          transform: "scaleY(1)",
          ease: Power3.easeIn,
        })
        .to(viewBtn, 0.1, {
          borderColor: "#00acc1",
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
    } else {
      tl.to(sectionHeading, 1, {
        transform: "translateY(0%)",
        ease: Power3.easeInOut,
      })
        .to(
          sectionSubHeading,
          1,
          {
            transform: "translateY(0%)",
            ease: Power3.easeInOut,
          },
          0
        )
        .to(
          sectionPara,
          1,
          {
            transform: "translateY(0%)",
            ease: Power3.easeOut,
          },
          0
        )
        .to(
          textLine,
          1,
          {
            transform: "scaleX(1)",
            ease: Power3.easeInOut,
          },
          0
        )
        .to(sectionImg, 0.5, {
          transform: "translate(50px,0px)",
          // ease: Power3.easeOut,
          ease: [0.35, -0.01, 0.32, 1.275],
        }).to(".overflow-visible",{
          overflow:"visible"
        },"-=0.2")
        .to(btnBack, 0.5, {
          transformOrigin: "0% 0%",
          transform: "scaleY(1)",
          ease: Power3.easeIn,
        })
        .to(viewBtn, 0.1, {
          borderColor: "#00acc1",
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
    }
  };

  componentWillUnmount() {
    window.removeEventListener("wheel", this.bouncedFunction, false);
  }

  onWheel = (e) => {
    var {
      sectionHeading,
      sectionSubHeading,
      textLine,
      sectionPara,
      sectionImg,
      btnText,
      btnBack,
      viewBtn,
    } = this.refs;
    if (e.wheelDeltaY < 0) {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter < 4) {
          //todo remove this if
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          var tlED = new TimelineLite({
            onComplete: () => {
              this.props.incrementCounter();
            },
          });
          tlED
            .set(btnBack, { clearProps: "transition" })
            .to(
              sectionSubHeading,
              1,
              {
                y: "100%",
                ease: Power3.easeInOut,
              },
              0
            )
            .to(
              sectionPara,
              1,
              {
                y: "100%",
                ease: Power3.easeIn,
              },
              0
            )
            .to(
              textLine,
              1,
              {
                transform: "scaleX(0)",
                ease: Power3.easeInOut,
              },
              0
            )

            .to(
              sectionHeading,
              1,
              {
                y: "100%",

                ease: Power3.easeInOut,
              },
              1
            )
            .to(
              sectionImg,
              0.5,
              {
                transform: "translateX(450px)",
                ease: Power3.easeOut,
                duration:2
              },
              1
            )
            .to(".overflow-visible",{
              overflow:"hidden"
            },"-=0.48")
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
                opacity: 0,
              },
              1.5
            )
            .to(
              viewBtn,
              0.1,
              {
                borderColor: "transparent",
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
            );

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
              this.props.decrementCounter();
            },
          });
          tlED
            .set(btnBack, { clearProps: "transition" })
            .to(
              sectionSubHeading,
              1,
              {
                y: "100%",
                ease: Power3.easeInOut,
              },
              0
            )
            .to(
              sectionPara,
              1,
              {
                y: "100%",
                ease: Power3.easeIn,
              },
              0
            )
            .to(
              textLine,
              1,
              {
                transform: "scaleX(0)",
                ease: Power3.easeInOut,
              },
              0
            )

            .to(
              sectionHeading,
              1,
              {
                y: "100%",
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
              sectionImg,
              0.5,
              {
                transform: "translateX(280px)",
                ease: Power3.easeOut,
                // duration:2
              },
              1
            )
            .to(".overflow-visible",{
              overflow:"hidden"
            })

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
  pageTransistion = () => {
    var {
      sectionHeading,
      sectionSubHeading,
      textLine,
      sectionPara,
      sectionImg,
      btnText,
      btnBack,
      viewBtn,
    } = this.refs;
    var tlED = new TimelineLite({
      onComplete: () => {
        // this.props.decrementCounter();
      },
    });
    tlED
      .set(btnBack, { clearProps: "transition" })
      .to(
        sectionSubHeading,
        1,
        {
          y: "100%",
          ease: Power3.easeInOut,
        },
        0
      )
      .to(
        sectionPara,
        1,
        {
          y: "100%",
          ease: Power3.easeIn,
        },
        0
      )
      .to(
        textLine,
        1,
        {
          transform: "scaleX(0)",
          ease: Power3.easeInOut,
        },
        0
      )
      // .to(
      //   sectionImg,
      //   1,
      //   {
      //     transform: "translateX(5%)",
      //     ease: Power3.easeOut,
      //   },
      //   0
      // )
      .to(
        sectionHeading,
        1,
        {
          y: "100%",

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
  };
  variants = {
    exit: {
      // opacity:0,
      transistion: {
        duration: 1.2,
      },
    },
  };
  render() {
    return (
      <React.Fragment>
        <div className="righty overflow-visible">
          <div id="overfloWrapper" className="overfloWrapper overflow-visible">
            <motion.img
              initial={{ translateX: this.props.isRedirected ? "50px" : "-130%" }}
              // exit={{}}
              // animate={{x:0}}
              transition={{
                ease: [0.35, -0.01, 0.32, 1.275],
              }}
              alt=""
              ref="sectionImg"
              src={image}
              className="laptopImage zoom"
            />
          </div>
        </div>
        <motion.div
          key="modal"
          exit={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          ref="contentWrapper"
          className="clientsInnerContainer"
        >
          <div ref="viewBtn" className="viewBtn viewBtnClients">
            <Link onClick={this.pageTransistion} to="/slectus">
              <div className="viewBtnInnerWrapper viewBtnInnerWrapperClients slectus-font-color">
                <div
                  ref="btnBack"
                  className="viewBtnBack viewBtnBackClients slectus-background-color"
                ></div>
                <h3 ref="btnText">VIEW</h3>
              </div>
            </Link>
          </div>
          <div className="contentHeader contentHeaderClients slectus-font-color">
            <div className="overflowWrapper">
              <h3 ref="sectionHeading" className="hideDown">
                Slectus
              </h3>
            </div>
          </div>
          <div className="lefty leftyClients slectus-font-color">
            <div className="overflowWrapper">
              <h1 ref="sectionSubHeading" className="hideDown">
                Believe Us
              </h1>
            </div>

            <div className="textDiv">
              <div>
                <div ref="textLine" className="textLine textLineClients slectus-background-color"></div>
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
        </motion.div>
      </React.Fragment>
    );
  }
}

var actions = {
  enableScroll,
  disableScroll,
  incrementCounter,
  decrementCounter,
  redirected,
};

var mapStateToProps = (state) => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable,
  isRedirected: state.homeComponentInfo.isRedirected,
});

export default connect(mapStateToProps, actions)(Clients);
