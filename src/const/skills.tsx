import { SkillsCardProps } from '@interface/card-software-skills.interface';

export const skills: SkillsCardProps[] = [
  {
    icon: <span className='icon-[logos--react] w-7 h-7 '></span>,
    label: 'React',
    description: 'frameworkJavascript',
    labelBody: 'experience',
    dataBody: { years: '4' },
  },
  {
    icon: <span className='icon-[devicon--angular]  w-7 h-7'></span>,
    label: 'Angular',
    description: 'frameworkJavascript',
    labelBody: 'experience',
    dataBody: { years: '3' },
  },
  {
    icon: <span className='icon-[mdi--github]  w-7 h-7'></span>,
    label: 'Git',
    description: 'versionControlSoftware',
    labelBody: 'experience',
    dataBody: { years: '5' },
  },
  {
    icon: <span className='icon-[devicon--html5]  w-7 h-7'></span>,
    label: 'HTML',
    description: 'hyperTextMarkupLanguage',
    labelBody: 'experience',
    dataBody: { years: '6' },
  },
  {
    icon: <span className='icon-[skill-icons--css] w-7 h-7'></span>,
    label: 'CSS',
    description: 'cascadingStyleSheets',
    labelBody: 'experience',
    dataBody: { years: '6' },
  },
  {
    icon: <span className='icon-[logos--typescript-icon] w-7 h-7'></span>,
    label: 'TypeScript',
    description: 'programmingLanguage',
    labelBody: 'experience',
    dataBody: { years: '3' },
  },
  {
    icon: <span className='icon-[devicon--tailwindcss] w-7 h-7'></span>,
    label: 'Tailwind',
    description: 'frameworkCSS',
    labelBody: 'experience',
    dataBody: { years: '2' },
  },
  {
    icon: (
      <span className='icon-[vscode-icons--file-type-mysql] w-7 h-7'></span>
    ),
    label: 'Sql',
    description: 'structuredQueryLanguage',
    labelBody: 'experience',
    dataBody: { years: '4' },
  },
  {
    icon: <span className='icon-[vscode-icons--file-type-ruby] w-7 h-7'></span>,
    label: 'Ruby',
    description: 'programmingLanguage',
    labelBody: 'experience',
    dataBody: { years: '1' },
  },
  {
    icon: <span className='icon-[akar-icons--php-fill] w-7 h-7'></span>,
    label: 'PHP',
    description: 'programmingLanguage',
    labelBody: 'experience',
    dataBody: { years: '4' },
  },
];

export const personalSkills: SkillsCardProps[] = [
  {
    description: 'problemSolvingSkills',
    icon: (
      <span className='icon-[pajamas--issue-closed] w-7 h-7 text-boston-blue-900 dark:text-boston-blue-100'></span>
    ),
  },
  {
    description: 'attentionToDetail',
    icon: (
      <span className='icon-[material-symbols--filter-center-focus-rounded] w-7 h-7 text-boston-blue-900 dark:text-boston-blue-100'></span>
    ),
  },
  {
    description: 'creativity',
    icon: (
      <span className='icon-[streamline--industry-innovation-and-infrastructure] w-7 h-7 text-boston-blue-900 dark:text-boston-blue-100'></span>
    ),
  },
  {
    description: 'communicationSkills',
    icon: (
      <span className='icon-[material-symbols--communication-rounded] w-7 h-7 text-boston-blue-900 dark:text-boston-blue-100'></span>
    ),
  },
  {
    description: 'timeManagement',
    icon: (
      <span className='icon-[material-symbols--time-auto-outline-rounded] w-7 h-7 text-boston-blue-900 dark:text-boston-blue-100'></span>
    ),
  },
  {
    description: 'Teamwork',
    icon: (
      <span className='icon-[fluent-mdl2--teamwork] w-7 h-7 text-boston-blue-900 dark:text-boston-blue-100'></span>
    ),
  },
  {
    description: 'adaptability',
    icon: (
      <span
        className='icon-[ic--round-published-with-changes] w-7 h-7
         text-boston-blue-900 dark:text-boston-blue-100'
      ></span>
    ),
  },
  {
    description: 'professionalEthics',
    icon: (
      <span className='icon-[iconoir--pc-check] w-7 h-7 text-boston-blue-900 dark:text-boston-blue-100'></span>
    ),
  },
];
