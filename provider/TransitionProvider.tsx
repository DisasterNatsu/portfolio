"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
