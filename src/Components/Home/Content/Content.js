// import React, { Component, useRef } from "react";
// import { connect } from "react-redux";
// import { TimelineLite, Power3 } from "gsap";
// import { decrementCounter } from "../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
// import Services from "./Services/Services";
// import Work from "./Work/Work";
// import Team from "./Team/Team";
// import Clients from "./Clients/Clients";
// import Footer from "./Footer/Footer";

// const Content=({scrollCounter,decrementCounter})=>{

//   const l1  = useRef(null);
//   const l2  = useRef(null);
//   const l3  = useRef(null);
//   const l4  = useRef(null);
//   const exitAnimationOnWheelDown = () => {
//     var tl = new TimelineLite({
//       onComplete: () => {
//         decrementCounter();
//       }
//     });
//     tl.to(l1.current, 1, { transform: "scaleX(0)", ease: Power3.easeInOut })
//       .to(l2.current, 1, { transform: "scaleY(0)", ease: Power3.easeInOut }, 0)
//       .to(l3.current, 1, { transform: "scaleX(0)", ease: Power3.easeInOut }, 0)
//       .to(l4.current, 1, { transform: "scaleY(0)", ease: Power3.easeInOut }, 0);
//   };

//   return (
//     <div className="contentContainer">
//       <div className="contentWindow">
//         <div className="lineWrapperTopLeft lineWrapper">
//           <div ref={l2} className="line lineTopLeft"></div>
//         </div>

//         <div className="lineWrapperTopRight lineWrapper">
//           <div ref={l1} className="line lineTopRight"></div>
//         </div>

//         <div className="lineWrapperRight lineWrapper">
//           <div ref={l3} className="line lineRight"></div>
//         </div>
//         <div className="lineWrapperBottomRight lineWrapper">
//           <div ref={l4} className="line lineBottomRight"></div>
//         </div>
//         <div className="lineWrapperBottomLeft lineWrapper">
//           <div ref={l4} className="line lineBottomLeft"></div>
//         </div>
//         <div className="lineWrapperLeftBottom lineWrapper">
//           <div ref={l4} className="line lineLeftBottom"></div>
//         </div>
//         <div className="lineWrapperLeftTop lineWrapper">
//           <div ref={l4} className="line lineLeftTop"></div>
//         </div>
//         {/* <div className="hamPadder"></div>
//                       <div className="pageStatusPadder"></div>
//                       <div className="btnPadder"></div>
//                       <div className="headingPadder"></div> */}

//         {scrollCounter === 2 && (
//           <Services
//             exitAnimationOnWheelDown={exitAnimationOnWheelDown}
//           />
//         )}
//         {/* scrollCounter === 3 && <Work /> */}
//         {scrollCounter === 4 && <Team />}
//         {scrollCounter === 5 && <Clients />}
//         {scrollCounter === 6 && <Footer />}
//       </div>
//     </div>
//   );
// }

// // class Content extends Component {
// //   componentDidMount = () => {
// //     // var { l1, l2, l3, l4 } = this.refs;
// //     // var tl = new TimelineLite();
// //     // tl.to(l1, 1, { transform: "scaleX(1)", ease: Power3.easeOut })
// //     //   .to(l2, 1, { transform: "scaleY(1)", ease: Power3.easeOut }, 0)
// //     //   .to(l3, 1, { transform: "scaleX(1)", ease: Power3.easeOut }, 0)
// //     //   .to(l4, 1, { transform: "scaleY(1)", ease: Power3.easeOut }, 0);
// //   };

// //   render() {
// //     var { scrollCounter } = this.props;

// //   }
// // }

// var mapStateToProps = state => ({
//   scrollCounter: state.homeComponentInfo.scrollCounter,
//   isScrollable: state.homeComponentInfo.isScrollable
// });

// var actions = {
//   decrementCounter
// };

