"use client";

import { motion } from "framer-motion";
import WorkSlider from "../WorkSlider";

const WorkSliderWrapper = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
      className="w-full xl:max-w-[65%]"
    >
      <WorkSlider />
    </motion.div>
  );
};

export default WorkSliderWrapper;
