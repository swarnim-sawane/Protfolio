import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import TestimonialSlider from "../../components/TestimonialSlider";
import ServiceSlider from "../../components/ServiceSlider";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
  FaPython,
  FaCogs,
  FaTerminal,
  FaJava,
  FaNode,
  FaGit,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiJupyter,
  SiGithub,
  SiPytorch,
  SiTensorflow,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiFirebase,
  SiCplusplus,
  SiAbletonlive,
  SiReact as SiReactIcon, // Aliased to avoid name conflict
  SiFlask,
} from "react-icons/si";

// Data
export const aboutData = [
  {
    title: "My Skills",
    info: [
      {
        title: "Languages -",
        icons: [
          <SiCplusplus key="cpp" />,
          <FaPython key="python" />,
          <FaJava key="java" />,
          <FaHtml5 key="html" />,
          <SiMysql key="mysql" />,
          <SiMongodb key="mongodb" />,
          <SiPandas key="pandas" />,
        ],
      },
      {
        title: "Frameworks -",
        icons: [
          <SiFlask key="flask" />,
          <FaNode key="node" />,
          <SiPytorch key="pytorch" />,
          <SiTensorflow key="tensorflow" />,
          <SiGithub key="github" />,
          <SiReactIcon key="react" />,
        ],
      },
      {
        title: "Developer Tools -",
        icons: [
          <FaGit key="git" />,
          <FaDocker key="docker" />,
          <FaAws key="aws" />,
          <SiFirebase key="firebase" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "Music Production -",
        icons: [<SiAbletonlive key="ableton" />],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen bg-primary/30 py-32 text-center overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-rounded">
      <Circles />

      {/* Skills Section */}
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="flex flex-col w-full xl:max-w-3xl items-center"
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex justify-center mb-6 xl:mb-12">
            <motion.h2
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-4xl font-bold"
            >
              My Skills<span className="text-accent">.</span>
            </motion.h2>
          </div>

          <div className="py-2 xl:py-4 flex flex-col gap-y-6 items-center"> {/* Adjusted gap-y for more spacing */}
            {aboutData[index].info.map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row gap-x-4 items-center text-white/60"
              >
                {/* Title */}
                <div className="font-light text-2xl mb-2 md:mb-0">{item.title}</div> {/* Increased text size */}
                <div className="flex gap-x-6">
                  {/* Icons */}
                  {item.icons.map((icon, idx) => (
                    <div key={idx} className="text-3xl">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

     <div className="h-18"></div>

      {/* Projects Section */}
      <div className="container mx-auto mt-1 xl:mt-24 flex flex-col items-center">
        <div className="flex justify-center mb-6 xl:mb-12">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl font-bold"
          >
            My Projects<span className="text-accent">.</span>
          </motion.h2>
        </div>

        {/* Slider */}
        <motion.div
          className="w-full"
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <WorkSlider />
        </motion.div>
        <div className="spacer h-100"></div>
      </div>

      <div className="h-24"></div>

      {/* My Specializations */}
      <div className="container mx-auto mt-1 xl:mt-24 flex flex-col items-center">
        {/* text */}
        <div className="flex justify-center mb-6 xl:mb-12">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl font-bold"
          >
            My Specializations<span className="text-accent">.</span>
          </motion.h2>
        </div>

        {/* slider */}
        <motion.div
          className="w-full xl:max-w-[65%]"
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ServiceSlider />
        </motion.div>
      </div>

      <div className="h-24"></div>
      {/* Voulenteering section */}
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Me as a <span className="text-accent">Volunteer.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden">
          <TestimonialSlider />
        </motion.div>
        
      </div>

      <div className="mt-12">
        <Bulb />
      </div>
    </div>
  );
};

export default About;
