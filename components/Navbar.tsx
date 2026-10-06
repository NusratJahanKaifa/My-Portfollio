"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  GithubIcon,
  LinkedinIcon,
  HackerrankIcon,
  CodeforcesIcon,
  CodechefIcon,
  FacebookIcon,
} from "@/components/SocialIcons";

import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll handling + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      NAV_ITEMS.forEach((item) => {
        const sectionId = item.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on Escape + prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navigation click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(targetId);
    }
  };

  // Social links
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/NusratJahanKaifa",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nusrat-jahan-kaifa-4a10723b1/",
      icon: LinkedinIcon,
    },
    {
      name: "HackerRank",
      href: "https://www.hackerrank.com/profile/nusratkaifa15",
      icon: HackerrankIcon,
    },
    {
      name: "Codeforces",
      href: "https://codeforces.com/profile/nusratkaifa15",
      icon: CodeforcesIcon,
    },
    {
      name: "CodeChef",
      href: "https://www.codechef.com/users/able_otters_10",
      icon: CodechefIcon,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61594045808219",
      icon: FacebookIcon,
    },
    {
      name: "Email",
      href: "mailto:nusratkaifa15@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2.5 text-slate-100 focus:outline-none shrink-0"
          >
            <Image
              src="/logo.jpg"
              alt="Nusrat Jahan Kaifa"
              width={42}
              height={42}
              priority
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-cyan-500/40 group-hover:border-cyan-400 transition-colors"
            />

            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-lg tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                Nusrat Jahan Kaifa
              </span>

              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                CSE Student
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) =>
                    handleNavClick(e, item.href)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-2">

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 bg-slate-900/50 border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Resume */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />

              <span>Resume</span>

              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() =>
                setMobileMenuOpen((prev) => !prev)
              }
              type="button"
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="lg:hidden border-b border-slate-800 bg-[#090d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5 pt-2">

              {/* Navigation Links */}
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive =
                  activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href)
                    }
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Mobile Social Links */}
              <div className="pt-4 mt-2 border-t border-slate-800/80">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3">
                  Connect with me
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={
                          social.href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          social.href.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        aria-label={social.name}
                        className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/70 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4" />

                        <span className="text-[9px]">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Resume */}
              <div className="pt-3 mt-2">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-cyan-300 bg-cyan-600/20 border border-cyan-500/40 hover:bg-cyan-600/30 transition-colors"
                >
                  <FileText className="w-4 h-4" />

                  <span>Download Resume</span>

                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}