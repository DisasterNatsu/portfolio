"use client";

import { motion } from "framer-motion";

const ServicesSubTitle = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      className="mb-4 max-w-[400px] mx-auto lg:mx-0"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
      deserunt distinctio. Quibusdam illum dignissimos.
    </motion.p>
  );
};

export default ServicesSubTitle;
