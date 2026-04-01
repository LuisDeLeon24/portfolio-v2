import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  Trophy,
  Zap,
  Activity,
  Shield,
  Layers,
  Cpu,
  Globe,
  Database,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { PROJECTS, SKILL_GROUPS, ACHIEVEMENTS, EXPERIENCE, EDUCATION, TRANSLATIONS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal, Stat } from '../components/CaseStudyModal';
import { AchievementCard } from '../components/AchievementCard';
import { ContactItem } from '../components/Common';
import { Project } from '../types';

interface HomePageProps {
  lang: 'en' | 'es';
}

export default function HomePage({ lang }: HomePageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = TRANSLATIONS[lang];

  // Get 3 most recent (last 3 in array, reversed to show newest first)
  const recentProjects = PROJECTS.slice(-3).reverse();
  const recentAwards = ACHIEVEMENTS.slice(-3).reverse();

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-screen flex flex-col justify-center px-6 md:px-32 relative py-20 md:py-0">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-[100px] lg:text-[140px] font-black tracking-tighter leading-[0.85] mb-8 md:mb-12 uppercase italic">
              {t.hero.headline.split(' ').map((word, i) => (
                <span key={i} className={cn(
                  "block",
                  (word.toLowerCase() === 'functional' || word.toLowerCase() === 'funcionales') && "text-[var(--neon-wine)] text-glow-wine glitch-text",
                )} data-text={word}>
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl border-l-2 border-white/20 pl-6 md:pl-10 py-4 md:py-6 mb-12 md:mb-16"
          >
            <p className="text-lg md:text-3xl font-sans font-light opacity-60 leading-relaxed tracking-tight">
              {t.hero.subheadline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-8"
          >
            <a 
              href="#contact"
              className="px-8 md:px-12 py-4 md:py-6 bg-white text-black font-black uppercase tracking-tighter hover:bg-[var(--neon-wine)] hover:text-white transition-all flex items-center justify-center gap-4"
            >
              {t.hero.cta}
              <Zap className="w-5 h-5 fill-current" />
            </a>
            <a 
              href="#projects"
              className="px-8 md:px-12 py-4 md:py-6 border-2 border-white/10 text-white font-black uppercase tracking-tighter hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-all text-center"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Decorative Side Text */}
        <div className="absolute right-8 bottom-32 vertical-rl rotate-180 font-mono text-[8px] tracking-[0.8em] opacity-10 hidden md:block">
          SYSTEM_STATUS: OPTIMIZED // LATENCY: 14MS // BUILD_VERSION: 2.0.26
        </div>
      </section>

      {/* About Section - Structured Editorial */}
      <section id="about" className="py-24 md:py-48 px-6 md:px-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.01] -skew-x-12 translate-x-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="poly-2 border border-white/10 p-1 bg-white/5 relative z-10">
                  <img 
                    src="https://picsum.photos/seed/luis/800/1000" 
                    alt="Luis De León" 
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 lg:-right-12 p-4 md:p-6 bg-white text-black font-mono font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em] rotate-2 z-20 shadow-2xl">
                  BUILDER_ID: LUIS_DE_LEON
                </div>
                {/* Decorative frame */}
                <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 border-l border-t border-white/10 pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="space-y-8 md:space-y-12">
                <div>
                  <div className="font-mono text-[9px] md:text-[10px] text-[var(--neon-wine)] mb-4 md:mb-6 tracking-[0.5em] uppercase">
                    // BIOGRAPHY_DATA_STREAM
                  </div>
                  <h2 className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 md:mb-12 uppercase italic text-white leading-[0.8] tracking-tighter">
                    {t.about.title}
                  </h2>
                  <p className="text-xl md:text-4xl font-sans font-light leading-tight opacity-80 tracking-tight max-w-3xl">
                    {t.about.content}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-12 md:pt-16">
                  <Stat label="PROJECTS_SHIPPED" value="50+" color="white" />
                  <Stat label="HACKATHONS_WON" value="12" color="var(--red-mate)" />
                  <Stat label="UPTIME_PERCENT" value="99.9" color="var(--green-mate)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Professional Audit */}
      <section id="experience" className="py-24 md:py-48 px-6 md:px-32 border-t border-white/5 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-5 mb-12 md:mb-16 opacity-20 font-mono text-[9px] tracking-[0.4em] uppercase">
            <Activity className="w-4 h-4" />
            <span>PROFESSIONAL_HISTORY_v2.0.26 // VERIFIED</span>
          </div>
          
          <h2 className="text-5xl md:text-9xl font-black mb-16 md:mb-32 uppercase italic text-white tracking-tighter">
            {t.experience.title}
          </h2>

          <div className="grid gap-8 md:gap-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 border border-white/10 bg-[var(--bg)] group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--neon-wine)] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 mb-6 md:mb-8">
                  <div>
                    <div className="font-mono text-[9px] md:text-[10px] text-[var(--neon-wine)] mb-2 tracking-widest uppercase">{exp.period}</div>
                    <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter">{exp.company}</h3>
                  </div>
                  <div className="md:text-right">
                    <div className="text-lg md:text-2xl font-sans font-light opacity-60 uppercase">{exp.role}</div>
                  </div>
                </div>
                <p className="text-base md:text-xl font-sans font-light opacity-50 leading-relaxed mb-6 md:mb-8 max-w-4xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="px-2 md:px-3 py-1 border border-white/10 font-mono text-[8px] md:text-[9px] opacity-40 group-hover:opacity-100 group-hover:border-[var(--neon-wine)] transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section - Broken Grid */}
      <section id="skills" className="py-24 md:py-48 px-6 md:px-32 bg-[var(--bg)] relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-9xl font-black mb-16 md:mb-32 uppercase italic text-right text-white cursor-default">
            {t.skills.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={cn(
                  "p-8 md:p-12 border border-white/20 bg-white/[0.02] backdrop-blur-sm transition-all group hover:border-[var(--neon-wine)] hover:shadow-[0_0_40px_rgba(75,1,29,0.1)]",
                  i === 0 ? "md:mt-24" : i === 1 ? "" : "md:mt-12"
                )}
              >
                <div className="flex items-center gap-5 mb-8 md:mb-10">
                  {i === 0 ? (
                    <Globe className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-[var(--neon-wine)] transition-all" />
                  ) : i === 1 ? (
                    <Cpu className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-[var(--neon-wine)] transition-all" />
                  ) : (
                    <Database className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-[var(--neon-wine)] transition-all" />
                  )}
                  <h3 className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] group-hover:text-[var(--neon-wine)] transition-all">{group.title}</h3>
                </div>
                <div className="space-y-4 md:space-y-5">
                  {group.skills.map((skill, si) => (
                    <div key={si} className="flex items-center gap-4 group">
                      <div className="w-1 h-1 bg-white/20 group-hover:bg-[var(--neon-wine)] group-hover:w-3 transition-all" />
                      <span className="font-mono text-[10px] md:text-[11px] opacity-40 group-hover:opacity-100 transition-all">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase - Diagonal Cuts */}
      <section id="projects" className="py-24 md:py-48 px-6 md:px-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-40 gap-8 md:gap-10">
            <h2 className="text-5xl md:text-[160px] font-black uppercase italic leading-[0.75] tracking-tighter">
              {t.projects.title}
            </h2>
            <Link 
              to="/projects" 
              className="px-6 md:px-8 py-3 md:py-4 border border-white/10 text-white font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-all flex items-center gap-3"
            >
              {t.projects.viewMore}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-32 md:space-y-64">
            {recentProjects.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
                t={t} 
                lang={lang} 
                onOpenCaseStudy={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="mt-24 md:mt-40 flex justify-center">
            <Link 
              to="/projects"
              className="px-10 md:px-16 py-6 md:py-8 border-2 border-[var(--neon-wine)] text-[var(--neon-wine)] font-black uppercase tracking-tighter hover:bg-[var(--neon-wine)] hover:text-[var(--bg)] transition-all text-lg md:text-xl"
            >
              {t.projects.seeMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Awards - Vertical Audit Timeline */}
      <section id="awards" className="py-24 md:py-48 px-6 md:px-32 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-12 md:mb-16 opacity-20 font-mono text-[9px] tracking-[0.4em] uppercase">
            <Terminal className="w-4 h-4" />
            <span>RECOGNITION_LOG_v2.0.26 // ACCESS_GRANTED</span>
          </div>
          
          <h2 className="text-5xl md:text-9xl font-black mb-16 md:mb-32 uppercase italic text-white tracking-tighter">
            {t.awards.title}
          </h2>

          <div className="relative border-l border-white/10 pl-8 md:pl-16 space-y-24 md:space-y-32">
            {recentAwards.map((achievement, i) => (
              <AchievementCard 
                key={i} 
                achievement={achievement} 
                index={i} 
              />
            ))}
          </div>
          
          <div className="mt-24 md:mt-40 flex justify-center">
            <Link 
              to="/awards"
              className="px-10 md:px-16 py-6 md:py-8 border-2 border-[var(--neon-wine)] text-[var(--neon-wine)] font-black uppercase tracking-tighter hover:bg-[var(--neon-wine)] hover:text-[var(--bg)] transition-all text-lg md:text-xl"
            >
              {t.awards.seeMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section - Academic Audit */}
      <section id="education" className="py-24 md:py-48 px-6 md:px-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-5 mb-12 md:mb-16 opacity-20 font-mono text-[9px] tracking-[0.4em] uppercase">
            <Shield className="w-4 h-4" />
            <span>ACADEMIC_CREDENTIALS_v2.0.26 // VERIFIED</span>
          </div>
          
          <h2 className="text-5xl md:text-9xl font-black mb-16 md:mb-32 uppercase italic text-white tracking-tighter">
            {t.education.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {EDUCATION.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 border border-white/10 bg-[var(--bg)] relative group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-[var(--neon-wine)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-mono text-[9px] md:text-[10px] text-[var(--neon-wine)] mb-4 tracking-widest uppercase">{edu.period}</div>
                <h3 className="text-2xl md:text-4xl font-black uppercase italic mb-4 tracking-tighter">{edu.institution}</h3>
                <div className="text-lg md:text-xl font-sans font-light opacity-80 mb-6 uppercase tracking-tight">{edu.degree}</div>
                <p className="font-sans font-light opacity-50 leading-relaxed text-sm md:text-base">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - High Impact */}
      <section id="contact" className="py-24 md:py-48 px-6 md:px-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-[120px] lg:text-[160px] font-black uppercase italic mb-6 md:mb-8 leading-[0.8] tracking-tighter">
              {t.contact.title}
            </h2>
            <p className="text-lg md:text-3xl font-sans font-light opacity-60 tracking-tight max-w-4xl">
              {lang === 'en' ? 'ESTABLISHING_CONNECTION_FOR_ELITE_OPS.' : 'ESTABLECIENDO_CONEXION_PARA_OPERACIONES_DE_ELITE.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <ContactItem icon={<Mail />} label={t.contact.email} value="luis@deleon.tech" href="mailto:luis@deleon.tech" color="white" />
                <ContactItem icon={<Github />} label={t.contact.github} value="github.com/luisdeleon" href="https://github.com" color="white" />
                <ContactItem icon={<Linkedin />} label={t.contact.linkedin} value="linkedin.com/in/luisdeleon" href="https://linkedin.com" color="white" />
              </div>
              
              <div className="pt-8 md:pt-12 border-t border-white/10">
                <div className="font-mono text-[9px] md:text-[10px] opacity-30 tracking-[0.5em] uppercase">
                  SECURE_CHANNEL_ACTIVE // ENCRYPTION_ENABLED
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 md:p-20 border border-white/10 bg-[var(--bg)] relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--neon-wine)] animate-scan" />
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-8 md:mb-12">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">
                      {lang === 'en' ? 'READY_TO_SHIP?' : '¿LISTO_PARA_ENVIAR?'}
                    </h3>
                    <p className="font-sans font-light opacity-50 text-base md:text-lg leading-relaxed max-w-md">
                      {lang === 'en' 
                        ? 'I am currently accepting high-signal collaborations and strategic engineering roles.' 
                        : 'Actualmente acepto colaboraciones de alta señal y roles de ingeniería estratégica.'}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 border border-[var(--neon-wine)] flex items-center justify-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--neon-wine)]/20 animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <a 
                    href="mailto:luis@deleon.tech"
                    className="py-6 md:py-8 bg-white text-black font-black uppercase text-center hover:bg-[var(--neon-wine)] hover:text-white transition-all tracking-tighter"
                  >
                    {lang === 'en' ? 'INITIATE_TRANSMISSION' : 'INICIAR_TRANSMISION'}
                  </a>
                  <button 
                    className="py-6 md:py-8 border border-white/10 text-white font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] hover:border-[var(--neon-wine)] hover:text-[var(--neon-wine)] transition-all flex items-center justify-center gap-3"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    {lang === 'en' ? 'EXPORT_RESUME_DATA_v2.pdf' : 'EXPORTAR_CV_DATA_v2.pdf'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            lang={lang}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
