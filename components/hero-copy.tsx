"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight } from "lucide-react";

export function HeroCopy() {
  const reduceMotion = useReducedMotion();
  const line = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <p className="eyebrow"><span className="eyebrow-index">01 /</span> FRONTEND DEVELOPMENT <i /> APPLIED AI</p>
      <motion.h1
        id="hero-title"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: reduceMotion ? 0 : 0.08 }}
      >
        <motion.span className="hero-title-line" variants={line} transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}>
          I build <em>thoughtful</em>
        </motion.span>
        <br className="desktop-break" />
        <motion.span className="hero-title-line" variants={line} transition={{ duration: reduceMotion ? 0 : 0.78, ease: [0.22, 1, 0.36, 1] }}>
          digital experiences<span className="hero-period">.</span>
        </motion.span>
      </motion.h1>
      <motion.p
        className="hero-intro"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        I&apos;m Azmol Wasim Hussain — a frontend developer and Computer Science student building modern web experiences with React, Next.js, and TypeScript. Applied AI is a growing interest in how I make products more useful.
      </motion.p>
      <motion.div
        className="hero-ctas"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="button button--primary" href="#work">Explore my work <ArrowDownRight size={16} /></a>
        <a className="button button--quiet" href="/azmol-wasim-hussain-resume.pdf" download>Download résumé <ArrowDown size={15} /></a>
      </motion.div>
      <motion.div
        className="hero-footnote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.74 }}
      >
        <span className="hero-footnote-line" /> CURIOUS BY DEFAULT. CAREFUL BY DESIGN.
      </motion.div>
    </>
  );
}
