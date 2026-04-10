"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#3F72AF] via-[#3F8EFC] to-[#3F72AF] dark:from-[#3F8EFC] dark:via-[#60A5FA] dark:to-[#3F8EFC] z-60 origin-left"
      style={{ scaleX }}
    />
  );
}
