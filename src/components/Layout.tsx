import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
}

export function Layout({ children, lang, setLang }: LayoutProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [systemLogs, setSystemLogs] = useState<string[]>(['INITIALIZING_CORE...', 'READY_TO_SHIP']);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const t = TRANSLATIONS[lang];
  const location = useLocation();

  useEffect(() => {
    const logs = [
      'SCANNING_DEPENDENCIES...',
      'OPTIMIZING_LATENCY...',
      'ESTABLISHING_SECURE_LINK...',
      'NEURAL_NET_READY',
      'UPLOADING_PAYLOAD...',
      'SYSTEM_STABLE_V2.0.26'
    ];
    const interval = setInterval(() => {
      setSystemLogs(prev => [...prev.slice(-4), logs[Math.floor(Math.random() * logs.length)]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--neon-wine)] selection:text-[var(--bg)]">
      {/* CRT Scanline Effect */}
      <div className="fixed inset-0 z-[999] pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--neon-wine)] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Reactive Background */}
      <div className="bg-polygons overflow-hidden">
        <motion.div 
          animate={{ 
            x: (mousePos.x - window.innerWidth / 2) * 0.02,
            y: (mousePos.y - window.innerHeight / 2) * 0.02
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] border border-white/5 rotate-45" />
          <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] border border-white/5 -rotate-12" />
          <div className="absolute top-[60%] left-[50%] w-[500px] h-[500px] border border-[var(--neon-wine)]/10 rotate-[60deg]" />
        </motion.div>
      </div>

      {/* System Log Overlay */}
      <div className="fixed bottom-8 left-8 z-[40] font-mono text-[7px] opacity-30 hidden lg:block pointer-events-none">
        <div className="border-l border-[var(--neon-wine)] pl-4 space-y-1">
          {systemLogs.map((log, i) => (
            <div key={i} className={cn(i === systemLogs.length - 1 && "text-[var(--neon-wine)]")}>
              {`> ${log}`}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-start pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto"
        >
          <Link to="/" className="font-mono font-bold text-sm tracking-tighter flex items-center gap-3 border-l-2 border-[var(--neon-wine)] pl-4 py-1 bg-[var(--bg)]/50 backdrop-blur-md">
            <span className="text-white">LUIS_DE_LEON</span>
            <span className="text-[8px] opacity-30 font-normal">v2.0.26</span>
          </Link>
        </motion.div>

        <div className="flex flex-col items-end gap-6 pointer-events-auto">
          <div className="flex gap-3">
            <button 
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="px-4 py-1 border border-white/10 bg-[var(--bg)]/50 backdrop-blur-md text-[9px] font-mono hover:border-[var(--neon-wine)] transition-all uppercase"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
          <div className="flex flex-col gap-3 text-right font-mono text-[9px] tracking-[0.3em] opacity-40 uppercase">
            {location.pathname === '/' ? (
              <>
                <a href="#about" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.about}</a>
                <a href="#experience" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.experience}</a>
                <a href="#projects" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.projects}</a>
                <a href="#awards" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.awards}</a>
                <a href="#education" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.education}</a>
                <a href="#contact" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.contact}</a>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-[var(--neon-wine)] transition-colors">HOME</Link>
                <Link to="/projects" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.projects}</Link>
                <Link to="/awards" className="hover:text-[var(--neon-wine)] transition-colors">{t.nav.awards}</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="p-12 border-t border-[var(--line)] font-mono text-[10px] tracking-[0.5em] opacity-30 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>© 2026 LUIS_DE_LEON // GUATEMALA_CITY_NODE</div>
        <div className="flex gap-12">
          <span>LAT: 14.6349° N</span>
          <span>LON: 90.5069° W</span>
        </div>
        <div className="flex gap-8">
          <a href="https://github.com" className="hover:text-white transition-colors">GH</a>
          <a href="https://linkedin.com" className="hover:text-white transition-colors">LI</a>
          <a href="mailto:luis@deleon.tech" className="hover:text-white transition-colors">EM</a>
        </div>
        <div>BUILT_FOR_ELITE_PERFORMANCE</div>
      </footer>
    </div>
  );
}
