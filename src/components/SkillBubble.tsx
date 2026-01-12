"use client";

import { useState } from "react";

type SkillBubbleProps = {
  title: string;
  items: string[];
};

export default function SkillBubble({ title, items }: SkillBubbleProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      aria-expanded={open}
      className="
        w-full text-left
        rounded-2xl bg-white/80 p-5 ring-1 ring-black/5
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/40
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[var(--ink)]">{title}</h3>

        <span className="text-xs text-[var(--muted)]">
          {open ? "Hide details" : "View details"}
        </span>
      </div>

      {/* Expandable content */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--ink)]/40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
