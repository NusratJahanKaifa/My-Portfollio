"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Layers,
  Cpu,
  Compass,
  CheckCircle2,
  Terminal,
  BookOpen,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PERSONAL_INFO } from "@/lib/data";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Path",
      desc: "Diploma in Engineering in Computer Science & Engineering at Gausul Azam Maizbhandari Polytechnic Institute.",
    },
    {
      icon: Layers,
      title: "Core Technical Interests",
      desc: "Focused on software development, web development, backend API architecture, and AI/ML.",
    },
    {
      icon: Cpu,
      title: "Practical Mindset",
      desc: "Passionate about turning concepts into working software through hands-on coding and projects.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      desc: "Dedicated to learning modern tools, frameworks, and engineering best practices daily.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Background & Passion"
          subtitle="A glimpse into my engineering journey, interests, and development philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main About Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#111827] to-[#0c1220] border border-slate-800 p-6 sm:p-8 shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 pb-5 border-b border-slate-800/80 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    Who I Am
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Computer Science & Engineering Student
                  </p>
                </div>
              </div>

              {/* Exact user requirement texts */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  I am a{" "}
                  <span className="text-cyan-300 font-medium">
                    Diploma in Engineering student in Computer Science & Engineering
                  </span>
                  .
                </p>

                <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  I am interested in{" "}
                  <span className="text-cyan-300 font-medium">
                    software development, web development, backend development and AI/ML
                  </span>
                  .
                </p>

                <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  I enjoy{" "}
                  <span className="text-cyan-300 font-medium">
                    learning new technologies and building practical projects
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Bottom summary bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Status
                </div>
                <div className="text-sm font-semibold text-slate-100 mt-1">
                  Currently Studying
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Major
                </div>
                <div className="text-sm font-semibold text-cyan-400 mt-1">
                  CSE Diploma
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Institution
                </div>
                <div className="text-xs font-medium text-slate-200 mt-1 line-clamp-2">
                  Gausul Azam Maizbhandari Polytechnic Institute
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 p-5 transition-all duration-200 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
