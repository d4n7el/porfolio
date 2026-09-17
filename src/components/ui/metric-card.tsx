import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  category?: string;
  iconColor?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  category,
  iconColor = 'text-cyan-400',
}) => {
  return (
    <div className='p-6 rounded-xl bg-cyber-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all'>
      <div className='flex items-center justify-between mb-3'>
        <span className={iconColor}>{icon}</span>
        {category && (
          <span className='text-[10px] font-mono uppercase text-slate-500'>
            {category}
          </span>
        )}
      </div>
      <div className='text-3xl font-extrabold text-white mb-1'>{value}</div>
      <div className='text-xs font-medium text-slate-400'>{label}</div>
    </div>
  );
};
