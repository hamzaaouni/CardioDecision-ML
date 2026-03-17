"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Database,
  Search,
  Layers,
  Cpu,
  Share2,
  BarChart3,
  Target,
} from "lucide-react";
import { algorithms, benchmarkMetrics } from "@/lib/data";

const stepColors = {
  indigo: { bg: "from-indigo-950/50 to-indigo-900/20", border: "border-indigo-500/15", icon: "bg-indigo-500/15 text-indigo-400", glow: "bg-indigo-500/8" },
  emerald: { bg: "from-emerald-950/50 to-emerald-900/20", border: "border-emerald-500/15", icon: "bg-emerald-500/15 text-emerald-400", glow: "bg-emerald-500/8" },
  purple: { bg: "from-purple-950/50 to-purple-900/20", border: "border-purple-500/15", icon: "bg-purple-500/15 text-purple-400", glow: "bg-purple-500/8" },
  amber: { bg: "from-amber-950/50 to-amber-900/20", border: "border-amber-500/15", icon: "bg-amber-500/15 text-amber-400", glow: "bg-amber-500/8" },
};

export default function Pipeline() {
  return (
    <div className="relative flex flex-col items-center space-y-5 max-w-4xl mx-auto">
      {/* Connecting Line */}
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 via-purple-500/15 to-emerald-500/10 left-1/2 -translate-x-1/2 -z-10" />

      {/* Raw Data */}
      <PipelineNodeFull
        title="Raw data — Kaggle CVD"
        sub="70 000 patients · 12 features · cardio_train.csv"
        color="rgba(15, 23, 42, 0.9)"
        icon={<Database size={16} />}
        delay={0.05}
      />
      <StepArrow />

      {/* Step 1 — Preprocessing */}
      <StepCard theme={stepColors.indigo} label="Step 1 — Preprocessing" icon={<Layers size={18} />} direction="left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SubNode title="Outlier removal" sub="BP, height, weight bounds" icon={<Search size={13} />} />
          <SubNode title="Feature engineering" sub="BMI, pulse pressure, BP cat" icon={<Cpu size={13} />} />
          <SubNode title="Scaling + encoding" sub="StandardScaler, ordinal enc." icon={<Layers size={13} />} />
        </div>
      </StepCard>
      <StepArrow />

      {/* Step 2 — Stratified Split */}
      <StepCard theme={stepColors.emerald} label="Step 2 — Stratified train/test split (80/20)" icon={<Share2 size={18} />} direction="right">
        <div className="text-center text-[10px] text-white/40 font-mono">
          SMOTE applied on train set only — prevents data leakage
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-3">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-[9px] font-bold text-white/25 uppercase tracking-widest mb-1.5">Train (80%)</div>
            <div className="w-full bg-emerald-500/8 border border-emerald-500/20 px-5 py-3 rounded-xl text-center">
              <div className="text-base font-display font-bold text-white">56 000 patients</div>
              <div className="text-[9px] text-emerald-400/70 font-bold uppercase tracking-wider mt-0.5">balanced via SMOTE</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-[9px] font-bold text-white/25 uppercase tracking-widest mb-1.5">Test (20%)</div>
            <div className="w-full bg-white/[0.03] border border-white/[0.07] px-5 py-3 rounded-xl text-center">
              <div className="text-base font-display font-bold text-white">14 000 patients</div>
              <div className="text-[9px] text-white/25 font-bold uppercase tracking-wider mt-0.5">held out, never touched</div>
            </div>
          </div>
        </div>
      </StepCard>
      <StepArrow />

      {/* Step 3 — Model Training */}
      <StepCard theme={stepColors.purple} label="Step 3 — Model training + hyperparameter tuning" icon={<Cpu size={18} />} direction="left">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {algorithms.map((label) => (
            <div key={label} className="border border-white/[0.07] rounded-lg py-2.5 text-center text-[10px] font-bold text-white/60 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white/90 transition-all cursor-default">
              {label}
            </div>
          ))}
        </div>
        <div className="bg-purple-500/8 border border-purple-500/15 rounded-lg py-2.5 text-center text-[10px] text-purple-300/80 font-mono">
          Optuna — Bayesian hyperparameter search per model
        </div>
      </StepCard>
      <StepArrow />

      {/* Step 4 — Benchmarking */}
      <StepCard theme={stepColors.amber} label="Step 4 — Benchmarking on test set" icon={<BarChart3 size={18} />} direction="right">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {benchmarkMetrics.map((m) => (
            <div
              key={m.label}
              className={`border rounded-lg py-4 px-2 text-center text-[10px] font-bold transition-all ${
                m.highlight
                  ? "text-rose-400 border-rose-500/20 bg-rose-500/[0.04] shadow-[0_0_16px_rgba(244,63,94,0.08)]"
                  : "text-white/50 border-white/[0.07] bg-white/[0.02]"
              }`}
            >
              {m.label}
            </div>
          ))}
        </div>
        <div className="text-center text-[10px] text-white/30 font-mono">
          5-fold stratified cross-validation · Confusion matrix · Classification report
        </div>
      </StepCard>
      <StepArrow />

      {/* Step 5 */}
      <PipelineNodeFull
        title="Step 5 — SHAP explainability"
        sub="Global feature importance · Local patient explanation · Counterfactuals"
        color="rgba(244, 63, 94, 0.2)"
        icon={<Search size={16} />}
        delay={0.05}
      />
      <StepArrow />

      {/* Step 6 */}
      <PipelineNodeFull
        title="Step 6 — Best model selection"
        sub="Recall + AUC + stability → save with joblib"
        color="rgba(20, 184, 166, 0.2)"
        icon={<Target size={16} />}
        delay={0.05}
      />
      <StepArrow />

      {/* Step 7 */}
      <PipelineNodeFull
        title="Step 7 — Streamlit deployment"
        sub="Patient form · Risk score · SHAP chart · Benchmark tab"
        color="rgba(99, 102, 241, 0.2)"
        icon={<Share2 size={16} />}
        delay={0.05}
      />
    </div>
  );
}

