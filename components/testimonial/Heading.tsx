"use client";

import { motion } from "framer-motion";

const TestimonialHeading = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 1.5,
        delay: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      }}
      className="h2 mb-8 xl:mb-0"
    >
      What clients <span className="text-accent">say.</span>
    </motion.h2>
  );
};

export default TestimonialHeading;
