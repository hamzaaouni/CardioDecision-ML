import { Heart } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="pt-16 pb-8 flex flex-col items-center gap-4 border-t border-white/[0.04]">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center">
          <Heart className="text-white" size={10} />
        </div>
        <span className="font-display font-bold text-white/80 text-sm tracking-tight">CardioAI</span>
      </div>
      <div className="text-center space-y-1">
        <p className="font-mono text-[9px] text-white/15 uppercase tracking-[0.3em]">
          PROJET DE FIN D&apos;ÉTUDES — 2026 — HAMZA AOUNI
        </p>
        <p className="font-mono text-[8px] text-indigo-400/30 uppercase tracking-widest">
          Encadrant : Pr. JILALI ANTARI
        </p>
      </div>
    </footer>
  );
}
