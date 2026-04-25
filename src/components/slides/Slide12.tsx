import React from 'react';
import { Award, Cpu, Zap, ExternalLink, GraduationCap } from 'lucide-react';
import { SlideProps } from '../../types';

export const Slide12: React.FC<SlideProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      {/* Coursera */}
      <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 space-y-6">
        <div className="flex items-center gap-4">
          <GraduationCap className="text-blue-500" size={40} />
          <h4 className="text-2xl font-bold">Coursera Financial Aid</h4>
        </div>
        <p className="text-sm opacity-80">
          Obtenez n'importe quel certificat professionnel gratuitement en expliquant vos objectifs de carrière dans le formulaire d'aide financière.
        </p>
        <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 text-xs font-mono hover:underline">
          <ExternalLink size={14} /> Coursera.org
        </a>
      </div>

      {/* NVIDIA & Google */}
      <div className="space-y-4">
        <div className="p-6 bg-green-500/5 backdrop-blur-md rounded-2xl border border-green-500/20 flex justify-between items-center group">
          <div className="flex items-center gap-4">
            <Cpu className="text-green-500" />
            <div>
              <p className="font-bold">NVIDIA Developer</p>
              <p className="text-[10px] opacity-70">Accès aux SDKs & Deep Learning</p>
            </div>
          </div>
          <a href="https://developer.nvidia.com" target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={16} className="text-green-500" />
          </a>
        </div>

        <div className="p-6 bg-blue-500/5 backdrop-blur-md rounded-2xl border border-blue-500/20 flex justify-between items-center group">
          <div className="flex items-center gap-4">
            <Zap className="text-blue-500" />
            <div>
              <p className="font-bold">Google Skills Africa</p>
              <p className="text-[10px] opacity-70">Ateliers Numériques & Certificats</p>
            </div>
          </div>
          <a href="https://learndigital.withgoogle.com" target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={16} className="text-blue-500" />
          </a>
        </div>

        <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex justify-between items-center group">
          <div className="flex items-center gap-4">
            <Award className="text-orange-400" />
            <div>
              <p className="font-bold">Microsoft Learn</p>
              <p className="text-[10px] opacity-70">Azure, Data & AI Fundamentals</p>
            </div>
          </div>
          <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={16} className="text-orange-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
