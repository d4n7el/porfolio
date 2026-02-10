import { NavbarDefault } from '@components-porfolio/default/navbar';
import ResumeDefault from '@components-porfolio/default/resume';
import AboutDefault from '@components-porfolio/default/about';
import HomeDefault from '@components-porfolio/default/home';
import { useEffect, useState } from 'react';
import { Contact } from 'src/porfolio/components/default/contact';

export const PortfolioDefaultView = () => {
  const hash = window.location.hash;
  const [linkActive, setLinkActive] = useState<string>(hash);
  const changeActiveLink = (linkActive: string) => {
    setLinkActive(linkActive);
  };

  useEffect(() => {}, [linkActive]);

  return (
    <div>
      <NavbarDefault></NavbarDefault>
      <HomeDefault changeActiveLink={changeActiveLink} />
      <AboutDefault changeActiveLink={changeActiveLink} />
      <ResumeDefault changeActiveLink={changeActiveLink} />
      <Contact />
    </div>
  );
};
