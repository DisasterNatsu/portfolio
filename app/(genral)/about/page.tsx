"use client";

import { useState } from "react";

import { AboutData } from "@/constants/AboutData";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import CounterUp from "react-countup";
import Image from "next/image";

const About = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="relative h-full bg-primary/30 py-32 text-white text-center xl:text-left">
      <Circles />
      {/* avater */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: -80 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="hidden xl:flex absolute right-60 bottom-[-350px]"
      >
        <Image
          src={"/avatar2.png"}
          width={737}
          height={678}
          alt="image"
          className="translate-z-0 w-full h-full"
        />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 select-none">
        {/* text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -180 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px0"
          >
            4 years ago, I began freelancing as a develper. Since then,
            I&apos;ve done remote work for companies, consulted for startups,
            and collaborated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}

          <motion.div
            initial={{ opacity: 0, y: 180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={4} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* clients */}

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={153} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>

              {/* projects */}

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={213} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              {/* awards */}

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={7} duration={5} delay={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}

        <motion.div
          initial={{ opacity: 0, x: 180 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {AboutData.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } capitalize cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {AboutData[index].info.map((item: any, itenIndex: number) => (
              <div
                key={itenIndex}
                className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* titles */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon: any, iconIndex: number) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
