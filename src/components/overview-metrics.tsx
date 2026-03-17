"use client";

import { motion } from "framer-motion";
import { Database, Target, Users, AlertCircle } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";
import { overviewMetrics } from "@/lib/data";

const iconMap = {
  database: <Database size={18} className="text-indigo-400" />,
  target: <Target size={18} className="text-emerald-400" />,
  users: <Users size={18} className="text-sky-400" />,
  alert: <AlertCircle size={18} className="text-rose-400" />,
};

const accentMap: Record<string, string> = {
  database: "group-hover:text-indigo-400",
  target: "group-hover:text-emerald-400",
  users: "group-hover:text-sky-400",
  alert: "group-hover:text-rose-400",
};

export default function OverviewMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {overviewMetrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="glass-card p-5 sm:p-6 group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-white/[0.15] transition-colors duration-300">
              {iconMap[m.iconType]}
            </div>
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">live</span>
          </div>
          <div className="text-[10px] font-bold text-white/25 uppercase tracking-[0.15em] mb-1.5">{m.label}</div>
          <div className={`text-3xl sm:text-4xl font-display font-bold text-white tracking-tighter transition-colors duration-500 ${accentMap[m.iconType]}`}>
            <AnimatedCounter value={m.value} />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/20 mt-3">
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
            {m.sub}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
