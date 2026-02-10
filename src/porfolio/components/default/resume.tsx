import { Title } from '@components/title';
import { NavProps } from '@interface/nav.interface';
import { useTranslation } from 'react-i18next';
import { SkillsCard } from '@components/skills-card';
import { personalSkills, skills } from '@const/skills';
import { Experience } from './experience';

const ResumeDefault: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const [t] = useTranslation('translation');
  return (
    <div id='resume' className='bg-black'>
      <div
        className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:px-20 md:px-12 lg:px-20 2xl:px-48 mt-20'
        onMouseEnter={() => {
          changeActiveLink('#resume');
        }}
      >
        <div className='md:mt-0 pt-14 sm:pt-0 px-10 pr-0 '>
          <section className='mt-12 lg:flex lg:justify-center gap-2'>
            <Experience />
          </section>
        </div>
        <div className='w-12/12 p-10 pr-0'>
          <section className='flex flex-wrap gap-1 sm:gap-2 mt-10 pr-5 '>
            <SkillsCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeDefault;
