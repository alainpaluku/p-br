import React from 'react';
import { Github, Globe, Code, Terminal, ExternalLink } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide11: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 space-y-4">
          <Globe className="text-blue-400" size={32} />
          <h4 className="font-bold">Noms de Domaine</h4>
          <p className="text-xs opacity-70">1 an de .me gratuit (Namecheap) + .tech + .com.ua</p>
        </div>
        <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
          <Terminal className="text-[var(--accent)]" size={32} />
          <h4 className="font-bold">Hébergement & Cloud</h4>
          <p className="text-xs opacity-70">200$ DigitalOcean, Heroku Free Tier, Azure Credits.</p>
        </div>
        <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
          <Code className="text-orange-400" size={32} />
          <h4 className="font-bold">GitHub Copilot</h4>
          <p className="text-xs opacity-70">L'IA de programmation gratuite pour les étudiants (gain de temps x2).</p>
        </div>
      </div>

      <div className="bg-[var(--accent)]/5 backdrop-blur-xl p-8 rounded-[40px] border border-[var(--accent)]/20 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Github /> GitHub Student Developer Pack
            </h3>
            <p className="text-sm opacity-90">Accédez à plus de 100 outils premiums gratuitement.</p>
          </div>
          <a 
            href="https://education.github.com/pack" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--accent)] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            Postuler au Pack <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="text-center italic opacity-60 text-xs">
        * Une preuve de scolarité (carte d'étudiant, relevé de notes) est indispensable pour l'approbation.
      </div>
    </div>
  );
};
