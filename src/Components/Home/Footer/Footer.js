import React, { Component } from "react";
import { TimelineLite, Power3 } from "gsap";
import { connect } from "react-redux";
import {
  enableScroll,
  disableScroll,
  incrementCounter,
  decrementCounter
} from "./../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
import { debounce } from "lodash";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.bouncedFunction = debounce(this.onWheel, 500, {
      leading: true,
      trailing: false
    });
  }
  componentDidMount = () => {
    var { footerWrapper, heading } = this.refs;
    var tl = new TimelineLite({
      onComplete: () => {
        this.props.enableScroll();
        window.addEventListener("wheel", this.bouncedFunction, false);
      }
    });
    tl.to(footerWrapper, 1, {
      transform: "scaleY(1)",
      ease: Power3.easeInOut
    }).to(heading, 1, { opacity: 1, y: -30, ease: Power3.easeOut });
  };

  componentWillUnmount() {
    window.removeEventListener("wheel", this.bouncedFunction, false);
  }

  onWheel = e => {
    var { footerWrapper, heading } = this.refs;
    if (e.wheelDeltaY < 0) {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter < 3) {
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          var tlEU = new TimelineLite({ onComplete: () => {
            this.props.incrementCounter();
          } })
          tlEU.to(heading, 1, {
            opacity: 0,
            y: 0,
            ease: Power3.easeOut
          }).to(footerWrapper, 1, {
            transform: "scaleY(0)",
            ease: Power3.easeInOut
          });
        }
      }
    } else {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter > 1) {
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          // eslint-disable-next-line no-redeclare
          var tlED = new TimelineLite({ onComplete: () => {
            this.props.decrementCounter();
          } })
          tlED.to(heading, 1, {
            opacity: 0,
            y: 0,
            ease: Power3.easeOut
          }).to(footerWrapper, 1, {
            transform: "scaleY(0)",
            ease: Power3.easeInOut
          });
        }
      }
    }
  };
  render() {
    return (
      <div ref="footerWrapper" className="footerContainer">
        <h1 ref="heading" style={{ opacity: 0 }}>
          FOOTER
        </h1>
      </div>
    );
  }
}

var mapStateToProps = state => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable
});

var actions = {
  enableScroll,
  disableScroll,
  incrementCounter,
  decrementCounter
};

export default connect(
  mapStateToProps,
  actions
)(Footer);
