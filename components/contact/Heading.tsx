"use client";

import { motion } from "framer-motion";

const ContactHeading = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="h2 text-center mb-12"
    >
      Let&apos;s <span className="text-accent">connect.</span>
    </motion.h2>
  );
};

export default ContactHeading;
