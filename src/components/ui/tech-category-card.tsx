import React from 'react';

interface TechItem {
  name: string;
  level: string;
  isHighlight?: boolean;
}

interface TechCategoryCardProps {
  title: string;
  icon: React.ReactNode;
  items: TechItem[];
}

export const TechCategoryCard: React.FC<TechCategoryCardProps> = ({
  title,
  icon,
  items,
}) => {
  return (
    <div className='p-6 rounded-2xl bg-cyber-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between'>
      <div>
        <div className='flex items-center gap-2.5 text-cyan-400 mb-5'>
          <div className='p-2 rounded-lg bg-cyan-950 border border-cyan-800/60'>
            {icon}
          </div>
          <h4 className='font-bold text-white text-base'>{title}</h4>
        </div>
        <div className='space-y-3'>
          {items.map((item, i) => (
            <div
              key={i}
              className='p-2.5 rounded-lg bg-cyber-850 border border-slate-800'
            >
              <div className='flex items-center justify-between text-xs font-semibold text-slate-200'>
                <span className='flex items-center gap-2'>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.isHighlight ? 'bg-cyan-400' : 'bg-slate-500'
                    }`}
                  />
                  {item.name}
                </span>
                <span
                  className={`font-mono text-[11px] ${
                    item.isHighlight ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {item.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
