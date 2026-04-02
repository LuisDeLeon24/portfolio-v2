import React, { useState, useEffect } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // 🔥 AUTOPLAY
  useEffect(() => {
    if (project.images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.images.length, isHovered]);

  return (
    <>
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
            {/* HEADER */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-20">
              <div className="flex-1">
                <div className="font-mono text-[9px] md:text-[10px] text-[var(--neon-wine)] mb-4 tracking-[0.5em]">
                  PROJECT_AUDIT_LOG // ID: {project.id.toUpperCase()}
                </div>
                <h2 className="text-4xl md:text-8xl font-black uppercase italic mb-6 md:mb-8 leading-none tracking-tighter">
                  {project.title}
                </h2>

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

            {/* CONTENT */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
              <div className="space-y-8 md:space-y-12">
                <div>
                  <h4 className="font-mono text-xs text-[var(--neon-wine)] uppercase tracking-widest mb-4">
                    01_THE_CONSTRAINT
                  </h4>
                  <p className="text-lg md:text-xl font-light opacity-80">
                    Developing a high-performance solution for {project.title} within a {project.metrics.timeframe} window required extreme prioritization.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs opacity-40 uppercase tracking-widest mb-4">
                    02_THE_EXECUTION
                  </h4>
                  <p className="text-lg md:text-xl font-light opacity-80">
                    Leveraging {project.tags.join(', ')}, the system was built focusing on performance and modularity.
                  </p>
                </div>
              </div>

              {/* 🔥 CAROUSEL */}
              <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative border-2 border-[var(--neon-wine)] p-1 bg-[var(--bg)] aspect-[4/3] overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]} 
                    alt={`${project.title}`}
                    onClick={() => setIsExpanded(true)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover contrast-125 cursor-zoom-in"
                  />
                </AnimatePresence>

                {project.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2">
                      <ChevronLeft />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2">
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 🔥 FULLSCREEN IMAGE */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center cursor-zoom-out"
          >
            <motion.img
              src={project.images[currentImageIndex]}
              className="max-w-[90%] max-h-[90%] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Stat({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] md:text-[10px] opacity-40 mb-2 tracking-widest uppercase">
        {label}
      </div>
      <div 
        className="text-2xl md:text-4xl font-black italic tracking-tighter break-words leading-tight"
        style={{ color }}
      >
        {value}
      </div>
    </div>
  );
}