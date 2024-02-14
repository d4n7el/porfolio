import { ChipSkill } from '@components/chip-skill';
import { Title } from '@components/title';
import { TimeLine } from '@components/time-line';
import { PersonalSkills } from '@components/personal-skills';
import { NavProps } from 'src/interface/nav.interface';

export const ResumeDefault: React.FC<NavProps> = ({
  changeActiveLink = () => {},
}) => {
  return (
    <div
      className='sm:h-[140vh] lg:h-[100vh] 
      dark:bg-black bg-white
      dark:border-white-alpha-light border-boston-blue-500
      border-t-1 p-10 sm:p-0'
    >
      <div
        id='resume'
        className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 px-1 sm:px-5 md:px-6'
        onMouseEnter={() => {
          changeActiveLink('resume');
        }}
      >
        <div
          className='w-12/12  md:w-10/12
           lg:w-10/12 xl:w-10/12'
        >
          <Title title='SOFTWARE SKILL'></Title>
          <section className='flex flex-wrap gap-3 mt-10 '>
            <ChipSkill
              icon={<span className='icon-[logos--react]'></span>}
              iconLabel='React'
              defaultValue={80}
            ></ChipSkill>
            <ChipSkill
              icon={<span className='icon-[devicon--angular]'></span>}
              iconLabel='Angular'
              defaultValue={89}
            ></ChipSkill>
            <ChipSkill
              icon={<span className='icon-[mdi--github]'></span>}
              iconLabel='Git'
              defaultValue={70}
            ></ChipSkill>
            <ChipSkill
              icon={<span className='icon-[devicon--html5]'></span>}
              iconLabel='HTML'
              defaultValue={98}
            ></ChipSkill>
            <ChipSkill
              icon={<span className='icon-[skill-icons--css]'></span>}
              iconLabel='CSS'
              defaultValue={98}
            ></ChipSkill>
            <ChipSkill
              icon={<span className='icon-[logos--typescript-icon]'></span>}
              iconLabel='TypeScript'
              defaultValue={60}
            ></ChipSkill>
            <ChipSkill
              icon={<span className='icon-[devicon--tailwindcss]'></span>}
              iconLabel='Tailwind'
              defaultValue={70}
            ></ChipSkill>
            <ChipSkill
              icon={
                <span className='icon-[vscode-icons--file-type-mysql]'></span>
              }
              iconLabel='Sql'
              defaultValue={80}
            ></ChipSkill>
            <ChipSkill
              icon={
                <span className='icon-[vscode-icons--file-type-ruby]'></span>
              }
              iconLabel='Ruby'
              defaultValue={20}
              inProgress={true}
            ></ChipSkill>
            <ChipSkill
              icon={<span className='icon-[akar-icons--php-fill]'></span>}
              iconLabel='PHP'
              defaultValue={70}
            ></ChipSkill>
          </section>
        </div>
        <div
          className='w-12/12 md:w-10/12
           lg:w-10/12 xl:w-10/12 mt-10 sm:mt-0'
        >
          <Title title='EXPERIENCE'></Title>
          <section className='mt-10 w-12/12 flex flex-wrap gap-2 '>
            <TimeLine
              title='Capmotion Technologies'
              subtitle='Front-end developer'
              initialDate='2022'
            ></TimeLine>
            <TimeLine
              title='Play us media'
              subtitle='Front-end developer'
              initialDate='2021'
              finalDate='2022'
            ></TimeLine>
            <TimeLine
              title='Magnetron S.A.S'
              subtitle='Analyst and Software developer'
              initialDate='2018'
              finalDate='2021'
            ></TimeLine>
            <TimeLine
              title='Exus'
              subtitle='Front-end developer'
              initialDate='2017'
              finalDate='2018'
            ></TimeLine>
          </section>
        </div>
        <div
          className='w-11/12  md:w-10/12
           lg:w-10/12 xl:w-10/12 mt-10 sm:mt-0 mb-10 sm:mb-0'
        >
          <Title title='PERSONAL SKILLS'></Title>
          <section className='mt-10 flex flex-wrap gap-3'>
            <PersonalSkills
              label='Problem solving skills'
              icon={
                <span className='icon-[pajamas--issue-closed] text-boston-blue-900 dark:text-boston-blue-100'></span>
              }
            ></PersonalSkills>
            <PersonalSkills
              label='Attention to detail'
              icon={
                <span className='icon-[material-symbols--filter-center-focus-rounded] text-boston-blue-900 dark:text-boston-blue-100'></span>
              }
            ></PersonalSkills>
            <PersonalSkills
              label='Creativity'
              icon={
                <span className='icon-[streamline--industry-innovation-and-infrastructure] text-boston-blue-900 dark:text-boston-blue-100'></span>
              }
            ></PersonalSkills>
            <PersonalSkills
              label='Communication skills'
              icon={
                <span className='icon-[material-symbols--communication-rounded] text-boston-blue-900 dark:text-boston-blue-100'></span>
              }
            ></PersonalSkills>
            <PersonalSkills
              label='Time management'
              icon={
                <span className='icon-[material-symbols--time-auto-outline-rounded] text-boston-blue-900 dark:text-boston-blue-100'></span>
              }
            ></PersonalSkills>
            <PersonalSkills label='Adaptability'></PersonalSkills>
            <PersonalSkills
              label='Teamwork'
              icon={
                <span className='icon-[fluent-mdl2--teamwork] text-boston-blue-900 dark:text-boston-blue-100'></span>
              }
            ></PersonalSkills>
            <PersonalSkills
              label='Professional ethics'
              icon={
                <span className='icon-[iconoir--pc-check] text-boston-blue-900 dark:text-boston-blue-100'></span>
              }
            ></PersonalSkills>
          </section>
        </div>
      </div>
    </div>
  );
};
