import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => {
  return (
    <div className='flex items-center gap-3 mb-4'>
      <span className='w-8 h-[2px] bg-cyan-400' />
      <h2 className='text-xs uppercase tracking-widest font-mono text-cyan-400'>
        {children}
      </h2>
    </div>
  );
};
