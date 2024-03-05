"use client";

import { motion } from "framer-motion";

const Subtitle = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    </motion.p>
  );
};

export default Subtitle;
