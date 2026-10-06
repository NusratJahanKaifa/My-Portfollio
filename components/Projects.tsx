"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Layers,
  Terminal,
  Database,
  Calculator,
  UtensilsCrossed,
  CheckSquare,
  Lock,
  Film,
  Wallet,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { PROJECTS, Project } from "@/lib/data";

// Custom graphical placeholder previews for each project
function ProjectPreviewImage({ id }: { id: string }) {
  switch (id) {
    case "Blog Website":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-cyan-400">
            <Lock className="w-5 h-5" />
            <span className="text-[10px] font-mono uppercase tracking-wider bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
              LocalStorage Auth
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="h-3 w-3/4 bg-slate-800 rounded animate-pulse" />
            <div className="h-3 w-1/2 bg-cyan-900/50 rounded" />
            <div className="p-2 rounded bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-300">New Post Created</span>
              <span className="text-[9px] font-mono text-cyan-400">✓ Saved</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 flex items-center justify-between">
            <span>Session: Active</span>
            <span>Client State</span>
          </div>
        </div>
      );

    case "food-recipe":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-amber-400">
            <UtensilsCrossed className="w-5 h-5" />
            <span className="text-[10px] font-mono uppercase tracking-wider bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/40">
              Interactive Menu
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="flex gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-900/40 text-amber-300">🍝 Pasta</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">🥗 Salad</span>
            </div>
            <div className="h-3 w-4/5 bg-slate-800 rounded" />
            <div className="text-[11px] font-mono text-slate-300">
              Ingredients: 6 items listed
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500">
            Recipe Directory & Instructions
          </div>
        </div>
      );

    case "task-manager":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-400">
            <CheckSquare className="w-5 h-5" />
            <span className="text-[10px] font-mono uppercase tracking-wider bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              Productivity
            </span>
          </div>
          <div className="space-y-1.5 my-auto">
            <div className="flex items-center gap-2 p-1.5 rounded bg-slate-800/60 border border-slate-700/40 text-xs">
              <span className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-400 text-emerald-400 flex items-center justify-center text-[9px]">✓</span>
              <span className="text-slate-300 text-[11px] line-through">Complete coursework</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded bg-slate-800/40 border border-slate-700/30 text-xs">
              <span className="w-3 h-3 rounded border border-slate-600" />
              <span className="text-slate-300 text-[11px]">Deploy Next.js build</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-emerald-400/80">
            Status: 2 of 3 Tasks Done
          </div>
        </div>
      );

    case "calculator":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-indigo-400">
            <Calculator className="w-5 h-5" />
            <span className="text-[10px] font-mono uppercase tracking-wider bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/40">
              Arithmetic Engine
            </span>
          </div>
          <div className="my-auto p-2.5 rounded bg-slate-900/90 border border-slate-700/60 font-mono text-right">
            <div className="text-[10px] text-slate-500">128 × 3.14159</div>
            <div className="text-base font-bold text-cyan-300">402.12352</div>
          </div>
          <div className="grid grid-cols-4 gap-1.5 opacity-60">
            <span className="text-center text-[10px] font-mono bg-slate-800 py-0.5 rounded">7</span>
            <span className="text-center text-[10px] font-mono bg-slate-800 py-0.5 rounded">8</span>
            <span className="text-center text-[10px] font-mono bg-slate-800 py-0.5 rounded">9</span>
            <span className="text-center text-[10px] font-mono bg-cyan-900 py-0.5 rounded text-cyan-300">÷</span>
          </div>
        </div>
      );

    case "movie-collection-api":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40 p-5 flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-purple-400">
            <Film className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-wider bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
              FastAPI + SQLite
            </span>
          </div>
          <div className="my-auto space-y-1.5 text-[11px]">
            <div className="text-emerald-400">GET /api/v1/movies</div>
            <div className="p-1.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] text-slate-300">
              {`{ "title": "Inception", "year": 2010 }`}
            </div>
            <div className="text-blue-400 text-[10px]">Pydantic schema validated ✓</div>
          </div>
          <div className="text-[10px] text-slate-500 flex justify-between">
            <span>Swagger UI</span>
            <span>200 OK</span>
          </div>
        </div>
      );

    case "expense-tracker-api":
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 p-5 flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-teal-400">
            <Wallet className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-wider bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/40">
              PostgreSQL + JWT
            </span>
          </div>
          <div className="my-auto space-y-1.5 text-[11px]">
            <div className="text-cyan-300 text-[10px]">Bearer eyJhbGciOi...</div>
            <div className="p-1.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] text-slate-300">
              <div>Income: $4,500.00</div>
              <div className="text-rose-400">Expense: -$1,200.00</div>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 flex justify-between">
            <span>SQLAlchemy ORM</span>
            <span>Auth Protected</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-500">
          <Code2 className="w-8 h-8" />
        </div>
      );
  }
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Web" | "API">("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Web") return !project.technologies.includes("FastAPI");
    if (filter === "API") return project.technologies.includes("FastAPI");
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Showcase"
          title="Featured Projects"
          subtitle="Explore practical applications and backend APIs demonstrating my software engineering journey."
        />

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              filter === "All"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            All Projects (6)
          </button>
          <button
            onClick={() => setFilter("Web")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              filter === "Web"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            Web Applications (4)
          </button>
          <button
            onClick={() => setFilter("API")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              filter === "API"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            Backend & APIs (2)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#111827] to-[#0c1220] border border-slate-800/80 hover:border-cyan-500/40 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <div>
                {/* Visual Image / Interactive Preview Container with Zoom Effect */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-slate-800/80 bg-slate-950">
                  <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105">
                    <ProjectPreviewImage id={project.id} />
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wide bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-6">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Feature Highlights */}
                  <ul className="space-y-1 mb-4 text-[11px] text-slate-400">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/60 mt-2 flex items-center gap-3">
                {/* GitHub Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* Live Demo Button (if available) */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span
                    title="Live demo placeholder / API documentation"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono text-slate-500 bg-slate-900/60 border border-slate-800 cursor-not-allowed"
                  >
                    <span>API Service</span>
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
