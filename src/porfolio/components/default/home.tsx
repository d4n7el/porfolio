import { NavProps } from '@interface/nav.interface';
import Loading from '@components/loading';
import React, { Suspense } from 'react';

const HomeDefault: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const ContainerHome = React.lazy(
    () => import('@components-porfolio/default/container-home')
  );

  return (
    <div id='home' className='w-screen h-screen overflow-hidden'>
      <Suspense fallback={<Loading></Loading>}>
        <ContainerHome changeActiveLink={changeActiveLink}></ContainerHome>
      </Suspense>
    </div>
  );
};

export default HomeDefault;
