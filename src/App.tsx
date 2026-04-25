import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

import { SlideData } from './types';

// Lazy load slides for better performance
const Slide0 = lazy(() => import('./components/slides/Slide0').then(m => ({ default: m.Slide0 })));
const Slide1 = lazy(() => import('./components/slides/Slide1').then(m => ({ default: m.Slide1 })));
const Slide2 = lazy(() => import('./components/slides/Slide2').then(m => ({ default: m.Slide2 })));
const Slide3 = lazy(() => import('./components/slides/Slide3').then(m => ({ default: m.Slide3 })));
const Slide4 = lazy(() => import('./components/slides/Slide4').then(m => ({ default: m.Slide4 })));
const Slide5 = lazy(() => import('./components/slides/Slide5').then(m => ({ default: m.Slide5 })));
const Slide6 = lazy(() => import('./components/slides/Slide6').then(m => ({ default: m.Slide6 })));
const Slide7 = lazy(() => import('./components/slides/Slide7').then(m => ({ default: m.Slide7 })));
const Slide8 = lazy(() => import('./components/slides/Slide8').then(m => ({ default: m.Slide8 })));
const Slide9 = lazy(() => import('./components/slides/Slide9').then(m => ({ default: m.Slide9 })));
const Slide10 = lazy(() => import('./components/slides/Slide10').then(m => ({ default: m.Slide10 })));
const Slide11 = lazy(() => import('./components/slides/Slide11').then(m => ({ default: m.Slide11 })));
const Slide12 = lazy(() => import('./components/slides/Slide12').then(m => ({ default: m.Slide12 })));
const Slide13 = lazy(() => import('./components/slides/Slide13').then(m => ({ default: m.Slide13 })));
const Slide14 = lazy(() => import('./components/slides/Slide14').then(m => ({ default: m.Slide14 })));
const Slide15 = lazy(() => import('./components/slides/Slide15').then(m => ({ default: m.Slide15 })));
const Slide16 = lazy(() => import('./components/slides/Slide16').then(m => ({ default: m.Slide16 })));
const Slide17 = lazy(() => import('./components/slides/Slide17').then(m => ({ default: m.Slide17 })));

const ProgressIndicator = ({ current, total }: { current: number; total: number }) => (
  <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
    <motion.div
      className="h-full bg-[var(--accent)] shadow-[0_0_10px_#00FF9C]"
      initial={{ width: 0 }}
      animate={{ width: `${((current + 1) / total) * 100}%` }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  </div>
);

const LoadingSlide = () => (
  <div className="flex items-center justify-center h-full">
    <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    { id: 0, title: "Paiements en Ligne en RDC", subtitle: "Guide de Survie pour Étudiants & Créateurs", Component: Slide0 },
    { id: 1, title: "L'État des Lieux : Le Blocage", subtitle: "Pourquoi est-ce si complexe ?", Component: Slide1 },
    { id: 2, title: "SWIFT : Le Réseau Bancaire", subtitle: "La méthode traditionnelle pour l'étranger", Component: Slide4 },
    { id: 3, title: "Types de Cartes Bancaires", subtitle: "Comprendre les réseaux et les offres", Component: Slide2 },
    { id: 4, title: "Physique vs Virtuelle", subtitle: "Choisir son format de carte", Component: Slide3 },
    { id: 5, title: "Apple Pay & Google Pay", subtitle: "Sécurité et Paiements Sans Contact", Component: Slide6 },
    { id: 6, title: "Stablecoins : Le Pont Digital", subtitle: "Utiliser l'USDT comme monnaie de transit", Component: Slide7 },
    { id: 7, title: "Recevoir vos Paiements", subtitle: "Payoneer : Le Pont Indispensable", Component: Slide8 },
    { id: 8, title: "L'Arsenal de l'Étudiant", subtitle: "Accéder au savoir mondial gratuitement", Component: Slide10 },
    { id: 9, title: "GitHub Student Pack", subtitle: "Outils de Dev, Domaines & Copilot", Component: Slide11 },
    { id: 10, title: "Formations Certifiantes", subtitle: "Financial Aid (Coursera, NVIDIA, Google)", Component: Slide12 },
    { id: 11, title: "Stratégies & Astuces", subtitle: "Essais Gratuits & Dealabs", Component: Slide13 },
    { id: 12, title: "Gestion du Risque", subtitle: "Ne perdez pas votre argent", Component: Slide14 },
    { id: 13, title: "Résumé : Le Combo Gagnant", subtitle: "Votre nouvelle architecture financière", Component: Slide15 },
    { id: 14, title: "Passage à l'Action", subtitle: "Demain matin, commencez ici", Component: Slide16 },
    { id: 15, title: "Merci pour votre attention !", subtitle: "Questions & Réponses", Component: Slide17 },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].Component;

  return (
    <div className="presentation-container font-sans selection:bg-[var(--accent)] selection:text-black pixel-grid relative overflow-hidden">
      <ProgressIndicator current={currentSlide} total={slides.length} />
      <div className="scanline" />

      {/* Header Info */}
      <header className="fixed top-8 left-8 right-8 flex justify-between items-center z-40 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_#00FF9C]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">DRC.PAYMENT.SYSTEMS_2026</span>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">
          Slide {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Main Content */}
      <main className="slide-content">
        <AnimatePresence mode="wait">
          <motion.section
            key={currentSlide}
            initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.4em] mb-4"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.h1
                className="text-3xl md:text-5xl font-display font-medium tracking-tight"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
            </div>
            <Suspense fallback={<LoadingSlide />}>
              <CurrentSlideComponent title={slides[currentSlide].title} subtitle={slides[currentSlide].subtitle} />
            </Suspense>
          </motion.section>
        </AnimatePresence>
      </main>

      {/* Footer Nav */}
      <footer className="fixed bottom-8 left-0 w-full flex justify-center items-center gap-12 z-40">
        <button
          onClick={prevSlide}
          aria-label="Slide précédent"
          className="p-4 rounded-full border border-white/10 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 transition-all text-white/60 hover:text-[var(--accent)] group"
        >
          <ArrowLeft size={24} className="group-active:scale-95 transition-transform" />
        </button>

        <div className="flex gap-2" role="navigation" aria-label="Indicateurs de slides">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Aller au slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'bg-[var(--accent)] w-6' : 'bg-white/10 w-1'}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Slide suivant"
          className="p-4 rounded-full border border-white/10 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 transition-all text-white/60 hover:text-[var(--accent)] group"
        >
          <ArrowRight size={24} className="group-active:scale-95 transition-transform" />
        </button>
      </footer>

      {/* Decorative vertical rails */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 h-1/2 w-px bg-white/5 hidden lg:block" />
      <div className="fixed right-8 top-1/2 -translate-y-1/2 h-1/2 w-px bg-white/5 hidden lg:block" />
    </div>
  );
}
