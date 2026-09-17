import React from 'react';
import { Tag } from './tag';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  isActual?: boolean;
  description?: string;
  bullets?: string[];
  tags: { label: string; variant?: 'cyan' | 'default' }[];
  companyIcon?: React.ReactNode;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  isActual = false,
  bullets = [],
  tags,
  companyIcon,
}) => {
  return (
    <div className='relative rounded-2xl bg-cyber-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-8 transition-all duration-300 group shadow-lg'>
      <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6'>
        <div>
          <div className='flex items-center gap-3 flex-wrap'>
            <h4 className='text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors'>
              {role}
            </h4>
            {isActual && (
              <span className='px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-950 border border-cyan-800 text-cyan-400'>
                Actual
              </span>
            )}
          </div>
          <div className='flex items-center gap-2 text-slate-300 font-medium text-sm mt-1'>
            {companyIcon}
            <span className='text-white font-semibold'>{company}</span>
          </div>
        </div>
        <div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-850 border border-slate-800 text-xs font-mono text-slate-400 self-start'>
          <span className='text-cyan-400 text-[11px]'>📅</span>
          <span>{period}</span>
        </div>
      </div>

      {bullets.length > 0 && (
        <ul className='space-y-3 text-sm text-slate-300 mb-6'>
          {bullets.map((bullet, i) => (
            <li key={i} className='flex items-start gap-3'>
              <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0' />
              <span dangerouslySetInnerHTML={{ __html: bullet }} />
            </li>
          ))}
        </ul>
      )}

      <div className='flex flex-wrap gap-2 pt-4 border-t border-slate-800/80'>
        {tags.map((tag, i) => (
          <Tag key={i} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>
    </div>
  );
};
