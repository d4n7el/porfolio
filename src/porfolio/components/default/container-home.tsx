import { NavProps } from '@interface/nav.interface';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const ContainerHome: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const [t] = useTranslation('translation');
  return (
    <div
      className=' w-screen overflow-hidden relative'
      onMouseEnter={() => {
        changeActiveLink('#home');
      }}
    >
      <section
        id='hero'
        className='min-h-screen flex items-center justify-center pt-20 relative overflow-hidden'
      >
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10' />

        <div className='max-w-6xl mx-auto px-6 w-full'>
          <div className='flex flex-col items-start max-w-3xl'>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className='mb-6 flex items-center gap-3'
            >
              <span className='px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20'>
                Disponible para proyectos
              </span>
            </motion.div>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className='text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-start'
            >
              Hola, soy{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60'>
                Daniel Zamora
              </span>
            </motion.h1>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className='text-3xl md:text-5xl font-bold secondary mb-8'
            >
              Desarrollador Web <span className='text-accent'>Full Stack</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className='text-lg secondary max-w-xl mb-10 leading-relaxed text-start'
            >
              Transformo ideas complejas en experiencias web elegantes y
              funcionales. Especializado en construir interfaces modernas y
              escalables con React y ecosistemas modernos.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className='flex flex-wrap gap-4'
            >
              <a
                href='#contacto'
                className='px-8 py-4 rounded-lg text-white bg-accent font-semibold hover:bg-surfaceHighlight transition-colors flex items-center gap-2'
              >
                Contactar
                <ArrowRight className='w-4 h-4' />
              </a>
              <a
                href='#experiencia'
                className='px-8 py-4 rounded-lg bg-surface border border-border text-white font-medium hover:border-accent/50 hover:bg-surfaceHighlight transition-all flex items-center gap-2'
              >
                Ver Experiencia
                <FileText className='w-4 h-4' />
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              className='mt-16 flex items-center gap-6'
            >
              <SocialLink
                href='https://github.com/d4n7el'
                icon={<Github className='w-6 h-6' />}
                label='GitHub'
              />
              <SocialLink
                href='https://www.linkedin.com/in/daniel-felipe-zamora-ortiz'
                icon={<Linkedin className='w-6 h-6' />}
                label='LinkedIn'
              />
              <SocialLink
                href='mailto:dfzortiz@gmail.com'
                icon={<Mail className='w-6 h-6' />}
                label='Email'
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
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
      className='secondary hover:text-accent transition-colors transform hover:scale-110 duration-200'
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default ContainerHome;
