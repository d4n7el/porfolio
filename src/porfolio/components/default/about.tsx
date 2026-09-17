import { NavProps } from 'src/interface/nav.interface';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { SectionLabel } from '@components/ui/section-label';
import { MetricCard } from '@components/ui/metric-card';
import { Calendar, Layers, FolderCheck, ShieldCheck, UserCheck, Zap } from 'lucide-react';

const AboutDefault: React.FC<NavProps> = () => {
  const [t] = useTranslation('translation');

  const tags = [
    t('tagCleanCode'),
    t('tagMicroFrontends'),
    t('tagRestfulAPIs'),
    t('tagEnterpriseERPs'),
    t('tagScrumAgile'),
  ];

  return (
    <section id='sobre-mi' className='py-16 sm:py-20 border-t border-slate-800/60'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>{t('professionalProfile')}</SectionLabel>
          <h3 className='text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-12'>
            {t('aboutHeading')}
          </h3>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
          {/* Large Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='md:col-span-8 p-7 sm:p-8 rounded-2xl bg-cyber-900/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group'
          >
            <div className='absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all' />
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 rounded-xl bg-cyber-800 border border-slate-700 flex items-center justify-center text-cyan-400'>
                <UserCheck className='w-5 h-5' />
              </div>
              <div>
                <h4 className='text-lg font-bold text-white'>
                  {t('fullStackSystemsArchitect')}
                </h4>
                <p className='text-xs font-mono text-slate-400'>
                  {t('locationAvailability')}
                </p>
              </div>
            </div>
            <div className='space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed'>
              <p>
                <Trans i18nKey='bioParagraph1' components={{ 1: <strong className='text-white' /> }} />
              </p>
              <p>
                <Trans i18nKey='bioParagraph2' components={{ 1: <span className='text-cyan-300 font-semibold' />, 2: <strong className='text-white' />, 3: <span className='text-cyan-300 font-semibold' /> }} />
              </p>
            </div>
            <div className='mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='px-3 py-1 rounded-full text-xs font-mono bg-cyber-800 border border-slate-700 text-slate-300'
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlight Impact Card: 35% Performance Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='md:col-span-4 p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-cyan-950/40 via-cyber-900 to-cyber-900 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group shadow-xl'
          >
            <div>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400'>
                  {t('highlightedMetric')}
                </span>
                <div className='w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400'>
                  <Zap className='w-4 h-4' />
                </div>
              </div>
              <div className='text-5xl sm:text-6xl font-black text-white tracking-tight mb-2 flex items-baseline gap-1'>
                <span>35</span>
                <span className='text-cyan-400'>%</span>
              </div>
              <p className='text-base font-bold text-white mb-2'>
                {t('optimizationTitle')}
              </p>
              <p className='text-xs text-slate-400 leading-relaxed'>
                {t('optimizationDescription')}
              </p>
            </div>
            <div className='mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-cyan-300 flex items-center gap-1.5'>
              <span>↗</span> {t('capmotionImpact')}
            </div>
          </motion.div>

          {/* Mini Stats Quad */}
          <div className='md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <MetricCard
              icon={<Calendar className='w-5 h-5' />}
              label={t('yearsExperience')}
              value='+7'
              category={t('categoryCareer')}
            />
            <MetricCard
              icon={<Layers className='w-5 h-5' />}
              label={t('technologiesMastered')}
              value='15+'
              category={t('categoryEcosystem')}
            />
            <MetricCard
              icon={<FolderCheck className='w-5 h-5' />}
              label={t('modulesProjects')}
              value='+50'
              category={t('categoryDeployments')}
            />
            <MetricCard
              icon={<ShieldCheck className='w-5 h-5' />}
              label={t('commitmentRigor')}
              value='100%'
              category={t('categoryQuality')}
              iconColor='text-emerald-400'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDefault;
