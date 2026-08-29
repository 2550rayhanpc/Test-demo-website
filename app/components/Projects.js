"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack online store featuring a dynamic shopping cart, secure Stripe payment integration, order management, and an admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "AI Image Generator SaaS",
    description:
      "A sleek SaaS application that transforms text prompts into stunning AI-generated artwork using OpenAI's API, with user galleries and credit systems.",
    image: "/projects/ai-image.jpg",
    tags: ["React", "Node.js", "OpenAI API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description:
      "A Kanban-style productivity tool with drag-and-drop task organization, real-time updates, team collaboration, and analytics.",
    image: "/projects/task-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-900 px-4 py-24 sm:px-6 lg:px-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Featured Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A selection of real-world applications I&apos;ve built, focusing on
            performance, scalability, and modern user experience.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
            >
              {/* Image placeholder */}
              <div className="relative aspect-video overflow-hidden bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/40"
                  >
                    Live Demo
                    <svg
                      className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                  >
                    GitHub Code
                    <svg
                      className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.28-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
