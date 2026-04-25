import React from 'react';
import { motion } from 'motion/react';

export const BentoCard = ({ children, title, icon: Icon, delay = 0, accent = false }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-[#1a1a1a]/40 backdrop-blur-xl border ${accent ? 'border-[var(--accent)]/30' : 'border-white/10'} rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--accent)]/50 transition-colors group`}
  >
    <div className="flex items-center justify-between">
      <div className={`p-2 rounded-lg ${accent ? 'bg-[var(--accent)] text-black' : 'bg-[var(--accent)]/10 text-[var(--accent)]'}`}>
        <Icon size={20} />
      </div>
    </div>
    <h3 className="text-lg font-display font-medium text-white/90">{title}</h3>
    <div className="flex-1 text-sm text-white/70 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

export const IconBadge = ({ icon: Icon, label }: any) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-32">
    <Icon size={32} className="text-[var(--accent)]" />
    <span className="text-[10px] font-mono uppercase tracking-tighter opacity-80 text-center">{label}</span>
  </div>
);
