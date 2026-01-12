"use client";

import Image from "next/image";
import SkillBubble from "@/components/SkillBubble";

const strengths = [
  { title: "Frontend", items: ["React / Next.js", "Accessible UI", "Responsive Layouts"] },
  { title: "Backend", items: ["Node.js / Express", "REST APIs", "Auth + Protected Routes"] },
  { title: "Data", items: ["MongoDB / Mongoose", "MySQL basics", "Data modeling"] },
  { title: "Quality", items: ["Testing mindset", "Readable code", "Git + PR workflow"] },
];

const tools = [
  "Tailwind CSS",
  "Postman",
  "React Testing Library",
  "Netlify / Deployments",
  "GitHub",
  "Expo (React Native)",
];

export default function AboutSection() {
  return (
    // ✅ NO background here — let the parent gradient show through
    <section id="about" className="relative z-10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={[
            "relative isolate rounded-3xl bg-[#355b5d] shadow-xl ring-1 ring-black/5 px-8 py-14",
            "transition-all duration-300",
            "hover:-translate-y-1 hover:shadow-2xl",
          ].join(" ")}
        >
          {/* Soft top highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent" />

          <h2 className="text-center text-4xl font-semibold tracking-tight text-[var(--paper)]">
            About Me
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-[1fr_2fr] items-start">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Rachel Kennedy logo"
                width={260}
                height={260}
                className="mix-blend-multiply"
                priority={false}
              />
            </div>

            {/* Text + Skills */}
            <div className="flex flex-col gap-10">
              <p className="text-lg leading-relaxed text-[var(--paper)]">
                Living in the mountains has shaped the way I build software. My creativity is
                rooted in the place I live—surrounded by quiet trails, shifting light, and the
                kind of details you only notice when you slow down. I’ve always seen parallels
                between the natural world and the systems we build in code: structure, flow,
                resilience, and harmony. That perspective shapes the way I approach development,
                bringing balance and intentionality into my work and creating digital experiences
                that feel grounded, intuitive, and alive.
              </p>

              {/* Strengths grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {strengths.map((block) => (
                  <SkillBubble key={block.title} title={block.title} items={block.items} />
                ))}
              </div>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-3">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/90 px-4 py-2 text-sm text-[var(--ink)]/80 shadow-sm ring-1 ring-black/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
