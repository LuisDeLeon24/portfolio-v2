import React from 'react';
import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import { Achievement } from '../types';
import { cn } from '../lib/utils';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  key?: React.Key;
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -left-[73px] top-0 w-4 h-4 bg-[var(--bg)] border border-white/20 flex items-center justify-center group-hover:border-[var(--neon-wine)] transition-all">
        <div className="w-1 h-1 bg-white/20 group-hover:bg-[var(--neon-wine)] transition-all" />
      </div>
      <div className="font-mono text-[9px] text-[var(--yellow-mate)] mb-4 tracking-[0.3em] flex items-center gap-3 uppercase font-bold">
        <Trophy className="w-3 h-3" />
        {achievement.date}
      </div>
      <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter group-hover:text-white transition-colors uppercase">{achievement.title}</h3>
      <div className="text-xl md:text-2xl opacity-50 font-sans font-light leading-relaxed border-l border-white/10 pl-10 relative mb-8">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-[var(--neon-wine)] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
        {achievement.description}
      </div>

      {achievement.images && achievement.images.length > 0 && (
        <div className="flex flex-wrap gap-4 pl-10">
          {achievement.images.map((img, imgIdx) => {
            const shapes = ['poly-1', 'poly-2', 'poly-3', 'poly-4', 'poly-5', 'poly-6', 'poly-7'];
            const shapeClass = shapes[(index + imgIdx) % shapes.length];
            return (
              <motion.div 
                key={imgIdx}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={cn(shapeClass, "w-32 h-32 md:w-48 md:h-48 border border-white/10 p-0.5 bg-white/5 overflow-hidden")}
              >
                <img 
                  src={img} 
                  alt={`${achievement.title} - ${imgIdx}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
