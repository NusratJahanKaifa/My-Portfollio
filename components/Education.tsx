"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION_DATA } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal engineering education and ongoing technical studies."
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline Wrapper */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
            {EDUCATION_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Node Indicator with pulse effect */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
                  </div>
                </div>

                {/* Main Card */}
                <div className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#0c1220] border border-slate-800/90 p-6 sm:p-8 shadow-xl hover:border-cyan-500/30 transition-colors">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80 mb-5">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item.status}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                        {item.degree}
                      </h3>
                      <p className="text-base font-semibold text-cyan-400 mt-0.5">
                        {item.field}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm sm:text-base mb-4">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="pt-5 border-t border-slate-800/80">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Curriculum & Competencies</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
