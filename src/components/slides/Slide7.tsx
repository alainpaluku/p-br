import React from 'react';
import { Coins, Zap, Landmark, Globe } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide7: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Concept Difference */}
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
            <h4 className="text-[var(--accent)] font-display font-bold mb-3 flex items-center gap-2">
              <Coins size={18} /> Crypto-Monnaies
            </h4>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Actifs volatiles utilisés comme investissement ou réserve de valeur.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-[10px] font-mono">BTC</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-mono">ETH</span>
            </div>
          </div>
          <div className="bg-[var(--accent)]/5 backdrop-blur-md p-6 rounded-3xl border border-[var(--accent)]/20">
            <h4 className="text-[var(--accent)] font-display font-bold mb-3 flex items-center gap-2">
              <Landmark size={18} /> Stablecoins
            </h4>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Crypto-devises indexées sur une monnaie stable (Dollar). Idéal pour les paiements.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-mono font-bold">USDT</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[10px] font-mono font-bold">USDC</span>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 flex flex-col justify-center">
          <h4 className="font-display font-bold text-xl mb-6 text-center italic">Où se procurer ?</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <span className="font-bold text-lg text-yellow-500">Binance</span>
              <p className="text-[10px] opacity-70 uppercase">P2P Mobile Money</p>
            </div>
            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <span className="font-bold text-lg text-blue-400">KuCoin</span>
              <p className="text-[10px] opacity-70 uppercase">Trading & App</p>
            </div>
            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <span className="font-bold text-lg text-[var(--accent)]">Yellow Card</span>
              <p className="text-[10px] opacity-70 uppercase">Achat direct RDC</p>
            </div>
            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <Zap size={20} className="text-white/20" />
              <p className="text-[10px] opacity-70 uppercase">Instant swaps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--accent)]/10 p-4 rounded-xl border border-[var(--accent)]/30 flex items-center justify-center gap-4">
        <Globe size={16} className="text-[var(--accent)]" />
        <p className="text-xs font-mono">Le pont essentiel entre le Mobile Money (CDF) et les sites internationaux (USD).</p>
      </div>
    </div>
  );
};
