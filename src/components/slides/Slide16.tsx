import React from 'react';
import { Lightbulb } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide16: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center gap-12 text-center max-w-xl w-full">
      <div className="animate-bounce">
        <Lightbulb size={48} className="text-yellow-400" />
      </div>
      <p className="text-2xl font-display leading-relaxed">
        Le numérique n'a plus de frontières dès que vous possédez votre <span className="text-[var(--accent)] font-bold">première carte bancaire</span>.
      </p>
      <button className="px-8 py-4 bg-[var(--accent)] text-black font-bold rounded-full text-sm uppercase tracking-widest pointer-events-none opacity-80">
        Go Global
      </button>
    </div>
  );
};
