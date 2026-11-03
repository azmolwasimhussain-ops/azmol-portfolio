"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Contact", href: "#contact", id: "contact" },
];

type PendingNavigation = { id: string; activationY: number; direction: 1 | -1 };

function getPendingNavigation(id: string): PendingNavigation | null {
  const section = document.getElementById(id);
  if (!section) return null;

  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const scrollPaddingTop = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const destinationY = Math.max(0, sectionTop - scrollPaddingTop);
  if (Math.abs(window.scrollY - destinationY) < 48) return null;

  const direction = destinationY > window.scrollY ? 1 : -1;
  const activationY = direction === 1
    ? sectionTop - window.innerHeight * 0.3
    : sectionTop + section.offsetHeight - window.innerHeight * 0.3;

  return { id, activationY, direction };
}

const socialLinks = [
  { label: "GitHub", href: "https://github.com/azmolwasimhussain-ops", icon: "github" },
  { label: "X", href: "https://x.com/AzmolWasim786", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/azmolwasim007__/", icon: "instagram" },
] as const;

function XBrandMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.682l7.73-8.835L1.255 2.25h6.826l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 3.91H5.117l11.966 15.86Z" />
    </svg>
  );
}

function GithubBrandMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.64-1.24-1.64-1.01-.69.08-.67.08-.67 1.12.08 1.71 1.16 1.71 1.16 1.01 1.73 2.66 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.47-.28-5.07-1.23-5.07-5.48 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.13a10.63 10.63 0 0 1 5.55 0c2.11-1.43 3.04-1.13 3.04-1.13.61 1.53.23 2.66.11 2.94.71.77 1.14 1.76 1.14 2.97 0 4.26-2.61 5.2-5.09 5.48.4.35.75 1.03.75 2.08V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function InstagramBrandMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`} role="group" aria-label="Social profiles">
      {socialLinks.map((link) => (
        <a href={link.href} key={link.label} target="_blank" rel="noreferrer" aria-label={`Visit ${link.label} profile`} title={link.label}>
          {link.icon === "github" ? <GithubBrandMark /> : link.icon === "instagram" ? <InstagramBrandMark /> : <XBrandMark />}
        </a>
      ))}
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingNavigation = useRef<PendingNavigation | null>(null);

  const activateNavigationTarget = useCallback((id: string) => {
    setActive(id);
    pendingNavigation.current = getPendingNavigation(id);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const initialHash = window.location.hash.slice(1);
    const initialNavLink = links.find((link) => link.id === initialHash);
    pendingNavigation.current = null;
    if (initialNavLink) pendingNavigation.current = getPendingNavigation(initialNavLink.id);
    const sections = ["home", ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const pending = pendingNavigation.current;
        if (pending) {
          const hasReachedTarget = pending.direction === 1
            ? window.scrollY >= pending.activationY
            : window.scrollY <= pending.activationY;
          const targetIsInActiveRegion = entries.some((entry) => entry.target.id === pending.id && entry.isIntersecting);
          if (!hasReachedTarget || !targetIsInActiveRegion) {
            setActive(pending.id);
            return;
          }
          pendingNavigation.current = null;
          setActive(pending.id);
          return;
        }
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    const syncPendingTarget = () => {
      const pending = pendingNavigation.current;
      if (!pending) return;
      const hasReachedTarget = pending.direction === 1
        ? window.scrollY >= pending.activationY
        : window.scrollY <= pending.activationY;
      if (hasReachedTarget) setActive(pending.id);
    };

    const cancelPendingTarget = () => {
      pendingNavigation.current = null;
    };

    const cancelPendingTargetOnKey = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        cancelPendingTarget();
      }
    };

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", syncPendingTarget, { passive: true });
    window.addEventListener("wheel", cancelPendingTarget, { passive: true });
    window.addEventListener("touchstart", cancelPendingTarget, { passive: true });
    window.addEventListener("keydown", cancelPendingTargetOnKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncPendingTarget);
      window.removeEventListener("wheel", cancelPendingTarget);
      window.removeEventListener("touchstart", cancelPendingTarget);
      window.removeEventListener("keydown", cancelPendingTargetOnKey);
    };
  }, [activateNavigationTarget, pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav-shell mx-auto w-full" aria-label="Main navigation">
        <a className="brand-mark" href={pathname === "/" ? "#home" : "/#home"} aria-label="Azmol Wasim Hussain — home" onClick={() => setMenuOpen(false)}>
          <span className="brand-monogram">A<span>W</span></span>
          <span className="brand-wordmark">Azmol Wasim<br />Hussain</span>
        </a>

        <div className="desktop-nav-links">
          {links.map((link) => (
            <a
              className={`nav-link${active === link.id ? " is-active" : ""}`}
              href={pathname === "/" ? link.href : `/${link.href}`}
              aria-current={active === link.id ? "location" : undefined}
              key={link.id}
              onClick={() => activateNavigationTarget(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <span className="availability"><i aria-hidden="true" /> Open to opportunities</span>
          <SocialLinks />
          <a className="nav-talk" href={pathname === "/" ? "#contact" : "/#contact"}>Let&apos;s talk <ArrowUpRight size={14} /></a>
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

      <motion.span className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />

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
              <a href={pathname === "/" ? link.href : `/${link.href}`} key={link.id} onClick={() => { activateNavigationTarget(link.id); setMenuOpen(false); }}>
                <span>0{index + 1}</span>{link.label}<ArrowUpRight size={16} />
              </a>
            ))}
            <SocialLinks className="social-links--mobile" />
            <div className="mobile-menu-bottom"><span className="availability"><i aria-hidden="true" /> Open to opportunities</span><a href={pathname === "/" ? "#contact" : "/#contact"} onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={14} /></a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
