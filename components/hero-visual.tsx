"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sparkles, MoveUpRight } from "lucide-react";
import { useRef } from "react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <motion.div
      ref={ref}
      className="hero-portrait-wrap"
      initial={{ opacity: 1, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="hero-portrait-parallax" style={{ y: reduceMotion ? 0 : y }}>
        <div className="hero-orbit hero-orbit--outer" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--inner" aria-hidden="true" />
        <div className="hero-cross hero-cross--top" aria-hidden="true">+</div>
        <div className="hero-cross hero-cross--bottom" aria-hidden="true">+</div>
        <div className="portrait-frame">
          <Image
            src="https://avatars.githubusercontent.com/u/227790079?v=4"
            alt="Portrait of Azmol Wasim Hussain"
            fill
            priority
            sizes="(max-width: 760px) 72vw, 38vw"
            className="portrait-image"
          />
          <div className="portrait-gradient" />
          <div className="portrait-caption"><span>AZMOL WASIM HUSSAIN</span><span>BUILDING WITH INTENTION <MoveUpRight size={12} /></span></div>
        </div>
        <div className="floating-badge floating-badge--top"><span className="badge-mark"><Sparkles size={15} /></span><span><small>EXPLORING</small><strong>AI, made useful</strong></span></div>
        <div className="floating-badge floating-badge--bottom"><i /><span><small>MY TOOLKIT</small><strong>React · TypeScript</strong></span></div>
        <div className="hero-orbit-label">A STUDENT OF<br />THE DIGITAL WORLD</div>
      </motion.div>
    </motion.div>
  );
}
