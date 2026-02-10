import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VisitCount } from 'src/components/visit-count';
const navLinks = [
  {
    name: 'Inicio',
    href: '#hero',
  },
  {
    name: 'Sobre mí',
    href: '#sobre-mi',
  },
  {
    name: 'Experiencia',
    href: '#experiencia',
  },
  {
    name: 'Habilidades',
    href: '#habilidades',
  },
  {
    name: 'Contacto',
    href: '#contacto',
  },
];
export const NavbarDefault = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}
    >
      <div className='max-w-6xl mx-auto px-6 h-20 flex items-center justify-between'>
        <a href='#hero' className='flex items-center gap-2 group'>
          <div className='p-2 rounded-lg bg-surface border border-border group-hover:border-accent/50 transition-colors'>
            <Code2 className='w-6 h-6 text-accent' />
          </div>
          <span className='font-bold text-lg tracking-tight'>
            Daniel Zamora
          </span>
        </a>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-sm font-medium secondary hover:text-accent transition-colors relative group'
            >
              {link.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full' />
            </a>
          ))}
          <VisitCount></VisitCount>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 secondary hover:text-primary'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className='md:hidden bg-surface border-b border-border overflow-hidden'
          >
            <div className='px-6 py-8 flex flex-col gap-6'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-lg font-medium secondary hover:text-accent transition-colors'
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
