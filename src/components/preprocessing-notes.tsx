"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { preprocessingNotes } from "@/lib/data";

export default function PreprocessingNotes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-500/[0.03] border border-indigo-500/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10"
    >
      <div className="md:w-1/3 space-y-3">
        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
          <Activity className="text-indigo-400" size={20} />
        </div>
        <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
          Notes de Prétraitement
        </h3>
        <p className="text-white/30 text-xs leading-relaxed">
          Détails techniques sur la préparation des données pour l&apos;entraînement du modèle.
        </p>
      </div>
      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {preprocessingNotes.map((note, i) => (
          <div key={i} className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <h4 className="font-display text-xs font-bold text-white/80 uppercase tracking-wider">{note.title}</h4>
            </div>
            <p className="text-[11px] text-white/30 leading-relaxed pl-3.5">{note.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
