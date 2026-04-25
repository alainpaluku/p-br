import React from 'react';
import { Zap, Tag, Gift, ExternalLink } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide13: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-5xl">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 space-y-6">
             <div className="flex items-center gap-4">
                <Zap className="text-yellow-400" size={32} />
                <h4 className="text-xl font-bold">La Stratégie de l'Essai (Trial)</h4>
             </div>
             <p className="text-sm opacity-80 leading-relaxed">
                Profitrez des périodes d'essai gratuites de 1 à 3 mois. Attention : Programmez une alarme pour annuler 24h avant si vous ne voulez pas être débité.
             </p>
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs text-center font-mono">Gemini Advanced</div>
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs text-center font-mono">Duolingo Plus</div>
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs text-center font-mono">YouTube Premium</div>
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs text-center font-mono">Amazon Prime</div>
             </div>
          </div>

          <div className="p-8 bg-[var(--accent)]/5 backdrop-blur-xl rounded-3xl border border-[var(--accent)]/20 space-y-6">
             <div className="flex items-center gap-4">
                <Tag className="text-[var(--accent)]" size={32} />
                <h4 className="text-xl font-bold">Deelabs & Reductions</h4>
             </div>
             <p className="text-sm opacity-90 leading-relaxed">
                Cherchez activement les codes promos sur <b>Deelabs</b> ou les forums de "Bons Plans" pour les licences logicielles.
             </p>
             <div className="p-6 bg-black/40 rounded-2xl border border-[var(--accent)]/10 flex flex-col items-center gap-4">
                <Gift className="text-[var(--accent)]" size={40} />
                <p className="text-center font-bold text-lg">Jusqu'à -90%</p>
                <a href="https://www.dealabs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--accent)] text-xs hover:underline">
                   Visiter Dealabs <ExternalLink size={14} />
                </a>
             </div>
          </div>
       </div>

       <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl text-center text-xs opacity-60">
          "Un bon développeur ne paye jamais le plein tarif pour ses outils durant sa phase d'apprentissage."
       </div>
    </div>
  );
};
