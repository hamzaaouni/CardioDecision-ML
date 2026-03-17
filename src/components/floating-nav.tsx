"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/lib/data";

export default function FloatingNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop — right side dots */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-2.5">
        {navSections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }
            className={`group flex items-center gap-2.5 transition-all duration-300 ${
              active === id ? "" : "opacity-50 hover:opacity-90"
            }`}
            aria-label={`Navigate to section ${label}`}
          >
            <span
              className={`text-[8px] font-mono tracking-wider transition-all duration-300 ${
                active === id
                  ? "text-indigo-400 opacity-100 translate-x-0"
                  : "text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === id
                  ? "w-2.5 h-2.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                  : "w-1.5 h-1.5 bg-white/20 group-hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Mobile — bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 xl:hidden bg-[#06070a]/90 backdrop-blur-xl border-t border-white/[0.06] safe-bottom">
        <div className="flex items-center justify-around px-2 py-2">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-md transition-all ${
                active === id ? "text-indigo-400" : "text-white/25"
              }`}
              aria-label={`Navigate to section ${label}`}
            >
              <span
                className={`block rounded-full transition-all ${
                  active === id
                    ? "w-1.5 h-1.5 bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]"
                    : "w-1 h-1 bg-white/15"
                }`}
              />
              <span className="text-[7px] font-mono font-bold">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
