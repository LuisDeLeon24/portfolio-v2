import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project, Translation } from '../types';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  t: Translation;
  lang: 'en' | 'es';
  onOpenCaseStudy: () => void;
  key?: React.Key;
}

export function ProjectCard({ project, index, t, lang, onOpenCaseStudy }: ProjectCardProps) {
  const shapes = ['poly-1', 'poly-2', 'poly-3', 'poly-4', 'poly-5', 'poly-6', 'poly-7'];
  const shapeClass = shapes[index % shapes.length];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "grid md:grid-cols-12 gap-12 items-center",
        index % 2 !== 0 && "md:flex-row-reverse"
      )}
    >
      <div className={cn(
        "md:col-span-7 relative group cursor-pointer",
        index % 2 !== 0 ? "md:order-2" : "md:order-1"
      )} onClick={onOpenCaseStudy}>
        <div className={cn(shapeClass, "border-2 border-[var(--neon-wine)] p-1 bg-[var(--bg)] overflow-hidden")}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className={cn(
        "md:col-span-5",
        index % 2 !== 0 ? "md:order-1" : "md:order-2"
      )}>
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-[var(--neon-wine)] text-[var(--bg)] text-[10px] font-black uppercase tracking-widest">
            TIME_TO_SHIP: {project.metrics.timeframe}
          </span>
          <span className="px-3 py-1 border border-[var(--neon-green)] text-[var(--neon-green)] text-[10px] font-black uppercase tracking-widest">
            STATUS: LIVE
          </span>
        </div>

        <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
          {project.title}
        </h3>
        
        <p className="text-lg font-mono opacity-70 mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map(tag => {
            const isHackathon = tag.toUpperCase().includes('HACKATHON');
            const isAwarded = tag.toUpperCase().includes('AWARDED');
            return (
              <span 
                key={tag} 
                className={cn(
                  "text-[10px] font-mono px-2 py-0.5 border",
                  isHackathon ? "tag-red border-transparent" : 
                  isAwarded ? "tag-yellow border-transparent" : 
                  "text-[var(--neon-celeste)] border-[var(--neon-celeste)]/30"
                )}
              >
                #{tag}
              </span>
            );
          })}
        </div>

        <div className="flex gap-4">
          <button 
            onClick={onOpenCaseStudy}
            className="flex-1 py-4 border-2 border-[var(--neon-wine)] text-[var(--neon-wine)] font-black uppercase text-center text-xs hover:bg-[var(--neon-wine)] hover:text-[var(--bg)] transition-all"
          >
            {t.projects.details}
          </button>
          {project.github && (
            <a 
              href={project.github} 
              className="w-14 h-14 border-2 border-white/10 text-white flex items-center justify-center hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && (
            <a 
              href={project.link} 
              className="w-14 h-14 border-2 border-white/10 text-white flex items-center justify-center hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-all"
              title="Live Project"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
