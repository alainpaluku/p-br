import React from 'react';
import { ArrowLeftRight, Landmark, Clock, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { SlideProps } from '../../types';

export const Slide4: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* SWIFT Codes */}
        <div className="flex-1 grid grid-cols-1 gap-4">
          <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex justify-between items-center group hover:bg-[var(--accent)]/5 transition-colors">
            <div className="flex items-center gap-3">
              <Landmark className="text-[var(--accent)]" size={20} />
              <span className="font-bold">Equity BCDC</span>
            </div>
            <code className="bg-black/40 px-3 py-1 rounded text-[var(--accent)] font-mono">EQBCCDKN</code>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center group hover:bg-[var(--accent)]/5 transition-colors">
            <div className="flex items-center gap-3">
              <Landmark className="text-[var(--accent)]" size={20} />
              <span className="font-bold">Rawbank</span>
            </div>
            <code className="bg-black/40 px-3 py-1 rounded text-[var(--accent)] font-mono">RAWBCDKN</code>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center group hover:bg-[var(--accent)]/5 transition-colors">
            <div className="flex items-center gap-3">
              <Landmark className="text-[var(--accent)]" size={20} />
              <span className="font-bold">UBA DRC</span>
            </div>
            <code className="bg-black/40 px-3 py-1 rounded text-[var(--accent)] font-mono">UBAFCDKN</code>
          </div>
        </div>

        {/* Fees & Time */}
        <div className="flex-1 bg-[var(--accent)]/5 backdrop-blur-xl p-8 rounded-[40px] border border-[var(--accent)]/20 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[var(--accent)] text-black rounded-2xl">
                <DollarSign size={24} />
              </div>
              <div>
                <h4 className="font-bold">Frais de Transaction</h4>
                <p className="text-sm opacity-80">0.5% à 1% (Min $25 - $50)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold">Délai de Réception</h4>
                <p className="text-sm opacity-80">3 à 5 Jours Ouvrables</p>
              </div>
            </div>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -bottom-20 opacity-5"
          >
            <ArrowLeftRight size={240} />
          </motion.div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
        <p className="text-sm opacity-80 italic">"Indispensable pour les virements internationaux de gros montants directement sur votre compte bancaire local."</p>
      </div>
    </div>
  );
};
