/** @format */
// eslint-disable-next-line react/jsx-key

import React, { useState } from "react";

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
  SiAbletonlive
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Competitive Coding",
        icons: [<SiCplusplus />, <FaPython />,  <FaCogs />, <FaTerminal />],
      },
      {
        title: "Machine Learning",
        icons: [
          <SiJupyter />,
          <FaPython />,
          <SiPytorch />,
          <SiTensorflow />,
          <SiGithub />,
          <SiCplusplus />,
        ],
      },
      {
        title: "DBMS",
        icons: [<SiMysql />, <SiMongodb />, <SiPandas />],
      },
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiFirebase />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
      {
        title: "Music Production",
        icons: [<SiAbletonlive />],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Competitve Coding - Codechef , Codeforces",
        stage: "2021 - Present",
      },
      {
        title: "Web Development - Self",
        stage: "2022 - Present",
      },
      {
        title: "Music Production - YouTube",
        stage: "2019 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: " Machine Learning - MatLab",
        stage: "2023",
      },
      {
        title: "Web Development - Coursera",
        stage: "2022",
      },
      {
        title: "Generative AI Course - Google Dev",
        stage: "2023",
      },
    ],
  },
];

///components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[120px] max-w-[400px] max-h-[650px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Unveiling the <span className="text-accent">Passion</span>,{" "}
            <span className="text-accent">Perseverance</span> and{" "}
            <span className="text-accent">Progress.</span>
          </motion.h2>
          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            With an insatiable passion for AI, technology, and coding, I immerse
            myself in the world of innovation. As a dedicated learner, I embrace
            every opportunity to explore emerging concepts and cutting-edge
            advancements, fueled by the excitement of unraveling new
            possibilities.
          </motion.p>

          {/* counters */}
          <motion.div
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects Completed
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Online Certifications
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Coding Challenges
                </div>
              </div>

              {/* Hackathons
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={5} /> + 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Awards</div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                key={item.title}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={item.title}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="hidden md:flex">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={null} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
