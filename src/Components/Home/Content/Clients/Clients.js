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
import "../../../../CSS/Clients.scss";
import { Link } from "react-router-dom";
import newTab from "../../../../images/icons/new-tab.png";
class Clients extends Component {
  constructor(props) {
    super(props);
    this.bouncedFunction = debounce(this.onWheel, 500, {
      leading: true,
      trailing: false,
    });
  }
  componentDidMount = () => {
    const {sectionHeading}=this.refs
    var tl = new TimelineLite({
      onComplete: () => {
        this.props.enableScroll();
        window.addEventListener("wheel", this.bouncedFunction, false);
      },
    });
    tl
    .to(sectionHeading, 1, {
      transform: "translateY(0%)",
      ease: Power3.easeInOut,
    },.3)
    .to(".project-heading", 1, {
      transform: "translateY(0%)",
      ease: Power3.easeInOut,
    },.3)
    .to(".project-description", 1, {
      transform: "translateY(0%)",
      ease: Power3.easeInOut,
    },.3);
  };

  componentWillUnmount() {
    window.removeEventListener("wheel", this.bouncedFunction, false);
  }

  onWheel = (e) => {
    const {sectionHeading}=this.refs
    if (e.wheelDeltaY < 0) {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter < 6) {
          //todo remove this if
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          const tlED = new TimelineLite({
            onComplete: () => {
              this.props.incrementCounter();
            },
          });
          tlED

    .to(sectionHeading, 1, {
      transform: "translateY(100%)",
      ease: Power3.easeInOut,
    })
            .to(".project-heading", 1, {
              transform: "translateY(-100%)",
              ease: Power3.easeInOut,
            },0)
            .to(".project-description", 1, {
              transform: "translateY(100%)",
              ease: Power3.easeIn,
            },0);
        }
      }
    } else {
      if (this.props.isScrollable) {
        if (this.props.scrollCounter > 1) {
          //disabling scroll
          this.props.disableScroll();
          //exit animation start
          const tlED = new TimelineLite({
            onComplete: () => {
              this.props.decrementCounter();
            },
          });
          tlED
          .to(sectionHeading, 1, {
            transform: "translateY(100%)",
            ease: Power3.easeInOut,
          })
            .to(".project-heading", 1, {
              transform: "translateY(-100%)",
              ease: Power3.easeInOut,
            },0)
            .to(".project-description", 1, {
              transform: "translateY(100%)",
              ease: Power3.easeInOut,
            },0);
        }
      }
    }
  };

  render() {
    return (
      <div ref="contentWrapper" className="clientPageContainer">
        {/* must apply poition relative in container */}
        <div className="content-container-projects">
          <div className="content">
            <ProjectDetails
              url="https://hk-jobz.web.app/"
              heading="HkJOBZ"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />

            <ProjectDetails
              url="https://calm-mesa-38512.herokuapp.com/"
              heading="Slectus"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />

            <ProjectDetails
              url="https://webicamp.com/"
              heading="Webicamp"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />

            <ProjectDetails
              url="https://speedy-lattice-214216.web.app/"
              heading="Eventos"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />

            <ProjectDetails
              url="https://colgame-43259.web.app/"
              heading="Guess??"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />

            <ProjectDetails
              url="https://quiz-57285.web.app/index.html"
              heading="JS Quiz"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />
            <ProjectDetails
              url="https://thawing-gorge-31147.herokuapp.com/"
              heading="Xoom"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />
            <ProjectDetails
              url="https://crwn-live.herokuapp.com/"
              heading="Clothee"
              desc="lorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsomlorem epsom "
            />
          </div>
        </div>
        <div className="contentHeader contentHeaderClients">
          <div className="overflowWrapper">
            <h3 ref="sectionHeading" className="hideDown client-heading">
              Projects
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

const ProjectDetails = ({ heading, desc, url }) => {
  return (
    <div className="project-details">
      <Link to={{ pathname: url }} target="_blank">
        <div style={{ overflow: "hidden" }}>
          <div className="project-heading">
            {heading}
            <img src={newTab} alt="Open Link" />
          </div>
        </div>
      </Link>
      <div style={{ overflow: "hidden" }}>
        <div className="project-description"> {desc}</div>
      </div>
    </div>
  );
};

var mapStateToProps = (state) => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable,
});

export default connect(mapStateToProps, actions)(Clients);
