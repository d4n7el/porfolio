import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  iconBg?: string;
  iconBorder?: string;
  iconColor?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  label,
  value,
  href,
  iconBg = 'bg-cyan-950',
  iconBorder = 'border-cyan-800',
  iconColor = 'text-cyan-400',
}) => {
  return (
    <div className='p-5 rounded-xl bg-cyber-900 border border-slate-800 hover:border-cyan-500/50 transition-all group flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div
          className={`w-10 h-10 rounded-lg ${iconBg} border ${iconBorder} flex items-center justify-center ${iconColor}`}
        >
          {icon}
        </div>
        <div>
          <span className='text-[11px] font-mono text-slate-400 uppercase block'>
            {label}
          </span>
          <a
            className='text-sm font-bold text-white block hover:text-cyan-400 transition-colors'
            href={href}
          >
            {value}
          </a>
        </div>
      </div>
      <a
        className='text-slate-400 hover:text-cyan-400 p-2'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <ExternalLink className='w-4 h-4' />
      </a>
    </div>
  );
};
