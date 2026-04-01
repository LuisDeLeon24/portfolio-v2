import React from 'react';
import { ACHIEVEMENTS, TRANSLATIONS } from '../constants';
import { AchievementCard } from '../components/AchievementCard';
import { Terminal } from 'lucide-react';

interface AwardsPageProps {
  lang: 'en' | 'es';
}

export default function AwardsPage({ lang }: AwardsPageProps) {
  const t = TRANSLATIONS[lang];

  const featuredAwards = ACHIEVEMENTS.filter(a => a.featured);
  const allAwardsReversed = [...ACHIEVEMENTS].reverse();

  return (
    <div className="pt-48 pb-32 px-8 md:px-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-5 mb-16 opacity-20 font-mono text-[9px] tracking-[0.4em] uppercase">
          <Terminal className="w-4 h-4" />
          <span>RECOGNITION_DATABASE_v2.0.26 // FULL_ACCESS</span>
        </div>

        <h1 className="text-6xl md:text-[120px] font-black uppercase italic leading-[0.75] tracking-tighter mb-32">
          {t.awards.title}
        </h1>

        {/* Featured Section */}
        {featuredAwards.length > 0 && (
          <section className="mb-64">
            <div className="font-mono text-[10px] text-[var(--neon-wine)] mb-16 tracking-[0.5em] uppercase border-b border-white/10 pb-4">
              // FEATURED_RECOGNITIONS
            </div>
            <div className="relative border-l border-white/10 pl-16 space-y-32">
              {featuredAwards.map((achievement, i) => (
                <AchievementCard 
                  key={`featured-${i}`} 
                  achievement={achievement} 
                  index={i} 
                />
              ))}
            </div>
          </section>
        )}

        {/* All Awards Section */}
        <section>
          <div className="font-mono text-[10px] text-white/30 mb-16 tracking-[0.5em] uppercase border-b border-white/10 pb-4">
            // ALL_RECORDS_REVERSED_CHRONOLOGICAL
          </div>
          <div className="relative border-l border-white/10 pl-16 space-y-32">
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
