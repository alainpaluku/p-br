import React from 'react';
import { Award, Users } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide10: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl">
              <Award size={24} />
            </div>
            <h4 className="text-xl font-bold">Vérification Manuelle</h4>
          </div>
          <p className="text-sm opacity-80">
            Ne payez jamais le plein tarif ! Vérifiez systématiquement en bas de page des sites ("For Students") s'il existe une offre académique.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/5 rounded-lg text-xs">Aide Financière Coursera</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg text-xs">GitHub Student</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg text-xs">JetBrains (IDE)</span>
          </div>
        </div>

        <div className="bg-[var(--accent)]/5 backdrop-blur-xl p-8 rounded-[40px] border border-[var(--accent)]/20 space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[var(--accent)] text-black rounded-2xl">
              <Users size={24} />
            </div>
            <h4 className="text-xl font-bold">L'Offre Famille {'>'} Personnelle</h4>
          </div>
          <p className="text-sm opacity-90">
            Partagez les frais ! Un abonnement famille (Duolingo, Canva, ...) divisé par 5 personnes est souvent 80% moins cher.
          </p>
          <div className="p-4 bg-black/20 rounded-2xl border border-white/5">
            <p className="text-xs font-mono italic">"Le partage de compte est votre premier levier d'économie numérique."</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center">
          <p className="text-xs font-bold">Duolingo Plus</p>
        </div>
        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
          <p className="text-xs font-bold">Coursera Plus</p>
        </div>
        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
          <p className="text-xs font-bold">Canva Pro</p>
        </div>
        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
          <p className="text-xs font-bold">Adobe Creative Cloud</p>
        </div>
      </div>
    </div>
  );
};
