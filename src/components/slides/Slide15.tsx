import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { motion } from 'motion/react';
import { Eye, EyeOff } from 'lucide-react';

export const Slide15: React.FC<SlideProps> = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-6xl">
      <div className="flex flex-col gap-6 flex-1 w-full">
        <div className="flex items-center gap-4 bg-[var(--accent)]/10 backdrop-blur-xl p-6 rounded-2xl border border-[var(--accent)]/30">
          <div className="font-mono text-2xl font-bold text-[var(--accent)]">1</div>
          <p className="text-sm text-white font-medium">Carte Visa/Mastercard (Locale ou Fintech)</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
          <div className="font-mono text-2xl font-bold opacity-50">2</div>
          <p className="text-sm">Compte Payoneer (Réception Freelance/KDP)</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
          <div className="font-mono text-2xl font-bold opacity-50">3</div>
          <p className="text-sm">Binance / Stablecoins (Monnaie de transit)</p>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center gap-6">
        <motion.div 
          className="w-full max-w-[380px] h-56 rounded-[24px] bg-gradient-to-br from-[#1a1a1a]/80 to-black/80 backdrop-blur-2xl border border-white/20 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setShowInfo(!showInfo)}
        >
          {/* Chip */}
          <div className="w-12 h-10 bg-yellow-600/40 rounded-lg border border-yellow-600/30" />
          
          <div className="space-y-4">
            <p className="text-xl font-mono tracking-[0.2em] text-white">
              {showInfo ? '4321 8888 1234 5678' : '•••• •••• •••• 5678'}
            </p>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[8px] uppercase tracking-widest opacity-60">Card Holder</p>
                <p className="text-sm font-mono uppercase tracking-widest">{showInfo ? 'ALAIN PALUKU' : '•••••••• ••••••'}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-[8px] uppercase tracking-widest opacity-60">Expires</p>
                <p className="text-sm font-mono tracking-widest">{showInfo ? '04/28' : '••/••'}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-8 right-8">
            <span className="italic font-bold text-2xl text-blue-500">VISA</span>
          </div>

          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            {showInfo ? <EyeOff className="text-[var(--accent)]" /> : <Eye className="text-[var(--accent)]" />}
          </div>
        </motion.div>
        <p className="text-[10px] font-mono opacity-60 uppercase tracking-widest">Cliquez pour voir les informations sensibles</p>
      </div>
    </div>
  );
};
