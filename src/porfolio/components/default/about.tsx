import { User } from '@nextui-org/react';
import imageUser from '@images/me.webp';

export const AboutDefault = () => {
  return (
    <div id='about' className='h-[100vh] dark:bg-black bg-white pt-20 px-6'>
      <div className='flex justify-center flex-wrap h-[90vh]'>
        <div className='md:w-full lg:w-1/2 flex justify-between flex-wrap px-28 pt-10'>
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
            <div className='w-full flex justify-start   '>
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
            <article className='flex justify-start flex-wrap dark:text-boston-blue-50 text-boston-blue-900'>
              <span className='w-full h-fit'>Manizales / Caldas </span>
              <span className='w-full h-fit'>Colombia.</span>
            </article>
          </div>
        </div>
        <div className='md:w-full lg:w-1/2 flex justify-between flex-wrap px-28 pt-10'>
          <div>
            <section className='divide-y-2 divide-boston-blue-700'>
              <h2 className=' text-4xl text-left dark:text-boston-blue-50 text-boston-blue-500  '>
                HOBBIES & INTERESTS
              </h2>
              <div className='mt-3'></div>
            </section>
            <section className='grid  sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-2 w-full gap-4 mt-8'>
              <article className='bg-white-alpha flex justify-center dark:bg-black-alpha rounded-xl border-boston-blue-800 border-solid border sm:p-2 md:p-6'>
                <span className='icon-[iconoir--gym] sm:text-3xl md:text-4xl text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
              </article>
              <article className='bg-white-alpha flex justify-center dark:bg-black-alpha rounded-xl border-boston-blue-800 border-solid border sm:p-2 md:p-6'>
                <span className='icon-[emojione-monotone--soccer-ball] sm:text-3xl md:text-4xl text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
              </article>
              <article className='bg-white-alpha flex justify-center dark:bg-black-alpha rounded-xl border-boston-blue-800 border-solid border sm:p-2 md:p-6'>
                <span className='icon-[material-symbols--travel] sm:text-3xl md:text-4xl text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
              </article>
              <article className='bg-white-alpha flex justify-center dark:bg-black-alpha rounded-xl border-boston-blue-800 border-solid border sm:p-2 md:p-6'>
                <span className='icon-[ri--macbook-line] sm:text-3xl md:text-4xl text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
              </article>
              <article className='bg-white-alpha flex justify-center dark:bg-black-alpha rounded-xl border-boston-blue-800 border-solid border sm:p-2 md:p-6'>
                <span className='icon-[mdi--code-json] sm:text-3xl md:text-4xl text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
              </article>
              <article className='bg-white-alpha flex justify-center dark:bg-black-alpha rounded-xl border-boston-blue-800 border-solid border sm:p-2 md:p-6'>
                <span className='icon-[material-symbols--family-home-rounded] sm:text-3xl md:text-4xl text-6xl text-boston-blue-900 dark:text-boston-blue-200'></span>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
