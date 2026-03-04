import { useEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from "gsap/gsap-core";
import SmoothScroll from "../../../utils/SmoothScroll";

const useIntroAnimation = (setScrollCounter, enableScroll, disableScroll) => {
  useEffect(() => {
    document.getElementsByTagName("body")[0].classList.add("pinkScroll");
    window.onresize = window.onload = function () {
      gsap.set(".m1_stage", { x: "50%", opacity: 1 });
    };
    return () => {
      document.getElementsByTagName("body")[0].classList.remove("pinkScroll");
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollCounter(4);

    // Smooth scroll effect
    new SmoothScroll({
      target: document.querySelector(".me-container"),
      scrollEase: 0.1,
      maxOffset: 200,
    });

    enableScroll();
    gsap.defaults({ ease: "none" });
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    // Hero image fade on scroll
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".me-intro",
          scrub: true,
          start: "center top",
          end: "bottom 10%",
        },
      })
      .to(".img-container", {
        opacity: 0,
        ease: Power3.easeIn,
      });

    return () => {
      document.body.style.height = "unset";
      disableScroll();
    };
  }, [setScrollCounter, enableScroll, disableScroll]);
};

export default useIntroAnimation;
