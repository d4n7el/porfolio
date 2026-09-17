import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'default';
}

export const Tag: React.FC<TagProps> = ({ children, variant = 'default' }) => {
  const baseClasses =
    'px-2.5 py-1 rounded-md text-xs font-mono border border-slate-700';
  const variantClasses =
    variant === 'cyan'
      ? 'bg-cyber-800 text-cyan-300'
      : 'bg-cyber-800 text-slate-300';

  return (
    <span className={`${baseClasses} ${variantClasses}`}>{children}</span>
  );
};
