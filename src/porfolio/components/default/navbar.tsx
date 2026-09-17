import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { VisitCount } from 'src/components/visit-count';
import { SelectLanguage } from 'src/components/select-languages/select-language';

export const NavbarDefault = () => {
  const [t] = useTranslation('translation');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t('about'), href: '#sobre-mi' },
    { name: t('experience'), href: '#experiencia' },
    { name: t('skills'), href: '#habilidades' },
    { name: t('contact'), href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6'>
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-6 py-3.5 rounded-full border shadow-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f131c]/80 backdrop-blur-md border-slate-800/80 hover:border-slate-700/80'
            : 'bg-[#0f131c]/60 backdrop-blur-md border-slate-800/50'
        }`}
      >
        {/* Logo + VisitCount */}
        <div className='flex items-center gap-3'>
          <a
            href='#hero'
            className='flex items-center gap-2 group text-white font-bold tracking-tight text-lg'
          >
            <span className='text-cyan-400 font-mono tracking-tighter text-base transition-transform duration-300 group-hover:-translate-x-0.5'>
              &lt;/&gt;
            </span>
            <span className='text-slate-100 group-hover:text-white transition-colors'>
              Daniel Zamora
            </span>
          </a>
          <VisitCount />
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-8 text-sm font-medium text-slate-300'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='hover:text-cyan-400 transition-colors duration-200'
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Language Selector + CTA */}
        <div className='hidden md:flex items-center gap-3'>
          <SelectLanguage />
          <a
            href='#contacto'
            className='inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide uppercase text-slate-200 bg-cyber-800/90 hover:bg-cyber-750 hover:text-white rounded-full border border-slate-700 hover:border-cyan-500/50 shadow-sm transition-all duration-300'
          >
            <span>{t('letsTalk')}</span>
            <ArrowRight className='w-3.5 h-3.5 text-cyan-400' />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 text-slate-400 hover:text-white transition-colors'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden fixed top-20 left-4 right-4 bg-[#0f131c]/95 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl'
          >
            <div className='px-6 py-6 flex flex-col gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors'
                >
                  {link.name}
                </a>
              ))}
              <div className='flex items-center gap-3 mt-2'>
                <SelectLanguage />
                <a
                  href='#contacto'
                  onClick={() => setIsOpen(false)}
                  className='inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-slate-200 bg-cyber-800/90 hover:bg-cyber-750 hover:text-white rounded-full border border-slate-700 hover:border-cyan-500/50 shadow-sm transition-all duration-300 flex-1'
                >
                  <span>{t('letsTalk')}</span>
                  <ArrowRight className='w-3.5 h-3.5 text-cyan-400' />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
