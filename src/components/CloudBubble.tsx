import React from "react";

type CloudBubbleProps = {
  className?: string;
  children: React.ReactNode;
};

export default function CloudBubble({ className = "", children }: CloudBubbleProps) {
  return (
    <div
      className={[
        "relative block rounded-[2rem] px-5 py-3",
        "bg-white/35 backdrop-blur-md ring-1 ring-white/40",
        "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
       
        "isolate",
        className,
      ].join(" ")}
    >
      {/* little “cloud” highlights */}
      <span className="pointer-events-none absolute -top-2 -left-3 h-6 w-10 rounded-full bg-white/40 blur-md" />
      <span className="pointer-events-none absolute -bottom-3 -right-2 h-7 w-12 rounded-full bg-white/30 blur-lg" />
      <span className="pointer-events-none absolute -top-4 right-6 h-5 w-8 rounded-full bg-white/30 blur-md" />

      <div className="relative">{children}</div>
    </div>
  );
}
