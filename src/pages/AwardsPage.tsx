import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACHIEVEMENTS, TRANSLATIONS } from '../constants';
import { AchievementCard } from '../components/AchievementCard';
import { Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface AwardsPageProps {
  lang: 'en' | 'es';
}

export default function AwardsPage({ lang }: AwardsPageProps) {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const t = TRANSLATIONS[lang];

  const featuredAwards = ACHIEVEMENTS.filter(a => a.featured);
  const allAwardsReversed = [...ACHIEVEMENTS].reverse();

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredAwards.length);
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredAwards.length) % featuredAwards.length);
  };

  return (
    <div className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-5 mb-12 md:mb-16 opacity-20 font-mono text-[9px] tracking-[0.4em] uppercase">
          <Terminal className="w-4 h-4" />
          <span>RECOGNITION_DATABASE_v2.0.26 // FULL_ACCESS</span>
        </div>

        <h1 className="text-5xl md:text-[120px] font-black uppercase italic leading-[0.75] tracking-tighter mb-20 md:mb-32">
          {t.awards.title}
        </h1>

        {/* Featured Section Carousel */}
        {featuredAwards.length > 0 && (
          <section className="mb-32 md:mb-64">
            <div className="flex justify-between items-end mb-12 md:mb-16 border-b border-white/10 pb-4">
              <div className="font-sans font-black text-xl md:text-2xl text-[var(--neon-wine)] tracking-tighter uppercase italic">
                // FEATURED_RECOGNITIONS
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

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeaturedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative border-l border-white/10 pl-8 md:pl-16"
                >
                  <AchievementCard 
                    achievement={featuredAwards[currentFeaturedIndex]} 
                    index={currentFeaturedIndex} 
                  />
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2 mt-12 justify-center">
                {featuredAwards.map((_, i) => (
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

        {/* All Awards Section */}
        <section>
          <div className="font-mono text-[9px] md:text-[10px] text-white/30 mb-12 md:mb-16 tracking-[0.5em] uppercase border-b border-white/10 pb-4">
            // ALL_RECORDS_REVERSED_CHRONOLOGICAL
          </div>
          <div className="relative border-l border-white/10 pl-8 md:pl-16 space-y-24 md:space-y-32">
            {allAwardsReversed.map((achievement, i) => (
              <AchievementCard 
                key={`all-${i}`} 
                achievement={achievement} 
                index={i} 
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
