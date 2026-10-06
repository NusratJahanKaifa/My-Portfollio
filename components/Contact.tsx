"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  MessageSquare,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, HackerrankIcon, FacebookIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { PERSONAL_INFO } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    // Simulate UI submission without faking network backend
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Contact Me"
          subtitle="Have a question, feedback, or opportunity? Feel free to reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Card */}
            <div className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#0c1220] border border-slate-800 p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-bold text-slate-100 mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                I am open to discussions about web development, engineering coursework, collaborative projects, or tech discussions.
              </p>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
                <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                  <span>Direct Email</span>
                  <span className="text-[10px] text-cyan-400">Preferred</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-cyan-300 hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy email to clipboard"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-400 font-mono mt-1.5 animate-fadeIn">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location / Status Info */}
              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono pb-6 border-b border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Bangladesh • Available for Remote Inquiries</span>
              </div>

              {/* Social Channels List */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Online Profiles
                </h4>
                <div className="space-y-2.5">
                  {/* GitHub */}
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* HackerRank */}
                  <a
                    href={PERSONAL_INFO.socials.hackerrank}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <HackerrankIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">HackerRank</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Facebook */}
                  <a
                    href={PERSONAL_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <FacebookIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Facebook</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#0c1220] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-100 mb-1">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill in the details below to initiate contact.
                </p>
              </div>

              {/* Ready for future integration banner */}
              <div className="mb-6 p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
                <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Form UI Ready:</strong> This contact form is prepared for future backend/email service integration (such as Resend, EmailJS, or Next.js server actions).
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-100">
                    Message Preview Recorded!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message preview was submitted. Connect with the email service to start delivering emails directly to your inbox.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Rahman"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Write your message or inquiry here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all duration-200 shadow-md shadow-cyan-500/20 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
