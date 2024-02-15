import { NavbarDefault } from '@components-porfolio/default/navbar';
import ResumeDefault from '@components-porfolio/default/resume';
import AboutDefault from '@components-porfolio/default/about';
import HomeDefault from '@components-porfolio/default/home';
import { useEffect, useState } from 'react';

export const PortfolioDefaultView = () => {
  const hash = window.location.hash;
  const [linkActive, setLinkActive] = useState<string>(hash);
  const changeActiveLink = (linkActive: string) => {
    setLinkActive(linkActive);
  };

  useEffect(() => {
    console.log(linkActive);
  }, [linkActive]);

  return (
    <div>
      <NavbarDefault
        linkActive={linkActive}
        setLinkActive={setLinkActive}
      ></NavbarDefault>
      <HomeDefault changeActiveLink={changeActiveLink} />
      <AboutDefault changeActiveLink={changeActiveLink} />
      <ResumeDefault changeActiveLink={changeActiveLink} />
    </div>
  );
};
