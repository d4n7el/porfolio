import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import { experiences } from '@const/experience';

export const Experience = () => {
  return (
    <section id='experiencia' className='py-32 relative'>
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
          className='mb-16'
        >
          <h2 className='text-3xl font-bold mb-4 flex items-center gap-3 text-start'>
            <span className='w-12 h-1 bg-accent rounded-full'></span>
            Experiencia Laboral
          </h2>
          <p className='secondary text-lg'>
            Mi trayectoria profesional y crecimiento técnico.
          </p>
        </motion.div>

        <div className='relative'>
          {/* Vertical Line */}
          <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block' />

          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
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
                className={`flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className='flex-1'>
                  <div
                    className={`p-8 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all group ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}
                  >
                    <div className='flex flex-col gap-2 mb-4'>
                      <h3 className='text-xl font-bold text-white group-hover:text-accent transition-colors'>
                        {exp.role}
                      </h3>
                      <div className='flex items-center gap-2 text-accent text-sm font-medium'>
                        <Building2 className='w-4 h-4' />
                        {exp.company}
                      </div>
                    </div>
                    <p className='secondary leading-relaxed mb-4'>
                      {exp.description}
                    </p>
                    <div className='flex items-center gap-2 text-sm secondary/60'>
                      <Calendar className='w-4 h-4' />
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Center Dot (Desktop) */}
                <div className='hidden md:flex items-center justify-center w-12 relative'>
                  <div className='w-4 h-4 rounded-full bg-background border-2 border-accent z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]' />
                </div>

                {/* Empty Side (Desktop) */}
                <div className='flex-1 hidden md:block' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
