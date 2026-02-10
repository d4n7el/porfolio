import { NavProps } from 'src/interface/nav.interface';
import { useTranslation } from 'react-i18next';
import { Code, Globe, Coffee, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutDefault: React.FC<NavProps> = () => {
  const [t] = useTranslation('translation');
  const stats = [
    {
      label: 'Años de Experiencia',
      value: '+7',
      icon: <Code className='w-5 h-5' />,
    },
    {
      label: 'Tecnologías',
      value: '15+',
      icon: <Zap className='w-5 h-5' />,
    },
    {
      label: 'Proyectos Web',
      value: '50+',
      icon: <Globe className='w-5 h-5' />,
    },
    {
      label: 'Compromiso',
      value: '100%',
      icon: <Coffee className='w-5 h-5' />,
    },
  ];
  return (
    <section id='sobre-mi' className='py-24 bg-surface/30'>
      <div className='max-w-6xl mx-auto px-6'>
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
          transition={{
            duration: 0.5,
          }}
          className='grid md:grid-cols-2 gap-16 items-center'
        >
          <div>
            <h2 className='text-3xl font-bold mb-6 flex items-center gap-3'>
              <span className='w-12 h-1 bg-accent rounded-full'></span>
              Sobre Mí
            </h2>
            <div className='space-y-6 secondary text-lg leading-relaxed'>
              <p>
                Soy un desarrollador web apasionado con una sólida formación
                técnica y más de 7 años de experiencia en el sector. Mi enfoque
                se centra en crear soluciones digitales que no solo funcionen
                perfectamente, sino que también ofrezcan una experiencia de
                usuario excepcional.
              </p>
              <p>
                He trabajado con empresas como Capmotion Technologies, Play Us
                Media y Magnetron S.A.S, donde me he destacado por mi capacidad
                para implementar arquitecturas robustas y mantener altos
                estándares de calidad en el código.
              </p>
              <p>
                Mi stack principal incluye React, Angular y Ruby on Rails, pero
                mi verdadera fortaleza radica en mi adaptabilidad y capacidad
                para aprender nuevas tecnologías rápidamente para resolver
                problemas complejos.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className='p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors group'
              >
                <div className='mb-4 p-3 rounded-lg bg-background w-fit text-accent group-hover:scale-110 transition-transform duration-300'>
                  {stat.icon}
                </div>
                <div className='text-3xl font-bold text-white mb-1'>
                  {stat.value}
                </div>
                <div className='text-sm secondary'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDefault;
