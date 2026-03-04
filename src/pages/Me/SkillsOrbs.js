import React, { useRef } from "react";
import Mui from "../../images/skills/mui.png";
import NodejsImage from "../../images/skills/node.png";
import ReactImage from "../../images/skills/react.png";
import RN from "../../images/skills/rn.png";

// CDN icons for additional skills
const ICONS = {
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  threejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  electron: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  graphql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  expressjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
};

const SkillIcon = ({ iconRef, src, name, onMouseEnter, onMouseLeave, size = 60 }) => (
  <image
    className="svg-images"
    ref={iconRef}
    style={{ cursor: "pointer" }}
    onMouseEnter={() => onMouseEnter(iconRef, name)}
    onMouseLeave={() => onMouseLeave(iconRef)}
    xlinkHref={src}
    width={size}
    height={size}
  />
);

const SkillsOrbs = ({ onMouseEnter, onMouseLeave, refs }) => {
  const { muiImage, reactImage, nodeImage, rnImage } = refs;

  // Refs for additional skill icons
  const typescriptRef = useRef();
  const nextjsRef = useRef();
  const reduxRef = useRef();
  const threejsRef = useRef();
  const mongodbRef = useRef();
  const dockerRef = useRef();
  const electronRef = useRef();
  const firebaseRef = useRef();
  const graphqlRef = useRef();
  const tailwindRef = useRef();
  const gitRef = useRef();
  const sassRef = useRef();
  const expressjsRef = useRef();

  return (
    <div className="skills-section" data-depth="1">
      <svg className="main1" width="100vw" height="1000">
        <defs>
          <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop
              offset="10%"
              style={{ stopColor: "#c1033c", stopOpacity: 0.9 }}
            />
            <stop
              offset="99%"
              style={{ stopColor: "#c1033c", stopOpacity: 0.6 }}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop
              offset="25%"
              style={{ stopColor: "#252525", stopOpacity: 0.1 }}
            />
            <stop
              offset="99%"
              style={{ stopColor: "#252525", stopOpacity: 0.2 }}
            />
          </linearGradient>
        </defs>

        <rect
          className="m1Bg"
          fill="url(#grad2)"
          width="100%"
          height="100%"
        />

        <g className="m1_stage">
          {/* ====== Outermost ring (r=550) ====== */}
          <g className="m1_cGroup">
            <circle
              className="c1_line c1_line4"
              cx="0"
              cy="50"
              r="550"
              fill="none"
              strokeWidth="2"
              stroke="url(#grad1)"
              opacity="0.4"
            />
            {/* React Native */}
            <g className="m1Orb orb4b">
              <SkillIcon iconRef={rnImage} src={RN} name="React Native" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* TypeScript (replaces old HTML text orb) */}
            <g className="m1Orb orb4">
              <SkillIcon iconRef={typescriptRef} src={ICONS.typescript} name="TypeScript" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Docker */}
            <g className="m1Orb orb5">
              <SkillIcon iconRef={dockerRef} src={ICONS.docker} name="Docker" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* MongoDB */}
            <g className="m1Orb orb5b">
              <SkillIcon iconRef={mongodbRef} src={ICONS.mongodb} name="MongoDB" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
          </g>

          {/* ====== Second ring (r=450) ====== */}
          <g className="m1_cGroup">
            <circle
              className="m1OrbBlank"
              cx="0"
              cy="50"
              r="25"
              fill="#983334"
            />
            <circle
              className="c1_line c1_line3"
              cx="0"
              cy="50"
              r="450"
              fill="none"
              strokeWidth="2"
              stroke="url(#grad1)"
              opacity="0.4"
            />
            {/* Node.js */}
            <g className="m1Orb orb3c">
              <SkillIcon iconRef={nodeImage} src={NodejsImage} name="Node.js" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* React */}
            <g className="m1Orb orb3b">
              <SkillIcon iconRef={reactImage} src={ReactImage} name="React" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Next.js (replaces old Canvas text orb) */}
            <g className="m1Orb orb3">
              <SkillIcon iconRef={nextjsRef} src={ICONS.nextjs} name="Next.js" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Express.js */}
            <g className="m1Orb orb6">
              <SkillIcon iconRef={expressjsRef} src={ICONS.expressjs} name="Express.js" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Three.js */}
            <g className="m1Orb orb6b">
              <SkillIcon iconRef={threejsRef} src={ICONS.threejs} name="Three.js" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
          </g>

          {/* ====== Third ring (r=360) ====== */}
          <g className="m1_cGroup">
            <circle
              className="m1OrbBlank"
              cx="0"
              cy="50"
              r="15"
              fill="#653997"
            />
            <circle
              className="c1_line c1_line2"
              cx="0"
              cy="50"
              r="360"
              fill="none"
              strokeWidth="2"
              stroke="url(#grad1)"
              opacity="0.5"
            />
            {/* Material UI */}
            <g className="m1Orb orb2">
              <SkillIcon iconRef={muiImage} src={Mui} name="Material-UI" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Firebase */}
            <g className="m1Orb orb7">
              <SkillIcon iconRef={firebaseRef} src={ICONS.firebase} name="Firebase" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Sass */}
            <g className="m1Orb orb7b">
              <SkillIcon iconRef={sassRef} src={ICONS.sass} name="Sass" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
          </g>

          {/* ====== Inner ring (r=279) ====== */}
          <g className="m1_cGroup">
            <circle
              className="m1OrbBlank"
              cx="0"
              cy="50"
              r="20"
              fill="#653997"
            />
            <circle
              className="m1OrbBlank"
              cx="0"
              cy="50"
              r="40"
              fill="rgba(125,200,32,0.19)"
            />
            <circle
              className="c1_solid"
              cx="0"
              cy="50"
              r="280"
              fill="url(#grad1)"
              opacity="0.2"
            />
            <circle
              className="c1_line c1_line1"
              cx="0"
              cy="50"
              r="279"
              fill="none"
              strokeWidth="3"
              stroke="url(#grad1)"
              opacity="0.5"
            />
            {/* Redux (replaces old SVG text orb) */}
            <g className="m1Orb orb1">
              <SkillIcon iconRef={reduxRef} src={ICONS.redux} name="Redux" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Electron */}
            <g className="m1Orb orb8">
              <SkillIcon iconRef={electronRef} src={ICONS.electron} name="Electron" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* GraphQL */}
            <g className="m1Orb orb8b">
              <SkillIcon iconRef={graphqlRef} src={ICONS.graphql} name="GraphQL" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Tailwind CSS */}
            <g className="m1Orb orb8c">
              <SkillIcon iconRef={tailwindRef} src={ICONS.tailwind} name="Tailwind CSS" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
            {/* Git */}
            <g className="m1Orb orb8d">
              <SkillIcon iconRef={gitRef} src={ICONS.git} name="Git" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </g>
          </g>

          {/* Decorative inner circles */}
          <g className="m1_cGroup">
            <circle
              className="c1_solid"
              cx="0"
              cy="50"
              r="220"
              fill="url(#grad1)"
              opacity="0.4"
            />
          </g>
          <g className="m1_cGroup">
            <circle
              className="c1_solid"
              cx="0"
              cy="50"
              r="150"
              fill="url(#grad1)"
              opacity="0.5"
            />
          </g>
          <g className="m1_cGroup">
            <circle
              className="c1_solid"
              cx="0"
              cy="50"
              r="80"
              fill="#c1033c"
              opacity="0.6"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SkillsOrbs;
