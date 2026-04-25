import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide17: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl text-center w-full">
      <div className="w-24 h-24 rounded-full bg-[var(--accent)]/10 backdrop-blur-xl flex items-center justify-center border border-[var(--accent)]/30">
        <MessageSquare size={48} className="text-[var(--accent)]" />
      </div>
      <h2 className="text-5xl font-display font-medium">C'est à vous...</h2>
      <p className="text-white/70 text-lg">
        Merci pour votre attention ! Avez-vous des questions ?
      </p>
      <div className="flex gap-4 mt-8">
        <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
          <span className="text-[var(--accent)] font-mono text-sm leading-none">@alainpaluku</span>
        </div>
        <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
          <span className="text-[var(--accent)] font-mono text-sm leading-none">#DigitalDRC2026</span>
        </div>
      </div>
    </div>
  );
};