// export default connect(mapStateToProps, actions)(Content);
import React, { Component, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { TimelineLite, Power3 } from "gsap";
import { decrementCounter, setScrollCounter } from "../../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";

import Footer from "./Footer/Footer";
import SlectusHome from "./SlectusHome/SlectusHome";
import HkjobzHome from "./HkjobzHome/HkjobzHome";
import AboutHome from "./AboutHome/AboutHome";
import ProjectHome from "./ProjectsHome/ProjectHome";
import { Timeline } from "gsap/gsap-core";
import '../../../CSS/Content.scss'
import gsap from "gsap/gsap-core";
const Content = ({ scrollCounter,setScrollCounter }) => {
  const isFirstRender = React.useRef(true);
  useEffect(() => {
    console.log(scrollCounter);
    if (!isFirstRender.current) {
      const tl = new TimelineLite({});
      tl.to('.non-active',{display:"none"},0)
      .to(
        ".active",
        1,
        {
          y: "-100%",
        },
        0
      )
        .to(
          ".page-number-down",
          1,
          {
            y: "100%",
          },
          0
        )
        .to(
          ".divider",
          1,
          {
            width: "0%",
          },
          0
        )
        .to(
          ".active",
          1,
          {
            y: "0",
          },
          2.1
        )
        .to(
          ".page-number-down",
          1,
          {
            y: "0%",
          },
          2.1
        )
        .to(
          ".divider",
          1,
          {
            width: "80%",
          },
          2.1
        );
    }
  }, [scrollCounter]);
  useEffect(() => {
    isFirstRender.current = false;
    // var { l1, l2, l3, l4 } = this.refs;
    var tl = new TimelineLite({
    });
    // tl.to(l1, 1, { scale:(1), ease: Power3.easeOut })
    //   .to(l2, 1, {scale:(1), ease: Power3.easeOut }, 0)
    //   .to(l3, 1, { scale:(1), ease: Power3.easeOut }, 0)
    //   .to(l4, 1, { scale:(1), ease: Power3.easeOut }, 0);
    tl.set('.active',{
      y:-100,
      opacity:0
    })
    .to(
      ".active",
      1,
      {
        y: 0,
        opacity: 1,
      },

    )
      .to(
        ".page-number-down",
        1,
        {
          y: 0,
          opacity: 1,
        },
        0
      )
      .to(
        ".divider",
        1,
        {
          width: "80%",
        },
        0
      );
  }, []);
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps,prevState)
  //   var tl = new TimelineLite({
  //     delay: 1,
  //   });
  //   tl.set(
  //     ".page-number-up",
  //     {
  //       y: "-100%",
  //     },
  //     0
  //   )
  //     .set(
  //       ".page-number-down",
  //       {
  //         y: "100%",
  //       },
  //       0
  //     )
  //     .set(
  //       ".divider",
  //       {
  //         width: 0,
  //       },
  //       0
  //     )
  //     // tl.to(l1, 1, { scale:(1), ease: Power3.easeOut })
  //     //   .to(l2, 1, {scale:(1), ease: Power3.easeOut }, 0)
  //     //   .to(l3, 1, { scale:(1), ease: Power3.easeOut }, 0)
  //     //   .to(l4, 1, { scale:(1), ease: Power3.easeOut }, 0);
  //     .to(
  //       ".page-number-up",
  //       1,
  //       {
  //         y: 0,
  //       },
  //       0
  //     )
  //     .to(
  //       ".page-number-down",
  //       1,
  //       {
  //         y: 0,
  //       },
  //       0
  //     )
  //     .to(
  //       ".divider",
  //       1,
  //       {
  //         width: "80%",
  //       },
  //       0
  //     );
  // }

  // exitAnimationOnWheelDown = () => {
  //   console.log("called");
  //   var { l1, l2, l3, l4 } = this.refs;
  //   var tl = new TimelineLite({
  //     onComplete: () => {
  //       this.props.decrementCounter();
  //     },
  //   });
  //   tl.to(l1, 1, { scaleX: 0, ease: Power3.easeInOut })
  //     .to(l2, 1, { scaleY: 0, ease: Power3.easeInOut }, 0)
  //     .to(l3, 1, { scaleX: 0, ease: Power3.easeInOut }, 0)
  //     .to(l4, 1, { scaleY: 0, ease: Power3.easeInOut }, 0);
  // };

  // render() {
  //   var { scrollCounter } = this.props;
  const hover=()=>{
    const tl=new Timeline()
    tl.to('.page-number-up',{
      display:"block",
      ease:Power3.easeIn,
      duration: .5
    })
  }
  const mouseOver=(cname)=>{
    console.log(cname)
    gsap.to('.overflow-wrapper', {
            ease:Power3.easeInOut,
      scrollTo:{
      y:cname,
      offsetY:20

    }});

  }
  const leave=()=>{
    const tl=new Timeline()
    tl.to('.non-active',{
      display:"none",
      ease:Power3.easeOut,
      duration:.5
    })
  }
  return (
    <div className={`contentContainer ${scrollCounter === 5 ? "blue-bg" : ""}`}>
      {scrollCounter === 5 && <div className="background-ball"></div>}
      <div className="contentWindow">
        <div
          className="page-count"
          style={{
            color:
              (scrollCounter === 5 || scrollCounter === 4) &&
              "rgba(255,255,255,0.7)",
          }}
        >
          <div onMouseLeave={leave} onMouseOver={hover} className="overflow-wrapper ">
          <div   className="page-number-up-container page-number-overflow-wrapper">
          <div onClick={()=>setScrollCounter(1)} onMouseOver={()=>mouseOver('#page-number-up-1')} id="page-number-up-1"  className={`page-number page-number-up page-number-up-1 ${scrollCounter===1?'active':"non-active"}`} style={{display:scrollCounter===1?"block":"none"}}>1</div>
          <div onClick={()=>setScrollCounter(2)} onMouseOver={()=>mouseOver('#page-number-up-2')} id="page-number-up-2"  className={`page-number page-number-up page-number-up-2 ${scrollCounter===2?'active':"non-active"}`} style={{display:scrollCounter===2?"block":"none"}}>2</div>
          <div onClick={()=>setScrollCounter(3)} onMouseOver={()=>mouseOver('#page-number-up-3')} id="page-number-up-3"  className={`page-number page-number-up page-number-up-3 ${scrollCounter===3?'active':"non-active"}`} style={{display:scrollCounter===3?"block":"none"}}>3</div>
          <div onClick={()=>setScrollCounter(4)} onMouseOver={()=>mouseOver('#page-number-up-4')} id="page-number-up-4"  className={`page-number page-number-up page-number-up-4 ${scrollCounter===4?'active':"non-active"}`} style={{display:scrollCounter===4?"block":"none"}}>4</div>
          <div onClick={()=>setScrollCounter(5)} onMouseOver={()=>mouseOver('#page-number-up-5')} id="page-number-up-5"  className={`page-number page-number-up page-number-up-5 ${scrollCounter===5?'active':"non-active"}`} style={{display:scrollCounter===5?"block":"none"}}>5</div>
          <div onClick={()=>setScrollCounter(6)} onMouseOver={()=>mouseOver('#page-number-up-6')} id="page-number-up-6"  className={`page-number page-number-up page-number-up-6 ${scrollCounter===6?'active':"non-active"}`} style={{display:scrollCounter===6?"block":"none"}}>6</div>

          </div>
          </div>

          <div
            className="divider"
            style={{
              borderBottomColor:
                (scrollCounter === 5 || scrollCounter === 4) &&
                "rgba(255,255,255,0.7)",
            }}
          />
          <div className="overflow-wrapper">
            <div className="page-number page-number-down">6</div>
          </div>
        </div>
        <div className="lineWrapperTopLeft lineWrapper">
          <div
            // ref="l2"
            className={`line lineTopLeft ${scrollCounter===4?'line-white':""}`}
          ></div>
        </div>

        <div className="lineWrapperTopRight lineWrapper">
          <div
            // ref="l1"
            className={`line lineTopRight ${scrollCounter===4?'line-white':""}`}
          ></div>
        </div>

        <div className="lineWrapperRight lineWrapper">
          <div
            // ref="l3"
            className={`line lineRight ${scrollCounter===4?'line-white':""}`}

          ></div>
        </div>
        {scrollCounter !== 5 ? (
          <React.Fragment>
            <div className="lineWrapperBottomRight lineWrapper">
              <div
                // ref="l4"

                className={`line lineBottomRight ${scrollCounter===4?'line-white':""}`}
              ></div>
            </div>
            <div className="lineWrapperBottomLeft lineWrapper">
              <div
                // ref="l4"

                className={`line lineBottomLeft ${scrollCounter===4?'line-white':""}`}
              ></div>
            </div>
          </React.Fragment>
        ) : (
          <div className="lineWrapperBottomFull lineWrapper">
            <div
              // ref="l4"
              className={`line lineBottomFull ${scrollCounter===4?'line-white':""}`}
            ></div>
          </div>
        )}
        <div className="lineWrapperLeftBottom lineWrapper">
          <div
            // ref="l4"
            className={`line lineLeftBottom ${scrollCounter===4?'line-white':""}`}

          ></div>
        </div>
        <div className="lineWrapperLeftTop lineWrapper">
          <div
            // ref="l4"
            className={`line lineLeftTop ${scrollCounter===4?'line-white':""}`}

          ></div>
        </div>
        {/* <div className="hamPadder"></div>
                        <div className="pageStatusPadder"></div>
                        <div className="btnPadder"></div>
                        <div className="headingPadder"></div> */}

        {scrollCounter === 2 && (
          <SlectusHome
          // exitAnimationOnWheelDown={this.exitAnimationOnWheelDown}
          />
        )}
        {scrollCounter === 3 && <HkjobzHome />}
        {scrollCounter === 4 && <AboutHome />}
        {scrollCounter === 5 && <ProjectHome />}
        {scrollCounter === 6 && <Footer />}
      </div>
    </div>
  );
  // }
};

var mapStateToProps = (state) => ({
  scrollCounter: state.homeComponentInfo.scrollCounter,
  isScrollable: state.homeComponentInfo.isScrollable,
});

var actions = {
  decrementCounter,
  setScrollCounter

};

export default connect(mapStateToProps, actions)(Content);
