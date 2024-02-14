import { User } from '@nextui-org/react';
import imageUser from '@images/me.webp';
import { NavProps } from 'src/interface/nav.interface';
import { Hobbies } from '@components/hobbies';

export const AboutDefault: React.FC<NavProps> = ({
  changeActiveLink = () => {},
}) => {
  return (
    <div
      id='about'
      className='w-screen sm:h-[100vh] dark:bg-black bg-white pt-5 sm:pt-10 px-6'
      onMouseEnter={() => {
        changeActiveLink('about');
      }}
    >
      <div className='flex justify-center flex-wrap sm:h-[90vh] py-10 sm:py-0'>
        <div className='md:w-full lg:w-1/2 flex justify-between flex-wrap px-5 sm:px-28 pt-10'>
          <div className='w-full flex justify-start'>
            <section className='divide-y-2 divide-boston-blue-700'>
              <h2 className=' text-4xl text-left dark:text-boston-blue-50 text-boston-blue-500  '>
                ABOUT
              </h2>
              <div className='mt-3'>
                <pre className=' text-1xl mt-2 dark:text-boston-blue-50 text-boston-blue-900'>
                  dfzortiz@gmail.com
                </pre>
              </div>
            </section>
          </div>
          <div className='w-full flex justify-start flex-wrap'>
            <div className='w-full flex justify-start my-9 sm:my-0 '>
              <User
                className='dark:border-white-alpha-light border-boston-blue-500  border-1 h-fit p-4 dark:text-boston-blue-50 text-boston-blue-900'
                name='Daniel Zamora'
                description='Software Developer'
                avatarProps={{
                  src: imageUser,
                }}
              />
            </div>
            <article>
              <p className='text-justify dark:text-boston-blue-50  text-boston-blue-900 md:mt-4'>
                Programmer with solid technical training and extensive
                experience in web development. Expert in languages such as
                JavaScript, PHP and Ruby, as well as frameworks such as React,
                React Native, Angular and Ruby On Rails, he has demonstrated
                skill in planning, designing and building user interface
                systems. His career includes roles in companies such as
                Capmotion Technologies, Play Us Media and Magnetrón S.A.S, where
                he stood out for his ability to implement innovative solutions
                and maintain quality standards. With an academic background
                supported by the SENA National Learning Service, brings a solid
                and versatile approach to any web development project.
              </p>
            </article>
          </div>
          <div className='w-full '>
            <article className='flex justify-start flex-wrap dark:text-boston-blue-50 text-boston-blue-900 mt-10 sm:mt-0'>
              <span className='w-full h-fit'>Manizales / Caldas </span>
              <span className='w-full h-fit'>Colombia.</span>
            </article>
          </div>
        </div>
        <div className='md:w-full lg:w-1/2 flex justify-between flex-wrap px-5 pt-10'>
          <div>
            <section className='divide-y-2 divide-boston-blue-700'>
              <h2 className=' text-4xl text-left dark:text-boston-blue-50 text-boston-blue-500  '>
                HOBBIES & INTERESTS
              </h2>
              <div className='mt-3'></div>
            </section>
            <section className='grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-2 w-full gap-2 sm:gap-4 mt-8'>
              <Hobbies
                icon={
                  <span className='icon-[iconoir--gym] text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[emojione-monotone--soccer-ball] text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[material-symbols--travel] text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[ri--macbook-line] text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[mdi--code-json] text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
              <Hobbies
                icon={
                  <span className='icon-[material-symbols--family-home-rounded] text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
                }
              ></Hobbies>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
