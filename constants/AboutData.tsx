import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress } from "react-icons/fa";

import { SiNextdotjs, SiFramer } from "react-icons/si";

export const AboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer (Freelancer) - Disaster Scans",
        stage: "2020 - 2024",
      },
      {
        title: "Font End Developer - webFrndz Technologies",
        stage: "2020 - 2021",
      },
    ],
  },
];
