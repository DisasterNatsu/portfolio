"use client";

import { motion } from "framer-motion";

const WorkHeading = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
      className="h2 xl:mt-12"
    >
      My work<span className="text-accent">.</span>
    </motion.h2>
  );
};

export default WorkHeading;
