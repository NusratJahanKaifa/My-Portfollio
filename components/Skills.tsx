"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Globe,
  Palette,
  Terminal,
  Zap,
  Network,
  Database,
  HardDrive,
  Server,
  Cpu,
  Boxes,
  Coffee,
  GitBranch,
  Laptop,
  Wrench,
  FileCode,
  Atom,
  Binary,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { SKILLS, SkillItem } from "@/lib/data";

// Helper map to render appropriate icon per skill
const iconMap: Record<string, React.ElementType> = {
  Html5: FileCode,
  FileCode: FileCode,
  Code2: Code,
  Atom: Atom,
  Globe: Globe,
  Palette: Palette,
  Binary: Binary,
  Zap: Zap,
  Network: Network,
  Database: Database,
  HardDrive: HardDrive,
  Server: Server,
  Terminal: Terminal,
  Cpu: Cpu,
  Boxes: Boxes,
  Coffee: Coffee,
  GitBranch: GitBranch,
  Github: GithubIcon,
  Laptop: Laptop,
  Wrench: Wrench,
};

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Programming",
  "Tools",
] as const;

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of programming languages, frameworks, databases, and development tools."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/10"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Code;
              return (
                <motion.div
                  key={`${skill.name}-${skill.category}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-xl bg-gradient-to-b from-[#111827] to-[#0c1220] border border-slate-800/80 hover:border-cyan-500/40 p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-md hover:shadow-cyan-500/5 transition-colors"
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/0 group-hover:bg-cyan-500/[0.03] transition-colors pointer-events-none" />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-800/70 group-hover:bg-cyan-500/15 border border-slate-700/60 group-hover:border-cyan-500/40 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all duration-200 mb-3 shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>

                  {/* Category Pill */}
                  <span className="mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide text-slate-400 group-hover:text-cyan-300 bg-slate-900/80 border border-slate-800 group-hover:border-cyan-800/40 transition-colors">
                    {skill.category}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Skill Summary Categories Overview Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2.5 text-cyan-400 mb-2">
              <Globe className="w-4 h-4" />
              <h4 className="text-sm font-semibold text-slate-200">
                Frontend & UI Engineering
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Crafting responsive, clean user interfaces with HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2.5 text-emerald-400 mb-2">
              <Server className="w-4 h-4" />
              <h4 className="text-sm font-semibold text-slate-200">
                Backend & API Architecture
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Developing REST APIs using Python & FastAPI with relational databases like MySQL, SQLite, and PostgreSQL.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2.5 text-blue-400 mb-2">
              <Terminal className="w-4 h-4" />
              <h4 className="text-sm font-semibold text-slate-200">
                Programming & Workflow
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strong foundational programming in C, C++, Java, and Python with modern workflows using Git and VS Code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
