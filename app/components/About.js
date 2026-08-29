"use client";

const stats = [
  {
    value: "3+",
    label: "Years of Coding Experience",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    value: "20+",
    label: "Completed Projects",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const highlights = [
  "Clean, maintainable, and scalable code",
  "Modern UI/UX with accessibility in mind",
  "Full-stack solutions from database to deployment",
  "Continuous learning and staying ahead of tech trends",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-32"
    >
      {/* Subtle gradient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Who I Am
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Bio card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30 backdrop-blur-sm transition hover:border-cyan-400/20 sm:p-10">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Dedicated to building impactful digital experiences.
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              I am a passionate software developer who believes that great software
              is born from clean code, thoughtful architecture, and a deep
              understanding of users. I specialize in crafting modern UI/UX designs
              that feel intuitive and responsive, while building robust backend
              systems that scale with confidence.
            </p>
            <p className="mb-8 leading-relaxed text-slate-400">
              My approach combines creativity with discipline: I write code that is
              easy to read, test, and maintain, and I never stop learning new tools,
              patterns, and technologies that push the quality of my work higher.
            </p>

            {/* Highlight list */}
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05] sm:p-8"
              >
                {/* Top gradient line */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-400 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