function StepArrow() {
  return <ArrowDown className="text-white/[0.08]" size={20} />;
}

function StepCard({
  theme,
  label,
  icon,
  direction,
  children,
}: {
  theme: typeof stepColors.indigo;
  label: string;
  icon: React.ReactNode;
  direction: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full bg-gradient-to-br ${theme.bg} backdrop-blur-xl ${theme.border} border rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 relative overflow-hidden`}
    >
      <div className={`absolute top-0 ${direction === "left" ? "right-0 -mr-12" : "left-0 -ml-12"} -mt-12 w-24 h-24 ${theme.glow} blur-[50px] rounded-full`} />
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg ${theme.icon} flex items-center justify-center`}>{icon}</div>
        <div className="font-display font-bold text-white/90 uppercase tracking-wider text-[11px] sm:text-xs">{label}</div>
      </div>
      {children}
    </motion.div>
  );
}

function PipelineNodeFull({
  title,
  sub,
  color,
  icon,
  delay,
}: {
  title: string;
  sub: string;
  color: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className="w-full rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/[0.07] backdrop-blur-xl flex flex-col items-center gap-2 group hover:border-white/[0.14] transition-all"
      style={{ backgroundColor: color }}
    >
      <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-white/80 mb-1">
        {icon}
      </div>
      <div className="text-[11px] sm:text-xs font-display font-bold text-white/90 uppercase tracking-wider sm:tracking-[0.15em]">
        {title}
      </div>
      <div className="text-[10px] text-white/40">{sub}</div>
    </motion.div>
  );
}

function SubNode({ title, sub, icon }: { title: string; sub: string; icon: React.ReactNode }) {
  return (
    <div className="border border-white/[0.07] rounded-xl p-4 text-center bg-white/[0.02] hover:bg-white/[0.05] transition-all group/sub">
      <div className="flex justify-center mb-2 text-white/15 group-hover/sub:text-white/50 transition-colors">{icon}</div>
      <div className="text-[11px] font-bold text-white/80 mb-0.5 uppercase tracking-tight">{title}</div>
      <div className="text-[9px] text-white/35 leading-snug">{sub}</div>
    </div>
  );
}
