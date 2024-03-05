"use client";

import { motion } from "framer-motion";
import ServiceSlider from "../ServiceSlider";

const ServiceSliderWrapper = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
      className="w-full xl:max-w-[65%]"
    >
      <ServiceSlider />
    </motion.div>
  );
};

export default ServiceSliderWrapper;
