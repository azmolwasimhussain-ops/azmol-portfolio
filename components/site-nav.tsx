"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav-shell mx-auto w-full" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Azmol Wasim Hussain — home" onClick={() => setMenuOpen(false)}>
          <span className="brand-monogram">A<span>W</span></span>
          <span className="brand-wordmark">Azmol Wasim<br />Hussain</span>
        </a>

        <div className="desktop-nav-links">
          {links.map((link) => (
            <a
              className={`nav-link${active === link.id ? " is-active" : ""}`}
              href={link.href}
              key={link.id}
              onClick={() => setActive(link.id)}
            >
              {link.label}
              {active === link.id && <motion.span className="nav-active-line" layoutId="nav-active-line" />}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <span className="availability"><i aria-hidden="true" /> Open to opportunities</span>
          <a className="nav-talk" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {links.map((link, index) => (
              <a href={link.href} key={link.id} onClick={() => { setActive(link.id); setMenuOpen(false); }}>
                <span>0{index + 1}</span>{link.label}<ArrowUpRight size={16} />
              </a>
            ))}
            <div className="mobile-menu-bottom"><span className="availability"><i aria-hidden="true" /> Open to opportunities</span><a href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={14} /></a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
