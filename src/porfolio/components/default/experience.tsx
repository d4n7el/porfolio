import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '@components/ui/section-label';
import { ExperienceCard } from '@components/ui/experience-card';
import { Building, Smartphone, Database, Code } from 'lucide-react';

export const Experience = () => {
  const [t] = useTranslation('translation');

  const experiences = [
    {
      role: 'Full Stack / Frontend Developer',
      company: 'Capmotion Technologies',
      period: '01/2022 – Actualidad',
      isActual: true,
      companyIcon: <Building className='w-4 h-4 text-cyan-400' />,
      bullets: [
        t('exp1Bullet1'),
        t('exp1Bullet2'),
        t('exp1Bullet3'),
        t('exp1Bullet4'),
      ],
      tags: [
        { label: 'React', variant: 'cyan' as const },
        { label: 'Angular', variant: 'cyan' as const },
        { label: 'TypeScript', variant: 'cyan' as const },
        { label: 'Micro-frontends' },
        { label: 'REST APIs' },
        { label: 'CI/CD' },
        { label: 'Scrum' },
      ],
    },
    {
      role: 'Frontend & Mobile Developer',
      company: 'Play Us Media',
      period: '11/2020 – 05/2022',
      companyIcon: <Smartphone className='w-4 h-4 text-cyan-400' />,
      bullets: [
        t('exp2Bullet1'),
        t('exp2Bullet2'),
        t('exp2Bullet3'),
      ],
      tags: [
        { label: 'React Native', variant: 'cyan' as const },
        { label: 'React', variant: 'cyan' as const },
        { label: 'UI Component Libraries' },
        { label: 'UX/UI' },
        { label: 'Mobile Architecture' },
      ],
    },
    {
      role: 'Full Stack & Systems Analyst',
      company: 'Magnetrón S.A.S',
      period: '02/2019 – 11/2020',
      companyIcon: <Database className='w-4 h-4 text-cyan-400' />,
      bullets: [
        t('exp3Bullet1'),
        t('exp3Bullet2'),
        t('exp3Bullet3'),
      ],
      tags: [
        { label: 'PHP', variant: 'cyan' as const },
        { label: 'Java', variant: 'cyan' as const },
        { label: 'SQL Server', variant: 'cyan' as const },
        { label: 'MySQL' },
        { label: 'SSRS' },
        { label: 'ERP Systems' },
      ],
    },
    {
      role: 'Web Developer',
      company: 'Magnetrón S.A.S / Exus Agencia Web',
      period: '12/2017 – 02/2019',
      companyIcon: <Code className='w-4 h-4 text-cyan-400' />,
      bullets: [
        t('exp4Bullet1'),
        t('exp4Bullet2'),
      ],
      tags: [
        { label: 'JavaScript ES6+', variant: 'cyan' as const },
        { label: 'PHP', variant: 'cyan' as const },
        { label: 'CSS3 / Tailwind' },
        { label: 'SEO Técnico' },
        { label: 'Seguridad Web' },
      ],
    },
  ];

  return (
    <section id='experiencia' className='py-16 sm:py-24 border-t border-slate-800/60'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <SectionLabel>{t('provenTrackRecord')}</SectionLabel>
          <div className='flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4'>
            <div>
              <h3 className='text-2xl sm:text-4xl font-extrabold text-white tracking-tight'>
                {t('workExperience')}
              </h3>
              <p className='text-sm text-slate-400 mt-2 max-w-xl'>
                {t('experienceDescription')}
              </p>
            </div>
            <div className='text-xs font-mono text-slate-500'>
              {t('totalExperience')}
            </div>
          </div>
        </motion.div>

        <div className='space-y-8 relative'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
