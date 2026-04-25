import React from 'react';
import { Building2, Smartphone, CreditCard, Zap } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide3: React.FC<SlideProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 space-y-6">
        <div className="flex items-center gap-4">
          <Building2 className="text-blue-500" size={32} />
          <h4 className="text-2xl font-bold">Carte Physique</h4>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-sm font-bold text-blue-400">Banques Traditionnelles</p>
            <p className="text-xs opacity-80 italic">Rawbank, EquityBCDC, UBA</p>
            <p className="text-[10px] mt-1 opacity-70">15$ à 50$ (selon plafond & type)</p>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-sm font-bold text-orange-400">Orange Money</p>
            <p className="text-xs opacity-80">10$ • Validité 2 ans • Physique</p>
          </div>
          <ul className="space-y-2 text-sm opacity-80 px-2">
            <li>• Retrait GAB/ATM & POS physique</li>
            <li>• Utilisation internationale sécurisée</li>
          </ul>
        </div>
      </div>

      <div className="p-8 bg-[var(--accent)]/5 backdrop-blur-xl rounded-3xl border border-[var(--accent)]/20 space-y-6">
        <div className="flex items-center gap-4">
          <Zap className="text-[var(--accent)]" size={32} />
          <h4 className="text-2xl font-bold text-[var(--accent)]">Carte Virtuelle</h4>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-bold">M-Pesa / Illicocash</p>
            </div>
            <p className="text-xs opacity-80">M-Pesa: 1$ • Illicocash: 3$</p>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-sm font-bold">Visa Pays</p>
            <p className="text-xs opacity-80">Gratuit via App • Min 10$ recharge</p>
          </div>
          <ul className="space-y-2 text-sm text-[var(--accent)]/70 px-2">
            <li>• Création instantanée via smartphone</li>
            <li>• Idéal pour Duolingo, Coursera, etc.</li>
            <li>• Validité variable (6 mois - 2 ans)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
