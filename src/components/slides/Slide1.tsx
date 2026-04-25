import React from 'react';
import { Globe, TrendingDown, AlertCircle } from 'lucide-react';
import { BentoCard } from '../ui/Layout';
import { SlideProps } from '../../types';

export const Slide1: React.FC<SlideProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
      <BentoCard title="Restrictions Géographiques" icon={Globe} delay={0.1}>
        <p>PayPal, Stripe et d'autres géants ne supportent pas la région.</p>
      </BentoCard>
      <BentoCard title="Faible Bancarisation" icon={TrendingDown} delay={0.2}>
        <p>Le taux de bancarisation reste un défi majeur pour l'accès aux cartes.</p>
      </BentoCard>
      <BentoCard title="Infrastructures" icon={AlertCircle} delay={0.3}>
        <p>Faible pénétration des cartes par rapport au Mobile Money.</p>
      </BentoCard>
      <BentoCard title="Conséquence" icon={AlertCircle} delay={0.4} accent>
        <p className="text-white">Isolement numérique et perte d'opportunités.</p>
      </BentoCard>
    </div>
  );
};
