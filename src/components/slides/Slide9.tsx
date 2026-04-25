import React from 'react';
import { Key, CheckCircle2 } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide9: React.FC<SlideProps> = () => {
  return (
    <div className="bg-[#1a1a1a] p-10 rounded-[40px] border border-white/5 max-w-4xl w-full">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-display font-bold">Compte USD, EUR, GBP</h2>
          <p className="text-white/50">Recevez vos fonds comme si vous étiez à New York ou Paris.</p>
          <div className="flex gap-4">
            <CheckCircle2 className="text-[var(--accent)]" />
            <span className="text-sm">Compatible Amazon, Upwork, Fiverr</span>
          </div>
        </div>
        <div className="w-64 h-64 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
          <Key size={80} className="text-[var(--accent)] opacity-20" />
        </div>
      </div>
    </div>
  );
};
