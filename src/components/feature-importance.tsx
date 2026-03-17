"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { importanceData } from "@/lib/data";

const tierColors: Record<string, string> = {
  high: "#6366f1",
  medium: "#10b981",
  low: "#f59e0b",
  minimal: "#3f3f46",
};

const tierLabels: Record<string, string> = {
  high: "Forte",
  medium: "Moyenne",
  low: "Faible",
  minimal: "Minimale",
};

function ImportanceTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const tier = item.payload.tier;
  return (
    <div className="bg-[#0c0d10] border border-white/10 rounded-lg px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      <p className="text-xs font-semibold text-white mb-1">{item.payload.name}</p>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tierColors[tier] }} />
        <span className="text-[11px] text-white/60">Importance: <span className="text-white font-bold">{item.value}%</span></span>
      </div>
      <p className="text-[9px] text-white/30 mt-1 uppercase tracking-wider">{tierLabels[tier]}</p>
    </div>
  );
}

export default function FeatureImportance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="chart-card p-4 sm:p-6 h-[400px] sm:h-[500px] lg:h-[580px]"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-3">
          {Object.entries(tierColors).map(([key, color]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[9px] text-white/30 font-mono uppercase">{tierLabels[key]}</span>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart layout="vertical" data={importanceData} barCategoryGap="18%">
          <defs>
            {Object.entries(tierColors).map(([key, color]) => (
              <linearGradient key={key} id={`grad-${key}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={color} stopOpacity={0.9} />
                <stop offset="100%" stopColor={color} stopOpacity={0.5} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.03)" horizontal={false} strokeDasharray="none" />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "var(--font-mono)" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={75}
          />
          <Tooltip content={<ImportanceTooltip />} cursor={false} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={20}>
            {importanceData.map((entry, i) => (
              <Cell key={i} fill={`url(#grad-${entry.tier})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
