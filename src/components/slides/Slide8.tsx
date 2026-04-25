import React from 'react';
import { Key, CheckCircle2, Briefcase, Globe, Landmark } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide8: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl">
      <div className="bg-[#1a1a1a]/40 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl">
                 <Briefcase size={24} />
               </div>
               <h2 className="text-4xl font-display font-bold">Payoneer</h2>
            </div>
            <p className="text-white/80 text-lg">Votre pont entre le travail en ligne et vos poches en RDC.</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--accent)]" size={18} />
                <span className="text-sm">Comptes Bancaires Virtuels (USD, EUR, GBP)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--accent)]" size={18} />
                <span className="text-sm">Compatible Amazon KDP, Upwork, Fiverr</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--accent)]" size={18} />
                <span className="text-sm">Retrait direct vers compte bancaire local (SWIFT)</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-56 h-56 bg-white/5 rounded-[32px] border border-white/10 flex items-center justify-center">
              <Key size={64} className="text-[var(--accent)] opacity-20" />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-[var(--accent)] text-black font-bold px-4 py-2 rounded-xl text-xs shadow-lg">
              Freelancing
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-lg">
              KDP / Authors
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex items-center gap-4">
           <Globe className="text-blue-400" />
           <p className="text-sm opacity-80">Indispensable pour recevoir vos revenus internationaux.</p>
        </div>
        <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-4">
           <Landmark className="text-orange-400" />
           <p className="text-sm opacity-80">Lie les plateformes US directement à la RDC.</p>
        </div>
      </div>
    </div>
  );
};
