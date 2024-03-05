"use client";

import { motion } from "framer-motion";
import ProjectsBtn from "../ProjectsBtn";
import { fadeIn } from "@/variants";

const BtnContainer = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      className="hidden xl:flex"
    >
      <ProjectsBtn />
    </motion.div>
  );
};

export default BtnContainer;
