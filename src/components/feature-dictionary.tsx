"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { features } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function FeatureDictionary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03, duration: 0.35 }}
          className="glass-card p-4 sm:p-5 flex flex-col gap-3 group cursor-default"
        >
          <Badge variant={f.color} className="self-start">
            {f.cat}
          </Badge>

          <div>
            <div className="font-display text-base font-bold text-white/90 mb-1 group-hover:text-indigo-400 transition-colors duration-300">
              {f.name}
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed">
              {f.desc}
            </p>
          </div>

          <div className="mt-auto pt-3 border-t border-white/[0.05] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-white/15 uppercase tracking-widest">Type</span>
              <span className="text-[10px] font-mono font-bold text-white/50 uppercase">{f.type}</span>
            </div>
            <div className="w-6 h-6 rounded-md bg-white/[0.03] flex items-center justify-center text-white/10 group-hover:text-white/30 group-hover:bg-white/[0.06] transition-all duration-300">
              <ChevronRight size={12} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
