import { NavProps } from '@interface/nav.interface';
import { Github, Linkedin, Mail, ArrowRight, FileDown, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContainerHome: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const [t] = useTranslation('translation');

  return (
    <section
      id='inicio'
      className='relative pt-36 sm:pt-44 pb-20 sm:pb-28'
      onMouseEnter={() => changeActiveLink('#home')}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
          {/* Left Hero Content */}
          <div className='lg:col-span-7 flex flex-col items-start'>
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/40'
            >
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-400' />
              </span>
              {t('availableForSeniorRoles')}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-3'
            >
              Daniel Felipe
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400'>
                Zamora Ortiz
              </span>
            </motion.h1>

            {/* Dynamic Role Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-bold text-white mb-6'
            >
              <span>{t('fullStackDeveloper')}</span>
              <span className='text-slate-600 font-normal'>|</span>
              <span className='text-cyan-400 drop-shadow-[0_0_18px_rgba(6,182,212,0.45)]'>
                {t('javaFrontendSpecialist')}
              </span>
            </motion.div>

            {/* Elevator Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-xl'
              dangerouslySetInnerHTML={{
                __html: t('elevatorPitch', { years: t('elevatorPitchYears') }),
              }}
            />

            {/* Contact Quick Info bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className='flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-8 py-2 px-3.5 rounded-lg bg-cyber-900/80 border border-slate-800'
            >
              <span className='flex items-center gap-1.5 text-slate-300'>
                <MapPin className='w-3.5 h-3.5 text-cyan-400 shrink-0' />
                {t('location')}
              </span>
              <span className='text-slate-700'>•</span>
              <span className='flex items-center gap-1.5 text-slate-300'>
                <Phone className='w-3.5 h-3.5 text-cyan-400 shrink-0' />
                {t('phone')}
              </span>
              <span className='text-slate-700'>•</span>
              <a
                className='flex items-center gap-1.5 text-cyan-400 hover:underline'
                href={`mailto:${t('email')}`}
              >
                <Mail className='w-3.5 h-3.5 shrink-0' />
                {t('email')}
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex flex-wrap items-center gap-4'
            >
              <a
                href='#contacto'
                className='inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-cyber-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/25 group'
              >
                <span>{t('contactDirectly')}</span>
                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
              </a>
              <a
                href={`mailto:${t('email')}?subject=Daniel%20Zamora%20CV%20Request`}
                className='inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-850 hover:bg-cyber-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 font-medium text-sm transition-all duration-200'
              >
                <FileDown className='w-4 h-4 text-cyan-400' />
                <span>{t('requestCV')}</span>
              </a>
              <a
                aria-label='GitHub'
                className='p-3.5 rounded-xl bg-cyber-850 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all'
                href='https://github.com/d4n7el'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Github className='w-4 h-4' />
              </a>
              <a
                aria-label='LinkedIn'
                className='p-3.5 rounded-xl bg-cyber-850 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all'
                href='https://www.linkedin.com/in/daniel-felipe-zamora-ortiz'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Linkedin className='w-4 h-4' />
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal Mockup Card */}
          <div className='lg:col-span-5'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='relative group'
            >
              <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500' />
              <div className='relative rounded-2xl bg-[#0d121f] border border-cyan-500/30 overflow-hidden shadow-2xl'>
                {/* Window Bar */}
                <div className='flex items-center justify-between px-4 py-3 bg-[#0a0e18] border-b border-slate-800/80 text-xs font-mono text-slate-400'>
                  <div className='flex items-center gap-2'>
                    <span className='w-3 h-3 rounded-full bg-rose-500/80 inline-block' />
                    <span className='w-3 h-3 rounded-full bg-amber-500/80 inline-block' />
                    <span className='w-3 h-3 rounded-full bg-emerald-500/80 inline-block' />
                    <span className='ml-2 text-slate-400 text-[11px]'>
                      daniel-zamora.sys ~ zsh
                    </span>
                  </div>
                  <div className='flex items-center gap-1.5 text-cyan-400 text-[11px]'>
                    <span className='font-mono'>v7.4-prod</span>
                  </div>
                </div>

                {/* Terminal Code Body */}
                <div className='p-5 font-mono text-xs leading-relaxed space-y-3 bg-[#0d121f]/90'>
                  <div className='text-slate-500'>
                    {'// Stack Arquitectónico & Especialidad'}
                  </div>
                  <div>
                    <span className='text-cyan-400'>const</span>{' '}
                    <span className='text-emerald-300'>architectProfile</span> = {'{'}
                  </div>
                  <div className='pl-4 space-y-1'>
                    <p>
                      <span className='text-slate-400'>name:</span>{' '}
                      <span className='text-amber-200'>&quot;Daniel Felipe Zamora Ortiz&quot;</span>,
                    </p>
                    <p>
                      <span className='text-slate-400'>role:</span>{' '}
                      <span className='text-amber-200'>&quot;Full Stack / Frontend Architect&quot;</span>,
                    </p>
                    <p>
                      <span className='text-slate-400'>experienceYears:</span>{' '}
                      <span className='text-cyan-300'>7</span>,
                    </p>
                    <p>
                      <span className='text-slate-400'>coreBackend:</span> [
                      <span className='text-amber-200'>&quot;Java&quot;</span>,{' '}
                      <span className='text-amber-200'>&quot;Spring Boot&quot;</span>,{' '}
                      <span className='text-amber-200'>&quot;REST APIs&quot;</span>],
                    </p>
                    <p>
                      <span className='text-slate-400'>coreFrontend:</span> [
                      <span className='text-amber-200'>&quot;React&quot;</span>,{' '}
                      <span className='text-amber-200'>&quot;Angular&quot;</span>,{' '}
                      <span className='text-amber-200'>&quot;Micro-frontends&quot;</span>],
                    </p>
                    <p>
                      <span className='text-slate-400'>databaseEngines:</span> [
                      <span className='text-amber-200'>&quot;SQL Server&quot;</span>,{' '}
                      <span className='text-amber-200'>&quot;PostgreSQL&quot;</span>,{' '}
                      <span className='text-amber-200'>&quot;MySQL&quot;</span>],
                    </p>
                    <p>
                      <span className='text-slate-400'>verifiedImpact:</span>{' '}
                      <span className='text-cyan-400 font-bold'>&quot;35% load time optimization&quot;</span>
                    </p>
                  </div>
                  <div>{'};'}</div>
                  <div className='pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]'>
                    <span className='text-emerald-400 flex items-center gap-1.5'>
                      <span>✓</span> Microservices &amp; UI Ready
                    </span>
                    <span className='text-slate-500 font-mono'>
                      Status: <span className='text-cyan-400'>ACTIVE</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerHome;
