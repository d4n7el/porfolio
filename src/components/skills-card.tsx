import { motion } from 'framer-motion';
import { Layout, Terminal, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className='w-6 h-6 text-accent' />,
    skills: [
      {
        name: 'React',
        level: 90,
        years: '4 años',
      },
      {
        name: 'Angular',
        level: 75,
        years: '3 años',
      },
      {
        name: 'TypeScript',
        level: 85,
        years: '3 años',
      },
      {
        name: 'Tailwind CSS',
        level: 95,
        years: '2 años',
      },
      {
        name: 'HTML/CSS',
        level: 100,
        years: '8 años',
      },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className='w-6 h-6 text-accent' />,
    skills: [
      {
        name: 'PHP',
        level: 80,
        years: '4 años',
      },
      {
        name: 'SQL',
        level: 75,
        years: '4 años',
      },
      {
        name: 'Ruby',
        level: 40,
        years: '1 año',
      },
      {
        name: 'Node.js',
        level: 60,
        years: '2 años',
      },
    ],
  },
  {
    title: 'Herramientas & Otros',
    icon: <Terminal className='w-6 h-6 text-accent' />,
    skills: [
      {
        name: 'Git / GitHub',
        level: 90,
        years: '5 años',
      },
      {
        name: 'VS Code',
        level: 95,
        years: '6 años',
      },
      {
        name: 'Figma',
        level: 70,
        years: '3 años',
      },
      {
        name: 'Agile / Scrum',
        level: 85,
        years: '4 años',
      },
    ],
  },
];

export const SkillsCard = () => {
  return (
    <section id='habilidades' className='py-32 bg-surface/30'>
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
          className='mb-16 text-center'
        >
          <h2 className='text-3xl font-bold mb-4 inline-flex items-center gap-3'>
            Habilidades Técnicas
          </h2>
          <p className='secondary text-lg max-w-2xl mx-auto'>
            Un conjunto de herramientas y tecnologías que he perfeccionado a lo
            largo de los años para construir productos digitales completos.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
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
                delay: categoryIndex * 0.1,
              }}
              className='p-8 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors'
            >
              <div className='flex items-center gap-3 mb-8'>
                <div className='p-3 rounded-lg bg-background border border-border'>
                  {category.icon}
                </div>
                <h3 className='text-xl font-bold'>{category.title}</h3>
              </div>

              <div className='space-y-6'>
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className='flex justify-between mb-2 text-sm'>
                      <span className='font-medium text-white'>
                        {skill.name}
                      </span>
                      <span className='secondary'>{skill.years}</span>
                    </div>
                    <div className='h-2 bg-background rounded-full overflow-hidden'>
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + index * 0.1,
                        }}
                        className='h-full bg-accent/80 rounded-full'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className='mt-20'>
          <h3 className='text-xl font-bold mb-8 text-center'>
            Habilidades Personales
          </h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {[
              'Resolución de problemas',
              'Atención al detalle',
              'Creatividad',
              'Comunicación efectiva',
              'Gestión del tiempo',
              'Trabajo en equipo',
              'Adaptabilidad',
              'Ética profesional',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className='px-4 py-2 rounded-full bg-surface border border-border secondary text-sm hover:text-white hover:border-accent/50 transition-colors cursor-default'
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
