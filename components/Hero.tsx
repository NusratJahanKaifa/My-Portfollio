"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Download,
  Code2,
  Terminal,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, HackerrankIcon, FacebookIcon } from "./SocialIcons";
import { PERSONAL_INFO } from "@/lib/data";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Subtle floating ambient background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle radial glow top right */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -right-32 w-96 h-96 sm:w-[520px] sm:h-[520px] rounded-full bg-cyan-600/20 blur-[120px]"
        />

        {/* Subtle radial glow bottom left */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-600/15 blur-[130px]"
        />

        {/* Subtle background tech grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-cyan-300 mb-6 shadow-sm backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for projects & learning</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                CSE Student
              </span>
            </motion.div>

            {/* Subtitle / Role Intro */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-slate-400 text-sm sm:text-base font-mono mb-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Hello, World! I am</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            {/* Role Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-5 flex items-center gap-2"
            >
              <span>{PERSONAL_INFO.role}</span>
            </motion.h2>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
            >
              &ldquo;{PERSONAL_INFO.shortBio}&rdquo;
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 mb-9 w-full sm:w-auto"
            >
              {/* View My Projects */}
              <button
                onClick={() => handleScroll("projects")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Contact Me */}
              <button
                onClick={() => handleScroll("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-200 shadow-sm active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>

              {/* Download Resume */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/50 border border-slate-700/60 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 pt-2 border-t border-slate-800/80 w-full sm:w-auto"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* HackerRank */}
              <a
                href={PERSONAL_INFO.socials.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <HackerrankIcon className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Professional Profile Image / Avatar Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Animated subtle glow border around image card */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-blue-500/10 to-indigo-500/30 opacity-70 blur-md"
              />

              {/* Main Profile Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#111827] to-[#0c1220] border border-slate-800/90 p-6 sm:p-7 shadow-2xl overflow-hidden">
                {/* Top card bar with developer terminal dots */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>developer.profile</span>
                  </div>
                </div>

                {/* Profile Avatar Area */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Avatar Frame with animated subtle breathing */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-1 bg-gradient-to-br from-cyan-500/30 via-slate-700/50 to-blue-600/30 mb-5 shadow-inner"
                  >
                    <div className="w-full h-full rounded-2xl bg-slate-900 border border-slate-700/50 overflow-hidden relative group">
                      <Image
                        src="/profile.jpg"
                        alt="Nusrat Jahan Kaifa - Profile Picture"
                        width={208}
                        height={208}
                        priority
                        className="w-full h-full object-cover object-top sm:object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Status badge pill overlay */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full bg-slate-900 border border-emerald-500/50 text-[11px] font-mono text-emerald-400 shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Student Developer</span>
                    </div>
                  </motion.div>

                  {/* Profile info beneath image */}
                  <div className="mt-3">
                    <h3 className="text-lg font-bold text-slate-100">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      {PERSONAL_INFO.role}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        Bangladesh
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Active Learner
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini Code Snippet in profile card footer */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 bg-slate-950/40 rounded-lg p-2.5 text-[11px] font-mono text-slate-400">
                  <div className="text-slate-500">// Specialization focus</div>
                  <div className="text-cyan-300">
                    const focus = [&apos;Software&apos;, &apos;Web&apos;, &apos;FastAPI&apos;];
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
