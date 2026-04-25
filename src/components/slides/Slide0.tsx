import React from 'react';
import { Mail, Globe, Briefcase } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide0: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl text-center">
      <div className="flex items-center gap-8 bg-white/5 p-8 rounded-[40px] border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500">
        <div className="w-40 h-40 rounded-2xl overflow-hidden relative group">
          <img 
            src="https://assets.alainpaluku.com/profil/alainpaluku.png" 
            alt="Alain Paluku"
            className="w-full h-full object-cover object-top scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[var(--accent)] shadow-[0_0_10px_rgba(0,255,156,0.5)]" />
        </div>
        <div className="text-left space-y-4">
          <div>
            <h3 className="text-4xl font-display font-bold">Alain Paluku</h3>
            <p className="text-[var(--accent)] font-mono text-sm uppercase tracking-widest flex items-center gap-2">
              <Briefcase size={14} /> Développeur @ NEOSOFT DEVS
            </p>
          </div>
          <div className="space-y-2 text-sm opacity-80 font-mono">
            <p className="flex items-center gap-3">
              <Mail size={16} className="text-[var(--accent)]" />
              <span>contact@alainpaluku.com</span>
            </p>
            <p className="flex items-center gap-3">
              <Globe size={16} className="text-[var(--accent)]" />
              <span>alainpaluku.com</span>
            </p>
            <p className="flex items-center gap-3">
              <Globe size={16} className="opacity-70" />
              <span className="text-[var(--accent)]/80">neosoft.dev</span>
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-6xl font-display font-bold text-white leading-[1.1] tracking-tighter">
        Paiements en Ligne <br/> en <span className="text-[var(--accent)]">RDC</span>
      </h1>
    </div>
  );
};
