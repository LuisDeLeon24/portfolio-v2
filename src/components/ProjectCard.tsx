import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const shapes = ['poly-1', 'poly-2', 'poly-3', 'poly-4', 'poly-5', 'poly-6', 'poly-7'];
  const shapeClass = shapes[index % shapes.length];

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "grid md:grid-cols-12 gap-8 md:gap-12 items-center",
        index % 2 !== 0 && "md:flex-row-reverse"
      )}
    >
      <div className={cn(
        "md:col-span-7 relative group cursor-pointer",
        index % 2 !== 0 ? "md:order-2" : "md:order-1"
      )} onClick={onOpenCaseStudy}>
        <div className={cn(shapeClass, "relative border-2 border-[var(--neon-wine)] p-1 bg-[var(--bg)] overflow-hidden aspect-[4/3]")}>
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - ${currentImageIndex + 1}`} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover  scale-105  group-hover:scale-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--bg)]/80 border border-[var(--neon-wine)] text-[var(--neon-wine)] flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hover:bg-[var(--neon-wine)] hover:text-[var(--bg)]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--bg)]/80 border border-[var(--neon-wine)] text-[var(--neon-wine)] flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hover:bg-[var(--neon-wine)] hover:text-[var(--bg)]"
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

      <div className={cn(
        "md:col-span-5",
        index % 2 !== 0 ? "md:order-1" : "md:order-2"
      )}>
        <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-6">
          <span className="px-3 py-1 bg-[var(--neon-wine)] text-[var(--bg)] text-[10px] font-black uppercase tracking-widest">
            TIME_TO_SHIP: {project.metrics.timeframe}
          </span>
          <span className="px-3 py-1 border border-[var(--neon-green)] text-[var(--neon-green)] text-[10px] font-black uppercase tracking-widest">
            STATUS: LIVE
          </span>
        </div>

        <h3 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter uppercase italic">
          {project.title}
        </h3>
        
        <p className="text-base md:text-lg font-mono opacity-70 mb-6 md:mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          {project.tags.map(tag => {
            const isHackathon = tag.toUpperCase().includes('HACKATHON');
            const isAwarded = tag.toUpperCase().includes('AWARDED');
            const isFreelance = tag.toUpperCase().includes('FREELANCE');
            return (
              <span 
                key={tag} 
                className={cn(
                  "text-[10px] font-mono px-2 py-0.5 border",
                  isHackathon ? "tag-red border-transparent" : 
                  isAwarded ? "tag-yellow border-transparent" : 
                  isFreelance ? "tag-green border-transparent" :
                  "text-[var(--neon-celeste)] border-[var(--neon-celeste)]/30"
                )}
              >
                #{tag}
              </span>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onOpenCaseStudy}
            className="flex-1 py-4 border-2 border-[var(--neon-wine)] text-[var(--neon-wine)] font-black uppercase text-center text-xs hover:bg-[var(--neon-wine)] hover:text-[var(--bg)] transition-all"
          >
            {t.projects.details}
          </button>
          <div className="flex gap-4">
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
      </div>
    </motion.div>
  );
}
