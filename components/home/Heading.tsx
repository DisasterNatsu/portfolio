"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="h1 mt-36 xl:mt-0"
    >
      Transforming Ideas <br /> Into{" "}
      <span className="text-accent">Digital Reality</span>
    </motion.h1>
  );
};

export default Heading;
