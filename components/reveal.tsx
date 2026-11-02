"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.96, y: reduceMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
