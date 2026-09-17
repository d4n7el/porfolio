import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, ChevronDown, Check } from 'lucide-react';

export const SelectLanguage = () => {
  const [, i18n] = useTranslation('translation');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { key: 'es', label: 'Spanish', flag: '🇪🇸' },
    { key: 'en', label: 'English', flag: '🇬🇧' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative' ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-1.5 p-2 rounded-full text-slate-300 hover:text-cyan-300 hover:bg-cyber-800 transition-colors text-xs font-medium focus:outline-none'
        aria-label='Seleccionar idioma'
      >
        <Languages className='w-4 h-4 text-cyan-400' />
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>

      {isOpen && (
        <div className='absolute right-0 top-full mt-2 w-36 rounded-xl bg-[#0f131c]/95 backdrop-blur-md border border-cyan-500/30 shadow-2xl p-1.5 z-50'>
          {languages.map((lang) => {
            const isActive = lang.key === i18n.language;
            return (
              <button
                key={lang.key}
                onClick={() => {
                  i18n.changeLanguage(lang.key);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-cyber-800 mt-0.5'
                }`}
              >
                <span className='flex items-center gap-2'>
                  <span className='text-sm leading-none'>{lang.flag}</span>
                  <span>{lang.label}</span>
                </span>
                {isActive && <Check className='w-3 h-3 text-cyan-400' />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
