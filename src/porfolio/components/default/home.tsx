import { NavProps } from '@interface/nav.interface';
import Loading from '@components/loading';
import React, { Suspense } from 'react';
import { useTheme } from 'next-themes';

const HomeDefault: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const { theme } = useTheme();
  const ContainerHome = React.lazy(
    () => import('@components-porfolio/default/container-home')
  );

  const getDynamicBackground = () => {
    if (theme === 'dark') {
      return 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000';
    } else {
      return 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 130, 246, 0.25), transparent 70%)';
    }
  };

  return (
    <div className='min-h-screen w-full bg-white dark:bg-[#020617] relative'>
      {/* Emerald Radial Glow Background */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background: getDynamicBackground(),
        }}
      />
      <div id='home' className='w-screen h-screen overflow-hidden'>
        <Suspense fallback={<Loading></Loading>}>
          <ContainerHome changeActiveLink={changeActiveLink}></ContainerHome>
        </Suspense>
      </div>
    </div>
  );
};

export default HomeDefault;
