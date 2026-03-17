"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import {
  classBalanceData,
  ageDistributionData,
  clinicalData,
  lifestyleData,
} from "@/lib/data";

function ChartTooltip({ active, payload, label, suffix }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0c0d10] border border-white/10 rounded-lg px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] min-w-[120px]">
      {label && (
        <p className="text-[10px] font-mono text-white/40 mb-1.5 uppercase tracking-wider">{label}</p>
      )}
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2 py-0.5">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: entry.color || entry.payload?.fill || "#6366f1" }}
          />
          <span className="text-[11px] text-white/50">{entry.name}:</span>
          <span className="text-[11px] font-semibold text-white ml-auto tabular-nums">
            {typeof entry.value === "number" ? entry.value.toLocaleString() : entry.value}
            {suffix || ""}
          </span>
        </div>
      ))}
    </div>
  );
}

function DonutCenterLabel({ viewBox }: any) {
  if (!viewBox) return null;
  const { cx, cy } = viewBox;
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central">
      <tspan x={cx} dy="-6" fill="white" fontSize="22" fontWeight="700" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        70,000
      </tspan>
      <tspan x={cx} dy="22" fill="rgba(255,255,255,0.35)" fontSize="10">
        patients
      </tspan>
    </text>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function DistributionCharts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
      {/* Class Balance Donut */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="lg:col-span-4 chart-card p-4 sm:p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xs font-bold text-white/70 uppercase tracking-wider">
            Équilibre des classes
          </h3>
          <span className="text-[9px] font-mono text-white/20 bg-white/5 px-2 py-0.5 rounded">50/50</span>
        </div>
        <div className="h-[250px] sm:h-[280px] flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={classBalanceData}
                cx="50%"
                cy="45%"
                innerRadius={isMobile ? 55 : 72}
                outerRadius={isMobile ? 80 : 100}
                dataKey="value"
                strokeWidth={2}
                stroke="#06070a"
                label={DonutCenterLabel}
                labelLine={false}
              >
                {classBalanceData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                iconSize={6}
                formatter={(value: string) => (
                  <span className="text-white/40 text-[11px] ml-1">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Age Distribution */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="lg:col-span-8 chart-card p-4 sm:p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xs font-bold text-white/70 uppercase tracking-wider">
            Distribution par âge
          </h3>
          <span className="text-[9px] font-mono text-white/20 bg-white/5 px-2 py-0.5 rounded">pic: 50-55</span>
        </div>
        <div className="h-[220px] sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageDistributionData} barCategoryGap="20%">
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} strokeDasharray="none" />
              <XAxis
                dataKey="range"
                tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
                dy={8}
              />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
                dx={-4}
                tickFormatter={(v: number) => (v >= 1000 ? `${v / 1000}k` : String(v))}
              />
              <Tooltip
                content={<ChartTooltip />}
                cursor={{ fill: "rgba(99, 102, 241, 0.06)", radius: 4 }}
              />
              <Bar dataKey="patients" name="Patients" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Clinical Factors */}
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="lg:col-span-7 chart-card p-4 sm:p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xs font-bold text-white/70 uppercase tracking-wider">
            Facteurs cliniques
          </h3>
          <span className="text-[9px] font-mono text-white/20 bg-white/5 px-2 py-0.5 rounded">empilé</span>
        </div>
        <div className="h-[220px] sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={clinicalData} barCategoryGap="35%">
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} strokeDasharray="none" />
              <XAxis
                dataKey="name"
                tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
                dy={8}
              />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => (v >= 1000 ? `${v / 1000}k` : String(v))}
              />
              <Tooltip
                content={<ChartTooltip />}
                cursor={{ fill: "rgba(99, 102, 241, 0.06)", radius: 4 }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                iconSize={6}
                formatter={(value: string) => (
                  <span className="text-white/40 text-[11px] ml-1">{value}</span>
                )}
              />
              <Bar dataKey="normal" name="Normal" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
              <Bar dataKey="eleve" name="Élevé" stackId="a" fill="#f59e0b" />
              <Bar dataKey="tresEleve" name="Très Élevé" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Lifestyle */}
      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="lg:col-span-5 chart-card p-4 sm:p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xs font-bold text-white/70 uppercase tracking-wider">
            Mode de vie
          </h3>
          <span className="text-[9px] font-mono text-white/20 bg-white/5 px-2 py-0.5 rounded">%</span>
        </div>
        <div className="h-[220px] sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={lifestyleData} barCategoryGap="30%">
              <CartesianGrid stroke="rgba(255,255,255,0.04)" horizontal={false} strokeDasharray="none" />
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
                tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={60}
              />
              <Tooltip
                content={<ChartTooltip suffix="%" />}
                cursor={{ fill: "rgba(99, 102, 241, 0.06)", radius: 4 }}
              />
              <Bar dataKey="value" name="Pourcentage" radius={[0, 6, 6, 0]} barSize={20}>
                {lifestyleData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} fillOpacity={0.85} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
