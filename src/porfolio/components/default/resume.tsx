import { Title } from '@components/title';
import { TimeLine } from '@components/time-line';
import { NavProps } from '@interface/nav.interface';
import { useTranslation } from 'react-i18next';
import { SkillsCard } from '@components/skills-card';
import { personalSkills, skills } from '@const/skills';
import { experience } from 'src/const/experience';

const ResumeDefault: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const [t] = useTranslation('translation');
  return (
    <div
      id='resume'
      className=' 
      dark:bg-gradient-to-t from-black to-boston-blue-950 
      dark:border-white-alpha-light flex justify-center gap-3 '
    >
      <div
        className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:px-20 md:px-12 lg:px-20 2xl:px-48 mt-20'
        onMouseEnter={() => {
          changeActiveLink('#resume');
        }}
      >
        <div className='w-12/12 md:mt-0 pt-14 sm:pt-0 px-10 pr-0 '>
          <Title title={t('experience')}></Title>
          <section className='mt-12 w-12/12 lg:flex lg:justify-center gap-2 lg:flex-row-reverse '>
            {experience.map((item) => (
              <TimeLine
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                initialDate={item.initialDate}
                finalDate={item.finalDate}
              ></TimeLine>
            ))}
          </section>
        </div>
        <div className='w-12/12 p-10 pr-0'>
          <Title title={t('softwareSkills')}></Title>
          <section className='flex flex-wrap gap-1 sm:gap-2 mt-10 pr-5 '>
            {skills.map((skill) => (
              <SkillsCard
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                description={skill.description}
                labelBody={'experienceInYears'}
                dataBody={skill.dataBody}
              ></SkillsCard>
            ))}
          </section>
          <div
            className='w-12/12 mt-10 sm:mb-0
            pb-16 lg:pb-0'
          >
            <Title title={t('personalSkills')}></Title>
            <section className='mt-10 flex flex-wrap gap-2 pr-5'>
              {personalSkills.map((skill) => (
                <SkillsCard
                  key={skill.description}
                  icon={skill.icon}
                  description={skill.description}
                ></SkillsCard>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDefault;
