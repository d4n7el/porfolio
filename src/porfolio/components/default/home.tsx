import { NavProps } from '@interface/nav.interface';
import Loading from '@components/loading';
import React, { Suspense } from 'react';

const HomeDefault: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const ContainerHome = React.lazy(
    () => import('@components-porfolio/default/container-home')
  );

  return (
    <div className='min-h-screen w-full bg-[#0b0f17] relative cyber-grid'>
      <div id='hero' className='w-full min-h-screen overflow-hidden'>
        <Suspense fallback={<Loading />}>
          <ContainerHome changeActiveLink={changeActiveLink} />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeDefault;
