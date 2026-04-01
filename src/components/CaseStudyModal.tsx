import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
  lang: 'en' | 'es';
}

export function CaseStudyModal({ project, onClose, lang }: CaseStudyModalProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-24 bg-[var(--bg)]/95 backdrop-blur-xl cursor-pointer"
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
          className="absolute top-8 right-8 z-10 p-4 border border-[var(--line)] hover:border-[var(--neon-red)] hover:text-[var(--neon-red)] transition-all font-mono text-xs uppercase tracking-widest"
        >
          CLOSE_X
        </button>

        <div className="p-8 md:p-20">
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="flex-1">
              <div className="font-mono text-[10px] text-[var(--neon-wine)] mb-4 tracking-[0.5em]">PROJECT_AUDIT_LOG // ID: {project.id.toUpperCase()}</div>
              <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-8 leading-none">{project.title}</h2>
              <div className="flex flex-wrap gap-4 mb-12">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 border border-white/20 text-white font-mono text-xs hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 space-y-8 border-l border-white/10 pl-8">
              <Stat label="TIMEFRAME" value={project.metrics.timeframe} color="var(--neon-wine)" />
              <Stat label="TEAM_SIZE" value={project.metrics.teamSize} color="white" />
              <Stat label="OUTCOME" value={project.metrics.result} color="var(--yellow-mate)" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h4 className="font-mono text-xs text-[var(--neon-wine)] uppercase tracking-widest mb-4">01_THE_CONSTRAINT</h4>
                <p className="text-xl font-sans font-light opacity-80 leading-relaxed">
                  {lang === 'en' 
                    ? `Developing a high-performance solution for ${project.title} within a ${project.metrics.timeframe} window required extreme prioritization of core features and architectural stability.`
                    : `Desarrollar una solución de alto rendimiento para ${project.title} en un lapso de ${project.metrics.timeframe} requirió una priorización extrema de las características principales y la estabilidad arquitectónica.`}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-xs opacity-40 uppercase tracking-widest mb-4">02_THE_EXECUTION</h4>
                <p className="text-xl font-sans font-light opacity-80 leading-relaxed">
                  {lang === 'en'
                    ? `Leveraging ${project.tags.join(', ')}, the system was built with a focus on low-latency data flow and modular scalability. The primary challenge was ${project.description.toLowerCase()}.`
                    : `Aprovechando ${project.tags.join(', ')}, el sistema fue construido con un enfoque en el flujo de datos de baja latencia y la escalabilidad modular. El desafío principal fue ${project.description.toLowerCase()}.`}
                </p>
              </div>
            </div>
            <div className="trapezoid border-2 border-[var(--neon-wine)] p-1 bg-[var(--bg)] h-[400px]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="mt-20 pt-20 border-t border-[var(--line)] flex justify-between items-center">
            <div className="font-mono text-[10px] opacity-30 tracking-widest uppercase">
              VERIFIED_BY_LUIS_DE_LEON // 2026
            </div>
            <div className="flex gap-6">
              {project.github && (
                <a href={project.github} className="text-[var(--neon-celeste)] hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              )}
              <ExternalLink className="w-6 h-6 opacity-30" />
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
      <div className="font-mono text-[10px] opacity-40 mb-2 tracking-widest uppercase">{label}</div>
      <div className="text-4xl font-black italic" style={{ color }}>{value}</div>
    </div>
  );
}
