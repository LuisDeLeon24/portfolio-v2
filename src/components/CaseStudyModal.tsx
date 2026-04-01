import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
  lang: 'en' | 'es';
}

export function CaseStudyModal({ project, onClose, lang }: CaseStudyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-24 bg-[var(--bg)]/95 backdrop-blur-xl cursor-pointer"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-6xl h-full bg-[var(--bg)] border-2 border-[var(--neon-wine)] overflow-y-auto relative cursor-default"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 md:top-8 right-4 md:right-8 z-20 p-2 md:p-4 border border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md hover:border-[var(--neon-red)] hover:text-[var(--neon-red)] transition-all font-mono text-[10px] md:text-xs uppercase tracking-widest"
        >
          CLOSE_X
        </button>

        <div className="p-6 md:p-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-20">
            <div className="flex-1">
              <div className="font-mono text-[9px] md:text-[10px] text-[var(--neon-wine)] mb-4 tracking-[0.5em]">PROJECT_AUDIT_LOG // ID: {project.id.toUpperCase()}</div>
              <h2 className="text-4xl md:text-8xl font-black uppercase italic mb-6 md:mb-8 leading-none tracking-tighter">{project.title}</h2>
              <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 md:px-4 md:py-2 border border-white/20 text-white font-mono text-[10px] md:text-xs hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 space-y-6 md:space-y-8 border-l border-white/10 pl-6 md:pl-8">
              <Stat label="TIMEFRAME" value={project.metrics.timeframe} color="var(--neon-wine)" />
              <Stat label="TEAM_SIZE" value={project.metrics.teamSize} color="white" />
              <Stat label="OUTCOME" value={project.metrics.result} color="var(--yellow-mate)" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-8 md:space-y-12">
              <div>
                <h4 className="font-mono text-[10px] md:text-xs text-[var(--neon-wine)] uppercase tracking-widest mb-4">01_THE_CONSTRAINT</h4>
                <p className="text-lg md:text-xl font-sans font-light opacity-80 leading-relaxed">
                  {lang === 'en' 
                    ? `Developing a high-performance solution for ${project.title} within a ${project.metrics.timeframe} window required extreme prioritization of core features and architectural stability.`
                    : `Desarrollar una solución de alto rendimiento para ${project.title} en un lapso de ${project.metrics.timeframe} requirió una priorización extrema de las características principales y la estabilidad arquitectónica.`}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-[10px] md:text-xs opacity-40 uppercase tracking-widest mb-4">02_THE_EXECUTION</h4>
                <p className="text-lg md:text-xl font-sans font-light opacity-80 leading-relaxed">
                  {lang === 'en'
                    ? `Leveraging ${project.tags.join(', ')}, the system was built with a focus on low-latency data flow and modular scalability. The primary challenge was ${project.description.toLowerCase()}.`
                    : `Aprovechando ${project.tags.join(', ')}, el sistema fue construido con un enfoque en el flujo de datos de baja latencia y la escalabilidad modular. El desafío principal fue ${project.description.toLowerCase()}.`}
                </p>
              </div>
            </div>
            <div className="relative border-2 border-[var(--neon-wine)] p-1 bg-[var(--bg)] aspect-[4/3] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - ${currentImageIndex + 1}`} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {project.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--bg)]/80 border border-[var(--neon-wine)] text-[var(--neon-wine)] flex items-center justify-center z-10 hover:bg-[var(--neon-wine)] hover:text-[var(--bg)] transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--bg)]/80 border border-[var(--neon-wine)] text-[var(--neon-wine)] flex items-center justify-center z-10 hover:bg-[var(--neon-wine)] hover:text-[var(--bg)] transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {project.images.map((_, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          i === currentImageIndex ? "bg-[var(--neon-wine)] w-4" : "bg-white/20"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-12 md:mt-20 pt-12 md:pt-20 border-t border-[var(--line)] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-mono text-[9px] md:text-[10px] opacity-30 tracking-widest uppercase text-center md:text-left">
              VERIFIED_BY_LUIS_DE_LEON // 2026
            </div>
            <div className="flex gap-6">
              {project.github && (
                <a href={project.github} className="text-[var(--neon-celeste)] hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {project.link && (
                <a href={project.link} className="text-[var(--neon-celeste)] hover:text-white transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Stat({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] md:text-[10px] opacity-40 mb-2 tracking-widest uppercase">{label}</div>
      <div className="text-2xl md:text-4xl font-black italic tracking-tighter" style={{ color }}>{value}</div>
    </div>
  );
}
