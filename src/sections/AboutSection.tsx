"use client";

import Image from "next/image";
import SkillBubble from "@/components/SkillBubble";

const strengths = [
  {
    title: "Frontend",
    items: [
      "React & Next.js interfaces",
      "Accessible UI patterns",
      "Responsive layouts across devices",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js & Express servers",
      "REST API design",
      "Session-based auth & protected routes",
    ],
  },
  {
    title: "Data",
    items: [
      "MongoDB & Mongoose schemas",
      "CRUD workflows",
      "Data validation & relationships",
    ],
  },
  {
    title: "Quality",
    items: [
      "Readable, maintainable code",
      "Testing mindset",
      "Git-based workflow",
    ],
  },
];

const highlightBadges = [
  "Full-Stack Web Apps",
  "Auth + Protected Routes",
  "REST APIs",
  "Server-Rendered (EJS)",
  "MongoDB / Mongoose",
  "Deployments (Render / Netlify)",
  "React Native (Expo)",
];

const workflowBadges = [
  "Validation + Error Handling",
  "Testing Mindset",
  "GitHub Workflow",
  "Postman",
  "Accessible UI",
  "Responsive Layouts",
  "Offline-First (Local Storage)",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={[
            "relative isolate overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 px-8 py-14",
            "transition-all duration-300",
            "hover:-translate-y-1 hover:shadow-2xl",
          ].join(" ")}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center saturate-110 contrast-105"
            style={{ backgroundImage: "url('/about-bg.png')" }}
          />
          <div className="absolute inset-0 z-0 bg-[#355b5d]/85 backdrop-blur-[2px]" />

          {/* Soft top highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white/15 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-20">
            <div className="mb-6 flex justify-center">
              <Image
                src="/logo.png"
                alt="Rachel Kennedy logo"
                width={180}
                height={180}
                className="h-auto w-36 sm:w-44"
              />
            </div>
            <h2 className="text-center text-4xl font-semibold tracking-tight text-[var(--paper)]">
              About Me
            </h2>

            <div className="mt-12 flex flex-col items-center gap-10 text-center">
              {/* Text + Skills */}
              <div className="flex w-full max-w-3xl flex-col gap-10">
                <p className="text-lg leading-relaxed text-[var(--paper)]">
                  Living in the mountains has shaped the way I build software:
                  calm systems, thoughtful details, and experiences that feel
                  intuitive. I’m a full-stack developer who builds products
                  end-to-end—from accessible, responsive UIs to Node/Express
                  backends, REST APIs, authentication, and MongoDB data modeling.
                  I care about clean architecture, readable code, and shipping
                  features that work in the real world. Whether it’s a
                  server-rendered EJS app or a modern React/Next.js front end, I
                  focus on performance, usability, and maintainable engineering.
                </p>

                {/* Credential (Credly) */}
                <a
                  href="https://www.credly.com/badges/6413caf3-21c0-41f4-854e-032a633e1e9e/public_url"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex self-center"
                >
                  <div className="flex flex-col items-center gap-4 rounded-2xl bg-black/15 ring-1 ring-white/10 p-5 text-center hover:bg-black/20 transition">
                    <div className="flex flex-col items-center gap-3">
                      <Image
                        src="/ubc-badge.png"
                        alt="Certified Software Developer – UBC Extended Learning"
                        width={84}
                        height={84}
                        className="opacity-95"
                      />
                      <div className="leading-snug">
                        <p className="text-sm font-semibold text-[var(--paper)]">
                          Certified Software Developer
                        </p>
                        <p className="text-xs text-white/70">
                          UBC Extended Learning
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs text-white/80">
                        Credential
                      </span>
                    </div>
                  </div>
                </a>

                {/* Strengths */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {strengths.map((block) => (
                    <SkillBubble
                      key={block.title}
                      title={block.title}
                      items={block.items}
                    />
                  ))}
                </div>

                {/* Badges */}
                <div className="space-y-5">
                  <div className="rounded-2xl bg-black/15 ring-1 ring-white/10 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Highlights
                      </p>
                      <span className="text-xs text-white/60">Web + Mobile</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {highlightBadges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md bg-white/10 ring-1 ring-white/20 backdrop-blur hover:bg-white/15 transition"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">
                      Workflow & Quality
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {workflowBadges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full px-3 py-1.5 text-xs text-white/85 bg-black/10 ring-1 ring-white/10"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END CONTENT */}
        </div>
      </div>
    </section>
  );
}
