"use client";

import Button from "@/components/ui/Button";
import { featuredProject, selectedProjects } from "@/data/projects";

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/5">
      {label}
    </span>
  );
}
export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Featured */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* LEFT — Text */}
        <div>
          <p className="text-sm font-semibold text-slate-700/80">
            Featured Project
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            {featuredProject.title}
          </h2>

          <p className="mt-4 max-w-prose text-sm leading-relaxed text-slate-700/90">
            {featuredProject.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {featuredProject.tech.map((t) => (
              <Pill key={t} label={t} />
            ))}
          </div>
<div className="mt-7 flex flex-wrap gap-3">
  {featuredProject.links.live && (
    <Button href={featuredProject.links.live} variant="primary">
      View Live Site
    </Button>
  )}
  {featuredProject.links.code && (
    <Button href={featuredProject.links.code} variant="dark">
      View Web Code
    </Button>
  )}
  {featuredProject.links.mobile && (
    <Button href={featuredProject.links.mobile} variant="light">
      View Mobile App
    </Button>
  )}
</div>


        </div>

        {/* RIGHT — Screenshot */}
        <div className="relative">
          <img
            src={featuredProject.imageSrc}
            alt={featuredProject.imageAlt}
            className="w-full rounded-xl shadow-lg ring-1 ring-black/5"
          />
        </div>
      </div>

      {/* Selected */}
      <div className="mt-14">
        <h3 className="text-lg font-semibold text-slate-900">Selected Projects</h3>

        <div className="mt-5 grid gap-6">
          {selectedProjects.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl bg-white/70 p-7 ring-1 ring-black/5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-base font-semibold text-slate-900">
                  {p.title}
                </h4>

                {p.links.details && (
                  <a
                    href={p.links.details}
                    className="text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
                  >
                    View project →
                  </a>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Pill key={t} label={t} />
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-700/90">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {(p.links.live || p.links.code) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.live && (
                    <Button href={p.links.live} variant="primary">
                      Live
                    </Button>
                  )}
                  {p.links.code && (
                    <Button href={p.links.code} variant="dark">
                      Code
                    </Button>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
