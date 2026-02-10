import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';

export const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer
      id='contacto'
      className='py-24 relative border-t border-border bg-background'
    >
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className='mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            ¿Listo para trabajar juntos?
          </h2>
          <p className='text-xl secondary max-w-2xl mx-auto mb-10'>
            Actualmente estoy disponible para nuevos proyectos y oportunidades.
            Si tienes una idea en mente o necesitas ayuda con tu próximo
            desarrollo, hablemos.
          </p>

          <a
            href='mailto:dfzortiz@gmail.com'
            className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-background font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
          >
            <Mail className='w-5 h-5' />
            dfzortiz@gmail.com
          </a>
        </motion.div>

        <div className='flex justify-center gap-8 mb-16'>
          <SocialLink
            href='https://github.com'
            icon={<Github className='w-6 h-6' />}
            label='GitHub'
          />
          <SocialLink
            href='https://linkedin.com'
            icon={<Linkedin className='w-6 h-6' />}
            label='LinkedIn'
          />
          <SocialLink
            href='https://wa.me/'
            icon={<MessageCircle className='w-6 h-6' />}
            label='WhatsApp'
          />
        </div>

        <div className='flex flex-col items-center gap-4 text-sm secondary/60'>
          <p>
            © {new Date().getFullYear()} Daniel Zamora. Todos los derechos
            reservados.
          </p>
          <button
            onClick={scrollToTop}
            className='p-3 rounded-full bg-surface border border-border hover:border-accent/50 hover:text-accent transition-all group'
            aria-label='Volver arriba'
          >
            <ArrowUp className='w-5 h-5 group-hover:-translate-y-1 transition-transform' />
          </button>
        </div>
      </div>
    </footer>
  );
};

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='p-4 rounded-full bg-surface border border-border secondary hover:text-white hover:border-accent/50 hover:bg-surfaceHighlight transition-all duration-300'
      aria-label={label}
    >
      {icon}
    </a>
  );
}
