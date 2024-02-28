import { User } from '@nextui-org/react';
import imageUser from '@images/me.png';
import { NavProps } from 'src/interface/nav.interface';
import { Hobbies } from '@components/hobbies';
import { Title } from 'src/components/title';
import { useTranslation } from 'react-i18next';

const AboutDefault: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const [t] = useTranslation('translation');
  return (
    <div
      id='about'
      className='sm:h-[auto] dark:bg-black bg-white  pt-5 sm:pt-10  sm:px-0 w-full
      flex justify-center '
      onMouseEnter={() => {
        changeActiveLink('#about');
      }}
    >
      <div className='flex justify-start flex-wrap sm:h-[90vh] sm:py-0 md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6'>
        <div className='md:w-full lg:w-1/1 flex flex-wrap px-10 sm:px-28 md:px-5 lg:px-15 pt-10'>
          <div className='w-full flex justify-start'>
            <section className='divide-y-2 divide-boston-blue-700'>
              <Title title={t('about')} subtitle='dfzortiz@gmail.com'></Title>
            </section>
          </div>
          <div className='w-full flex justify-start flex-wrap'>
            <div className='w-full flex justify-start my-9 sm:my-0 '>
              <User
                className='dark:border-white-alpha-light
                border-boston-blue-500 
                border-1 h-fit p-4
                dark:text-boston-blue-50 text-boston-blue-900'
                name='Daniel Zamora'
                description={t('softwareDeveloper')}
                avatarProps={{
                  src: imageUser,
                }}
              />
            </div>
            <article className='mt-0'>
              <p className='text-left dark:text-boston-blue-50  text-boston-blue-900 md:mt-4 '>
                {t('paragraphWithMe')}
              </p>
            </article>
          </div>
        </div>
        <div className='md:w-full lg:w-1/1 flex flex-wrap px-10 sm:px-28 md:px-5 lg:px-15 pt-10'>
          <div>
            <section className='divide-y-2 divide-boston-blue-700'>
              <Title title={t('hobbies&interests')}></Title>
            </section>
            <section className='flex justify-center flex-wrap w-full gap-2 mt-10'>
              <Hobbies
                icon={
                  <span className='icon-[iconoir--gym] text-4xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[emojione-monotone--soccer-ball] text-4xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[material-symbols--travel] text-4xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[ri--macbook-line] text-4xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[mdi--code-json] text-4xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[material-symbols--family-home-rounded] text-4xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDefault;
