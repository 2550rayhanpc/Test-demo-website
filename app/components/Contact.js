"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 px-4 py-24 sm:px-6 lg:px-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition hover:border-cyan-400/20 sm:p-8">
              <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Email</h3>
              <a
                href="mailto:2550rayhan@gmail.com"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                2550rayhan@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition hover:border-cyan-400/20 sm:p-8">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-400/10 p-3 text-indigo-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Location</h3>
              <p className="text-slate-400">Bangladesh / Remote</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="mt-5 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Success message */}
              {isSubmitted && (
                <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-300">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
