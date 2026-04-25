import React from 'react';
import { CreditCard, Wallet, Landmark, ShieldCheck } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide2: React.FC<SlideProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
       <div className="flex flex-col gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 group hover:border-blue-400/30 transition-colors">
          <div className="p-3 bg-blue-400/10 text-blue-400 w-fit rounded-2xl">
            <Wallet size={28} />
          </div>
          <h3 className="text-2xl font-display font-bold">Prépayée</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Pas liée à un compte bancaire. Vous chargez le montant souhaité. Risque limité et idéal pour le contrôle du budget.
          </p>
          <div className="space-y-2 py-2">
            <div className="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1">
              <span className="opacity-70">FRAIS</span>
              <span className="text-[var(--accent)]">1-3% Recharge</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1">
              <span className="opacity-70">PLAFOND</span>
              <span className="text-blue-400">$500 - $2500 / mois</span>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-white/5 text-[10px] font-mono opacity-60 uppercase tracking-widest">
            UBA / Equity / Rawbank
          </div>
       </div>

       <div className="flex flex-col gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 group hover:border-[var(--accent)]/30 transition-colors">
          <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] w-fit rounded-2xl">
            <Landmark size={28} />
          </div>
          <h3 className="text-2xl font-display font-bold">Débit</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Directement liée à votre compte bancaire. L'argent est retiré immédiatement. Accès total à vos fonds 24/7.
          </p>
          <div className="space-y-2 py-2">
            <div className="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1">
              <span className="opacity-70">FRAIS</span>
              <span className="text-[var(--accent)]">$2-$10 / mois</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1">
              <span className="opacity-70">PLAFOND</span>
              <span className="text-blue-400">Jusqu'à $10k / jour</span>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-white/5 text-[10px] font-mono opacity-60 uppercase tracking-widest">
            Standard Banking
          </div>
       </div>

       <div className="flex flex-col gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 group hover:border-orange-400/30 transition-colors">
          <div className="p-3 bg-orange-400/10 text-orange-400 w-fit rounded-2xl">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-2xl font-display font-bold">Crédit</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            L'argent appartient à la banque. Vous remboursez plus tard. Rare en RDC pour les particuliers, mais commun en affaire.
          </p>
          <div className="space-y-2 py-2">
            <div className="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1">
              <span className="opacity-70">FRAIS</span>
              <span className="text-[var(--accent)]">Annuel + Intérêts</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1">
              <span className="opacity-70">PLAFOND</span>
              <span className="text-blue-400">Selon Score de Crédit</span>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-white/5 text-[10px] font-mono opacity-60 uppercase tracking-widest">
            Corporate / Premium
          </div>
       </div>
    </div>
  );
};
