import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@components/ui/brand-icons';
import { ContactCard } from '@components/ui/contact-card';

export const Contact = () => {
  const [t] = useTranslation('translation');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id='contacto'
      className='py-20 sm:py-28 border-t border-slate-800/60 relative'
    >
      <div className='max-w-3xl mx-auto px-4 sm:px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium mb-6'>
            <Sparkles className='w-3.5 h-3.5' />
            <span>{t('startConversation')}</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4'>
            {t('ctaHeading')}
          </h2>
          <p className='text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed'>
            {t('ctaDescription')}
          </p>

          {/* Direct Contact Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left'>
            <ContactCard
              icon={<Mail className='w-5 h-5' />}
              label={t('emailLabel')}
              value={t('email')}
              href={`mailto:${t('email')}`}
            />
            <ContactCard
              icon={<Phone className='w-5 h-5' />}
              label={t('phoneLabel')}
              value={t('phone')}
              href={`tel:${t('phone').replace(/\s/g, '')}`}
              iconBg='bg-emerald-950'
              iconBorder='border-emerald-800'
              iconColor='text-emerald-400'
            />
          </div>

          {/* Social Bar */}
          <div className='flex items-center justify-center gap-4 mb-12'>
            <a
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-850 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono transition-all'
              href='https://www.linkedin.com/in/daniel-felipe-zamora-ortiz'
              rel='noopener noreferrer'
              target='_blank'
            >
              <LinkedinIcon className='w-4 h-4 text-cyan-400' />
              <span>{t('linkedin')}</span>
            </a>
            <a
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-850 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono transition-all'
              href='https://github.com/d4n7el'
              rel='noopener noreferrer'
              target='_blank'
            >
              <GithubIcon className='w-4 h-4 text-cyan-400' />
              <span>{t('github')}</span>
            </a>
          </div>

          {/* Copyright & Back to top */}
          <div className='flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800/80 text-xs text-slate-500 font-mono gap-4'>
            <div>
              {t('copyright', { year: new Date().getFullYear() })}
            </div>
            <button
              onClick={scrollToTop}
              aria-label='Volver arriba'
              className='w-9 h-9 rounded-full border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-colors shadow-sm'
            >
              <ArrowUp className='w-4 h-4' />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
