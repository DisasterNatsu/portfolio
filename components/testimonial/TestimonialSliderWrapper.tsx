"use client";

import { motion } from "framer-motion";
import TestimonialSlider from "../TestimonialSlider";

const TestimonialSliderWrapper = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
    >
      <TestimonialSlider />
    </motion.div>
  );
};

export default TestimonialSliderWrapper;
