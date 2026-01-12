"use client";

import { useEffect, useRef } from "react";
import CloudBubble from "@/components/CloudBubble";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center pb-24">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          playsInline
          muted
          loop
          autoPlay
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {/* Long cinematic fade to soften video before transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent via-black/25 to-black/45" />
      </div>

      {/* Soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(circle at center, var(--alpine-glacier) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-auto mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow sm:text-7xl">
          Rachel Kennedy
        </h1>

        <CloudBubble className="mt-6 w-full max-w-xl">
          <div className="space-y-2">
            <p className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent">
              Frontend Developer • React • Accessibility-Focused
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              I build fast, accessible, and visually thoughtful web experiences
              from my home in Lake Louise, Alberta. My work blends clean
              engineering with intentional, nature-inspired design.
            </p>
          </div>
        </CloudBubble>

        <CloudBubble className="mt-6 w-full max-w-lg">
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>

            <Button
              href="mailto:rachelkennedydev@gmail.com"
              variant="light"
              className="bg-white/70 hover:bg-white"
            >
              Contact Me
            </Button>

            <Button
              href="/Rachel-Kennedy-Resume.pdf"
              variant="dark"
              className="hover:bg-gray-700"
            >
              View Resume (PDF)
            </Button>
          </div>

          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-800">
            <a
              href="https://github.com/rachelkennedy09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rachelkennedy09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              LinkedIn
            </a>
            <a href="mailto:rachelkennedydev@live.ca" className="hover:text-gray-600">
              Email
            </a>
          </div>
        </CloudBubble>
      </div>

      {/* Atmospheric teal blend into About section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55vh]"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(143,189,181,0) 0%,
              rgba(143,189,181,0.12) 40%,
              rgba(143,189,181,0.35) 70%,
              rgba(143,189,181,0.55) 100%
            )
          `,
        }}
      />
    </section>
  );
}
