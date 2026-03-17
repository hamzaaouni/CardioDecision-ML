"use client";

import { motion } from "framer-motion";
import { Heart, Activity, Users, Target } from "lucide-react";

export default function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 lg:gap-12"
    >
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/25"
          >
            <Heart className="text-white" size={24} />
          </motion.div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">
              Cardio
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-indigo-400/70 uppercase tracking-widest mt-0.5">
              <Activity size={11} />
              <span>Decision Support System</span>
            </div>
          </div>
        </div>

        <p className="font-sans text-sm sm:text-base lg:text-lg text-white/50 max-w-xl leading-relaxed">
          Système intelligent d&apos;aide au diagnostic cardiovasculaire.{" "}
          <span className="text-white/80 font-medium">Analyse prédictive</span>{" "}
          basée sur 70k dossiers cliniques pour une précision clinique accrue.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.07] rounded-full text-xs text-white/60">
            <Users size={13} className="text-indigo-400" />
            <span>Encadrant : <span className="text-indigo-400 font-semibold">Pr. JILALI ANTARI</span></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.07] rounded-full text-xs text-white/60">
            <Target size={13} className="text-emerald-400" />
            <span>PFE 2026 — Hamza Aouni</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 bg-white/[0.02] border border-white/[0.07] rounded-xl p-4 sm:p-5 w-full lg:w-auto">
        <div className="text-right flex-1 lg:flex-none">
          <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-1">Status</div>
          <div className="text-base font-display font-bold text-white tracking-tight">OPÉRATIONNEL</div>
          <div className="text-[9px] font-mono text-emerald-400/50 mt-0.5">LATENCE: 12ms</div>
        </div>
        <div className="w-px h-10 bg-white/[0.07]" />
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute inset-0 opacity-20" />
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]" />
        </div>
      </div>
    </motion.header>
  );
}
