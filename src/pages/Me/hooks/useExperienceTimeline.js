import { useEffect } from "react";
import { gsap } from "gsap";

const useExperienceTimeline = (pathRef) => {
  useEffect(() => {
    if (!pathRef.current) return;

    const tl = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02", {}, 0.2)
      .to(".text01", { y: -20 }, 0.2)
      .to(
        ".exp-par-1",
        { opacity: 1, display: "block", scale: 1, y: -20 },
        0.2
      )
      .to(".ball05", {}, 0.52)
      .to(".text04", { y: -20 }, 0.52)
      .to(
        ".exp-par-1",
        { opacity: 0, display: "none", scale: 1, y: -20 },
        0.51
      )
      .to(
        ".exp-par-2",
        { opacity: 1, display: "block", scale: 1, y: -20 },
        0.52
      )
      .to(".ball07", {}, 1)
      .to(".text06", { y: -20 }, 1)
      .to(
        ".exp-par-2",
        { opacity: 0, display: "none", scale: 1, y: -20 },
        0.98
      )
      .to(
        ".exp-par-3",
        { opacity: 1, display: "block", scale: 1, y: -20 },
        1
      );

    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top bottom",
          end: "bottom center",
        },
      })
      .set(".theLine", {
        strokeDasharray: pathRef.current.getTotalLength(),
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .to(
        ".ball01",
        { motionPath: { path: ".theLine", alignOrigin: [0.5, 0.5] } },
        0
      )
      .from(
        ".theLine",
        {
          strokeDashoffset: pathRef.current.getTotalLength(),
        },
        0
      )
      .add(tl, 0);
  }, [pathRef]);
};

export default useExperienceTimeline;
