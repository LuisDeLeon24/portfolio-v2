import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, TRANSLATIONS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { Project } from '../types';
import { Terminal } from 'lucide-react';

interface ProjectsPageProps {
  lang: 'en' | 'es';
}

export default function ProjectsPage({ lang }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = TRANSLATIONS[lang];

  const featuredProjects = PROJECTS.filter(p => p.featured);
  const allProjectsReversed = [...PROJECTS].reverse();

  return (
    <div className="pt-48 pb-32 px-8 md:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-5 mb-16 opacity-20 font-mono text-[9px] tracking-[0.4em] uppercase">
          <Terminal className="w-4 h-4" />
          <span>PROJECT_DATABASE_v2.0.26 // FULL_ACCESS</span>
        </div>

        <h1 className="text-6xl md:text-[120px] font-black uppercase italic leading-[0.75] tracking-tighter mb-32">
          {t.projects.title}
        </h1>

        {/* Featured Section */}
        {featuredProjects.length > 0 && (
          <section className="mb-64">
            <div className="font-mono text-[10px] text-[var(--neon-wine)] mb-16 tracking-[0.5em] uppercase border-b border-white/10 pb-4">
              // FEATURED_PROJECTS
            </div>
            <div className="space-y-64">
              {featuredProjects.map((project, i) => (
                <ProjectCard 
                  key={`featured-${project.id}`} 
                  project={project} 
                  index={i} 
                  t={t} 
                  lang={lang} 
                  onOpenCaseStudy={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Projects Section */}
        <section>
          <div className="font-mono text-[10px] text-white/30 mb-16 tracking-[0.5em] uppercase border-b border-white/10 pb-4">
            // ALL_RECORDS_REVERSED_CHRONOLOGICAL
          </div>
          <div className="space-y-64">
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
