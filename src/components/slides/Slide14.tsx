import React from 'react';
import { ShieldCheck, AlertCircle, Zap } from 'lucide-react';
import { BentoCard } from '../ui/Layout';
import { SlideProps } from '../../types';

export const Slide14: React.FC<SlideProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
      <BentoCard title="2FA" icon={ShieldCheck} delay={0.1}>
        <p>Toujours activer la double authentification sur Payoneer et Binance.</p>
      </BentoCard>
      <BentoCard title="Hameçonnage" icon={AlertCircle} delay={0.2}>
        <p>Méfiez-vous des faux emails de banques virtuelles.</p>
      </BentoCard>
      <BentoCard title="Crypto Volatilité" icon={Zap} delay={0.3}>
        <p>Ne gardez vos fonds en Stablecoins (USDT) que si nécessaire.</p>
      </BentoCard>
    </div>
  );
};
