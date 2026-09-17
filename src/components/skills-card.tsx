import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '@components/ui/section-label';
import { TechCategoryCard } from '@components/ui/tech-category-card';
import { Server, Layout, Database, GitBranch, GraduationCap, Languages } from 'lucide-react';

export const SkillsCard = () => {
  const [t] = useTranslation('translation');

  const techCategories = [
    {
      title: t('categoryBackendJava'),
      icon: <Server className='w-5 h-5' />,
      items: [
        { name: 'Java', level: t('levelCoreOOP'), isHighlight: true },
        { name: 'Spring Boot / REST', level: t('levelMicroservices'), isHighlight: true },
        { name: 'PHP', level: t('levelYears4') },
        { name: 'Ruby on Rails', level: t('levelWebMVC') },
        { name: 'Node.js', level: t('levelAPIs') },
      ],
    },
    {
      title: t('categoryFrontendMobile'),
      icon: <Layout className='w-5 h-5' />,
      items: [
        { name: 'React & React Native', level: t('levelAdvanced'), isHighlight: true },
        { name: 'Angular', level: t('levelYears3'), isHighlight: true },
        { name: 'TypeScript', level: t('levelStrictTyping'), isHighlight: true },
        { name: 'Tailwind CSS & SASS', level: t('levelModernUI') },
        { name: 'JavaScript (ES6+)', level: t('levelYears7') },
      ],
    },
    {
      title: t('categoryDatabases'),
      icon: <Database className='w-5 h-5' />,
      items: [
        { name: 'SQL Server', level: t('levelStoredProc'), isHighlight: true },
        { name: 'MySQL', level: t('levelRelational'), isHighlight: true },
        { name: 'PostgreSQL', level: t('levelEnterprise'), isHighlight: true },
        { name: 'SSRS (Reporting)', level: t('levelBIReports') },
        { name: 'Modelado Relacional', level: t('levelNormalization') },
      ],
    },
    {
      title: t('categoryDevOps'),
      icon: <GitBranch className='w-5 h-5' />,
      items: [
        { name: 'Git / GitHub / GitLab', level: t('levelVersioning'), isHighlight: true },
        { name: 'CI/CD Pipelines & APIs', level: t('levelDevOps'), isHighlight: true },
        { name: 'Agile / Scrum', level: t('levelSprints'), isHighlight: true },
        { name: 'VS Code', level: t('levelIDE') },
        { name: 'Figma', level: t('levelUIHandoff') },
      ],
    },
  ];

  const softSkills = [
    t('skillCriticalThinking'),
    t('skillTeamwork'),
    t('skillAdaptability'),
  ];

  return (
    <section id='habilidades' className='py-16 sm:py-24 border-t border-slate-800/60'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <SectionLabel>{t('techStack')}</SectionLabel>
          <h3 className='text-2xl sm:text-4xl font-extrabold text-white tracking-tight'>
            {t('techEcosystem')}
          </h3>
          <p className='text-sm text-slate-400 mt-2 max-w-2xl'>
            {t('techDescription')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TechCategoryCard {...category} />
            </motion.div>
          ))}
        </div>

        {/* Education & Languages Bento */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-cyber-900/80 border border-slate-800'
          >
            <div className='flex items-center gap-2 text-cyan-400 mb-5'>
              <GraduationCap className='w-5 h-5' />
              <h4 className='font-bold text-white text-base'>
                {t('formalEducation')}
              </h4>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='p-4 rounded-xl bg-cyber-850 border border-slate-800'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-xs font-mono text-cyan-400'>2017</span>
                  <span className='text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800'>
                    {t('sena')}
                  </span>
                </div>
                <h5 className='text-sm font-bold text-white mb-1'>
                  {t('educationADSI')}
                </h5>
                <p className='text-xs text-slate-400'>
                  {t('educationADSIDescription')}
                </p>
              </div>
              <div className='p-4 rounded-xl bg-cyber-850 border border-slate-800'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-xs font-mono text-cyan-400'>2015</span>
                  <span className='text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800'>
                    {t('sena')}
                  </span>
                </div>
                <h5 className='text-sm font-bold text-white mb-1'>
                  {t('educationTech')}
                </h5>
                <p className='text-xs text-slate-400'>
                  {t('educationTechDescription')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Languages & Soft Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-cyber-900/80 border border-slate-800 flex flex-col justify-between'
          >
            <div>
              <div className='flex items-center gap-2 text-cyan-400 mb-5'>
                <Languages className='w-5 h-5' />
                <h4 className='font-bold text-white text-base'>
                  {t('languages')}
                </h4>
              </div>
              <div className='space-y-3 mb-6'>
                <div className='flex items-center justify-between p-3 rounded-lg bg-cyber-850 border border-slate-800 text-xs font-medium'>
                  <span className='text-white font-semibold'>
                    {t('spanishLang')}
                  </span>
                  <span className='font-mono text-cyan-400'>
                    {t('native')}
                  </span>
                </div>
                <div className='flex items-center justify-between p-3 rounded-lg bg-cyber-850 border border-slate-800 text-xs font-medium'>
                  <div>
                    <span className='text-white font-semibold'>
                      {t('englishLang')}
                    </span>
                    <div className='text-[10px] text-slate-400'>
                      {t('centroColombiano')}
                    </div>
                  </div>
                  <span className='font-mono text-cyan-400'>
                    {t('inTraining')}
                  </span>
                </div>
              </div>
            </div>
            <div className='pt-4 border-t border-slate-800'>
              <span className='text-xs font-mono text-slate-400 block mb-2 font-semibold'>
                {t('interpersonalSkills')}
              </span>
              <div className='flex flex-wrap gap-1.5'>
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className='px-2 py-0.5 rounded text-[11px] bg-cyber-800 text-slate-300 border border-slate-700'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
