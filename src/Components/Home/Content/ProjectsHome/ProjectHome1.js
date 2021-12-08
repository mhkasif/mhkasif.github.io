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
import "./ph.scss";
import { Link } from "react-router-dom";
import newTab from "../../../../images/icons/new-tab.png";
import slectus from "../../../../images/slectus/Slectus projects card.png";
import hkjobz from "../../../../images/hkjobz/HKJobs projects card.jpg";
import eventos from "../../../../images/eventos.png";
import webicamp from "../../../../images/webicamp.png";
import bsconsults from "../../../../images/bsconsults/bsc.png";
class ProjectHome extends Component {
  constructor(props) {
    super(props);
    this.bouncedFunction = debounce(this.onWheel, 500, {
      leading: true,
      trailing: false,
    });
  }
  componentDidMount = () => {
    const { sectionHeading } = this.refs;
    var tl = new TimelineLite({
      onComplete: () => {
        this.props.enableScroll();
        window.addEventListener("wheel", this.bouncedFunction, false);
      },
    });
    tl.to(
      sectionHeading,
      1,
      {
        transform: "translateY(0%)",
        ease: Power3.easeInOut,
      },
      0.3
    )
      .to(
        ".project-heading",
        1,
        {
          transform: "translateY(0%)",
          ease: Power3.easeInOut,
        },
        0.3
      )
      .to(
        ".project-description",
        1,
        {
          transform: "translateY(0%)",
          ease: Power3.easeInOut,
        },
        0.3
      );
  };

  componentWillUnmount() {
    window.removeEventListener("wheel", this.bouncedFunction, false);
  }

  onWheel = (e) => {
    const { sectionHeading } = this.refs;
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
            .to(
              ".project-heading",
              1,
              {
                transform: "translateY(-100%)",
                ease: Power3.easeInOut,
              },
              0
            )
            .to(
              ".project-description",
              1,
              {
                transform: "translateY(100%)",
                ease: Power3.easeIn,
              },
              0
            );
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
            .to(
              ".project-heading",
              1,
              {
                transform: "translateY(-100%)",
                ease: Power3.easeInOut,
              },
              0
            )
            .to(
              ".project-description",
              1,
              {
                transform: "translateY(100%)",
                ease: Power3.easeInOut,
              },
              0
            );
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
            <div className="projects-grid-container">
            <div className="project-cell-container slectus">
            <Link to={{pathname:"https://slectus-test.web.app"}} target="_blank">

            <div className="project-cell">
            <img src={slectus} alt="" />
            </div>
            </Link>
            <div className="btn">Slectus</div>
            </div>
            <div className="project-cell-container hkjobz">
            <Link to={{pathname:"https://hk-jobz.web.app/"}} target="_blank">
              <div className="project-cell">
                    <img src={hkjobz} alt="" />
                    </div>
                    </Link>
                  <div className="btn">Hkjobz</div>
                </div>
              <div className="project-cell-container webicamp">
              <Link to={{pathname:"https://webicamp.com/"}} target="_blank">
              <div className="project-cell">
                    <img src={webicamp} alt="" />
                    </div>
                    </Link>
                  <div className="btn">Webicamp</div>
                </div>
              <div className="project-cell-container eventos">
              <Link to={{pathname:"https://speedy-lattice-214216.web.app/"}} target="_blank">
              <div className="project-cell">
                    <img src={eventos} alt="" />
                    </div>
                    </Link>
                  <div className="btn">Eventos</div>
                </div>
              <div className="project-cell-container bsconsults">
              <Link to={{pathname:"https://bsconsults.com"}} target="_blank">
              <div className="project-cell">
                    <img src={bsconsults} alt="" />
                    </div>
                    </Link>
                  <div className="btn">Bsconsults</div>
                </div>
            </div>
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

export default connect(mapStateToProps, actions)(ProjectHome);
