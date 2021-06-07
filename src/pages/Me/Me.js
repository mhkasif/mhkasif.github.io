import React, { useEffect } from "react";
import Image from "../../images/me/mhkasif.jpg";
import "../../CSS/Me.scss";
import gsap from "gsap/gsap-core";
import { TimelineLite } from "gsap/all";
import { Power3 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import BackButton from "../../Components/BackButton/BackButton";
import { connect } from "react-redux";
import {
  enableScroll,
  disableScroll,
} from "../../Redux/Actions/HomeComponentInfoActions/HomeComponentInfoActions";
const Me = ({ enableScroll, disableScroll }) => {
  useEffect(() => {
    enableScroll();
    const tl=new TimelineLite()
    const dl = gsap.utils.toArray(".data-left");
    dl.forEach((data, i) => {
      ScrollTrigger.create({
        toggleClass: "active",
        trigger: data,
        start: "center 30%",
        end: "bottom 10%",
        markers: true,
        scrub: true,
      });
    })

    const dr = gsap.utils.toArray(".data-right");
    dr.forEach((data, i) => {
      ScrollTrigger.create({
        toggleClass: "active",
        trigger: data,
        start: "center 30%",
        end: "bottom 10%",
        // markers: true,
        scrub: true,
      });
    })

    return () => {
      disableScroll();
    };
    // const tl = new TimelineLite({
    //   scrollTrigger: {
    //     trigger: ".me-image-left",
    //     // toggleActions:"restart pause reverse pause",
    //     // start: "top top",
    //     scrub: true,
    //     // end: "bottom top",
    //     markers: true,
    //   },
    // });
    // tl.from(".me-image-left", {
    //   x: "-400%",
    //   duration: 1,
    //   // opacity:0
    // });
  }, []);
  return (
    <React.Fragment>
      <BackButton color="black" />
      <div className="me-container">
        <div className="me-quote">
          <q>We present you the best of the best</q>
        </div>

        <div className="me-data-container">
          <div className="data-left data-left-1 data">
            <div className="title">Web Designer</div>
            <div className="description">
              <img className="me-image me-image-left" src={Image} alt="" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                voluptatibus magnam aut voluptates reiciendis consequatur
                quibusdam ad accusantium provident earum non totam aspernatur,
                velit esse nobis! Sequi eligendi nulla hic!
              </p>
            </div>
          </div>
          <div className="data-right data-right-1 data">
            <div className="title">Web Designer</div>
            <div className="description">
              <img className="me-image me-image-right" src={Image} alt="" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                voluptatibus magnam aut voluptates reiciendis consequatur
                quibusdam ad accusantium provident earum non totam aspernatur,
                velit esse nobis! Sequi eligendi nulla hic!
              </p>
            </div>
          </div>
          <div className="data-left data-left-2 data">
            <div className="title">Web Designer</div>
            <div className="description">
              <img className="me-image me-image-left" src={Image} alt="" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                voluptatibus magnam aut voluptates reiciendis consequatur
                quibusdam ad accusantium provident earum non totam aspernatur,
                velit esse nobis! Sequi eligendi nulla hic!
              </p>
            </div>
          </div>
          <div className="data-right data-right-2 data">
            <div className="title">Web Designer</div>
            <div className="description">
              <img className="me-image me-image-right" src={Image} alt="" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                voluptatibus magnam aut voluptates reiciendis consequatur
                quibusdam ad accusantium provident earum non totam aspernatur,
                velit esse nobis! Sequi eligendi nulla hic!
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const actions = {
  enableScroll,
  disableScroll,
};

export default connect(null, actions)(Me);
