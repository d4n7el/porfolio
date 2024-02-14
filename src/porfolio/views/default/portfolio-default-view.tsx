import { HomeDefault } from '@components-porfolio/default/home';
import { AboutDefault } from '@components-porfolio/default/about';
import { ResumeDefault } from '@components-porfolio/default/resume';
import { NavbarDefault } from '@components-porfolio/default/navbar';
import { useState } from 'react';

export const PortfolioDefaultView = () => {
  const [linkActive, setLinkActive] = useState<string>('home');
  const changeActiveLink = (linkActive: string) => {
    setLinkActive(linkActive);
  };

  return (
    <div>
      <NavbarDefault
        linkActive={linkActive}
        setLinkActive={setLinkActive}
      ></NavbarDefault>
      <HomeDefault changeActiveLink={changeActiveLink}></HomeDefault>
      <AboutDefault changeActiveLink={changeActiveLink}></AboutDefault>
      <ResumeDefault changeActiveLink={changeActiveLink}></ResumeDefault>
    </div>
  );
};
