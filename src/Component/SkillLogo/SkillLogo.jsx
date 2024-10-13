import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faFire, faLayerGroup } from "@fortawesome/free-solid-svg-icons"; // Placeholder icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Tailwind SVG icon as a React component
const TailwindIcon = () => (
  <svg
    fill="#1cb2f2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#1cb2f2"
    width="64" // Adjust the size of the SVG
    height="64"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
      ></path>
    </g>
  </svg>
);

const ExpressIcon = () => (
  <svg
    fill="#000000"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
    </g>
  </svg>
);

const MongoDBIcon = () => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    width="64"
    height="64"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <defs>
        <linearGradient
          id="a"
          x1="-645.732"
          y1="839.188"
          x2="-654.59"
          y2="839.25"
          gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.231" stopColor="#999875"></stop>
          <stop offset="0.563" stopColor="#9b9977"></stop>
          <stop offset="0.683" stopColor="#a09f7e"></stop>
          <stop offset="0.768" stopColor="#a9a889"></stop>
          <stop offset="0.837" stopColor="#b7b69a"></stop>
          <stop offset="0.896" stopColor="#c9c7b0"></stop>
          <stop offset="0.948" stopColor="#deddcb"></stop>
          <stop offset="0.994" stopColor="#f8f6eb"></stop>
          <stop offset="1" stopColor="#fbf9ef"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="-644.287"
          y1="823.405"
          x2="-657.028"
          y2="845.476"
          gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#48a547"></stop>
          <stop offset="1" stopColor="#3f9143"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="-643.386"
          y1="839.485"
          x2="-652.418"
          y2="833.417"
          gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#41a247"></stop>
          <stop offset="0.352" stopColor="#4ba74b"></stop>
          <stop offset="0.956" stopColor="#67b554"></stop>
          <stop offset="1" stopColor="#69b655"></stop>
        </linearGradient>
      </defs>
      <path
        d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z"
        style={{ fill: "url(#a)" }}
      ></path>
      <path
        d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z"
        style={{ fill: "url(#b)" }}
      ></path>
      <path
        d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z"
        style={{ fill: "url(#c)" }}
      ></path>
    </g>
  </svg>
);

const skillsData = [
  {
    name: "HTML5",
    icon: faHtml5,
    defaultColor: "#E34F26",
    activeColor: "#FF5733",
  },
  {
    name: "CSS3",
    icon: faCss3Alt,
    defaultColor: "#1572B6",
    activeColor: "#336699",
  },
  {
    name: "JavaScript",
    icon: faJsSquare,
    defaultColor: "#F7DF1E",
    activeColor: "#FFC107",
  },
  {
    name: "React",
    icon: faReact,
    defaultColor: "#61DAFB",
    activeColor: "#00D8FF",
  },
  {
    name: "NodeJS",
    icon: faNodeJs,
    defaultColor: "#68A063",
    activeColor: "#5C995A",
  },
  { name: "MongoDB", icon: MongoDBIcon, isSvg: true }, // Use MongoDB SVG component here
  { name: "Express.js", icon: ExpressIcon, isSvg: true }, // Use Express.js SVG component here
  { name: "Tailwind CSS", icon: TailwindIcon, isSvg: true },
  {
    name: "Material UI",
    icon: faLayerGroup,
    defaultColor: "#007FFF",
    activeColor: "#4682B4",
  },
  {
    name: "Firebase",
    icon: faFire,
    defaultColor: "#FFCA28",
    activeColor: "#FFA726",
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    defaultColor: "#7952B3",
    activeColor: "#563D7C",
  },
];

const SkillLogo = () => {
  const [activeIcons, setActiveIcons] = useState({});

  const toggleColor = (name) => {
    setActiveIcons((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="py-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">My Skills & Tools</h2>
      <p className="text-lg mb-6">
        I am skilled at progressive enhancement design systems & UI Engineering
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => toggleColor(skill.name)}
          >
            {skill.isSvg ? (
              <skill.icon />
            ) : (
              <FontAwesomeIcon
                icon={skill.icon}
                size="4x"
                style={{
                  color: activeIcons[skill.name]
                    ? skill.activeColor
                    : skill.defaultColor,
                }}
                className="mb-3"
              />
            )}
            <h3 className="text-xl font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLogo;
