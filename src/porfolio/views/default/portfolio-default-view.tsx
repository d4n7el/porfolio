import { HomeDefault } from '@components-porfolio/default/home';
import { AboutDefault } from '@components-porfolio/default/about';
import { ResumeDefault } from '@components-porfolio/default/resume';
import { NavbarDefault } from '@components-porfolio/default/navbar';

export const PortfolioDefaultView = () => {
  return (
    <div>
      <NavbarDefault></NavbarDefault>
      <HomeDefault></HomeDefault>
      <AboutDefault></AboutDefault>
      <ResumeDefault></ResumeDefault>
    </div>
  );
};
