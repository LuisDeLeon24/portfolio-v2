import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, TRANSLATIONS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { Project } from '../types';
import { Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectsPageProps {
  lang: 'en' | 'es';
}

export default function ProjectsPage({ lang }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const t = TRANSLATIONS[lang];

  const featuredProjects = PROJECTS.filter(p => p.featured);
  const allProjectsReversed = [...PROJECTS].reverse();

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-5 mb-12 md:mb-16 opacity-20 font-mono text-[9px] tracking-[0.4em] uppercase">
          <Terminal className="w-4 h-4" />
          <span>PROJECT_DATABASE_v2.0.26 // FULL_ACCESS</span>
        </div>

        <h1 className="text-5xl md:text-[120px] font-black uppercase italic leading-[0.75] tracking-tighter mb-20 md:mb-32">
          {t.projects.title}
        </h1>

        {/* Featured Section Carousel */}
        {featuredProjects.length > 0 && (
          <section className="mb-32 md:mb-64">
            <div className="flex justify-between items-end mb-12 md:mb-16 border-b border-white/10 pb-4">
              <div className="font-sans font-black text-xl md:text-2xl text-[var(--neon-wine)] tracking-tighter uppercase italic">
                // FEATURED_PROJECTS
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={prevFeatured}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextFeatured}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative min-h-[600px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredProjects[currentFeaturedIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard 
                    project={featuredProjects[currentFeaturedIndex]} 
                    index={currentFeaturedIndex} 
                    t={t} 
                    lang={lang} 
                    onOpenCaseStudy={() => setSelectedProject(featuredProjects[currentFeaturedIndex])}
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="flex gap-2 mt-12 justify-center">
                {featuredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentFeaturedIndex(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      i === currentFeaturedIndex ? "bg-[var(--neon-wine)] w-8" : "bg-white/20"
                    )}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Projects Section */}
        <section>
          <div className="font-mono text-[9px] md:text-[10px] text-white/30 mb-12 md:mb-16 tracking-[0.5em] uppercase border-b border-white/10 pb-4">
            // ALL_RECORDS_REVERSED_CHRONOLOGICAL
          </div>
          <div className="space-y-32 md:space-y-64">
            {allProjectsReversed.map((project, i) => (
              <ProjectCard 
                key={`all-${project.id}`} 
                project={project} 
                index={i} 
                t={t} 
                lang={lang} 
                onOpenCaseStudy={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
