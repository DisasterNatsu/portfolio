"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Avatar = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: -80 }}
      transition={{ duration: 1, ease: [0.25, 0.6, 0.3, 0.8], delay: 0.5 }}
      className="w-full h-full max-w-[773px] max-h-[678px] absolute -bottom-32 lg:bottom-20 lg:right-[14%]"
    >
      <div className="hidden xl:flex xl:max-w-none">
        <Image
          src={"/avatar2.png"}
          width={737}
          height={678}
          alt="image"
          className="translate-z-0 w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default Avatar;
