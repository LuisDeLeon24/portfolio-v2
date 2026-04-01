import React from 'react';

export function Stat({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] opacity-40 mb-2 tracking-widest uppercase">{label}</div>
      <div className="text-4xl font-black italic" style={{ color }}>{value}</div>
    </div>
  );
}

export function ContactItem({ icon, label, value, href, color }: { icon: React.ReactNode, label: string, value: string, href: string, color: string }) {
  return (
    <a href={href} className="flex items-center gap-6 group">
      <div className="p-3 border-2 transition-all group-hover:scale-110" style={{ borderColor: color, color }}>
        {icon}
      </div>
      <div>
        <div className="font-mono text-[8px] opacity-40 uppercase tracking-widest mb-1">{label}</div>
        <div className="font-mono text-sm group-hover:text-white transition-colors">{value}</div>
      </div>
    </a>
  );
}
