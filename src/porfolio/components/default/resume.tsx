import { NavProps } from '@interface/nav.interface';
import { SkillsCard } from '@components/skills-card';
import { Experience } from './experience';

const ResumeDefault: React.FC<NavProps> = () => {
  return (
    <div id='resume'>
      <Experience />
      <SkillsCard />
    </div>
  );
};

export default ResumeDefault;
