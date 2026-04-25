import React from 'react';
import { Smartphone, ShieldCheck, EyeOff, Lock } from 'lucide-react';
import { BentoCard } from '../ui/Layout';
import { SlideProps } from '../../types';

export const Slide6: React.FC<SlideProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
      <BentoCard title="Apple Pay" icon={Smartphone} delay={0.1}>
        <p>Sécurité maximale via FaceID/TouchID. Le numéro de carte n'est jamais partagé avec le marchand.</p>
      </BentoCard>
      <BentoCard title="Google Pay" icon={Smartphone} delay={0.2}>
        <p>Utilise des jetons (tokenization) pour sécuriser vos transactions sur Android et le Web.</p>
      </BentoCard>
      <BentoCard title="Sécurité Renforcée" icon={ShieldCheck} delay={0.3} accent>
        <p className="text-white">Paiements sans contact et protection contre le vol de données bancaires en ligne.</p>
      </BentoCard>
    </div>
  );
};
