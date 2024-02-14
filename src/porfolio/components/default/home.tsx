import { Button, Link } from '@nextui-org/react';

export const HomeDefault = () => {
  return (
    <div className='h-[100vh] '>
      <div
        id='home'
        className=' flex dark:justify-start justify-end items-center h-full bg-cover bg-center relative bg-light-home-bg-default dark:bg-dark-home-bg-default'
      >
        <section
          id='me'
          className='sm:mx-4 md:mx-2 lg:mx-10 sm:ml-6 flex sm:gap-2 md:gap-2 lg:gap-6 flex-wrap justify-center'
        >
          <div className='flex-wrap  scale-up-top-left card-blur pl-10 pr-10 py-16 bg-white-alpha dark:bg-black-alpha rounded-xl border-boston-blue-800 border-solid border'>
            <h1
              className='font-thin  bg-none 
             dark:text-boston-blue-50
             text-boston-blue-800 font-default
              text-8xl text-justify'
            >
              <span className='font-bold dark:text-boston-blue-400 text-boston-blue-600'>
                Hi
              </span>
              <span>, I'm</span>
            </h1>
            <h2
              className='font-thin text-7xl text-justify
              dark:text-boston-blue-50
              text-boston-blue-800 font-default'
            >
              Software Developer
            </h2>
            <pre
              className='text-justify mt-3 text-2xl 
              dark:text-boston-blue-200  
              text-boston-blue-800 font-default flex items-center'
            >
              <span className='icon-[teenyicons--minus-solid] dark:text-boston-blue-700'></span>
              <span className='tracking-[.85em] ml-3'>Daniel Zamora</span>
            </pre>
            <section
              id='actions'
              className='flex gap-3 w-full justify-start w-2/5 mt-8 justify-center'
            >
              <Button
                as={Link}
                href='#about'
                color='primary'
                variant='bordered'
                className=' text-boston-blue-900 dark:text-boston-blue-200 border-light-primary px-20'
              >
                About
              </Button>
              <Button
                as={Link}
                href='#resume'
                color='primary'
                variant='bordered'
                className='text-boston-blue-900 dark:text-boston-blue-200 border-light-primary px-20'
              >
                Resume
              </Button>
            </section>
          </div>
          <div className='flex sm:w-full sm:min-md md:w-20 lg:w-60 gap-2 flex-wrap justify-center'>
            <div
              className='bg-white-alpha
               dark:bg-black-alpha
                rounded-xl
               border-boston-blue-800
                border-solid border
                w-60 sm:w-40 
                card-blur h-24 scale-up-top-right flex items-center justify-center'
            >
              <a
                href='https://www.linkedin.com/in/daniel-felipe-zamora-ortiz/'
                target='blank'
                className='cursor-pointer dark:text-boston-blue-100 text-boston-blue-800'
              >
                <span className='icon-[bi--linkedin] h-12 w-12'></span>
              </a>
            </div>
            <div
              className='bg-white-alpha
              dark:bg-black-alpha
              rounded-xl
              border-boston-blue-800
              border-solid border
              w-60 sm:w-40 
              card-blur h-24 scale-up-top-right flex items-center justify-center'
            >
              <a
                target='blank'
                href='https://github.com/d4n7el'
                className='cursor-pointer dark:text-boston-blue-100 text-boston-blue-800'
              >
                <span className='icon-[mdi--github] h-12 w-12'></span>
              </a>
            </div>
            <div
              className='bg-white-alpha
              dark:bg-black-alpha
              rounded-xl
              border-boston-blue-800
              border-solid border
              w-60 sm:w-40 
              card-blur h-24 scale-up-top-right flex items-center justify-center'
            >
              <a
                target='blank'
                href='https://api.whatsapp.com/send?phone=3206198705'
                className='cursor-pointer dark:text-boston-blue-100 text-boston-blue-800'
              >
                <span className='icon-[simple-icons--whatsapp] h-12 w-12'></span>
              </a>
            </div>
            <div
              className='bg-white-alpha
              dark:bg-black-alpha
              rounded-xl
              border-boston-blue-800
              border-solid border
              w-60 sm:w-40 
              card-blur h-24 scale-up-top-right flex items-center justify-center'
            >
              <a
                target='blank'
                href='mailto:dfzortiz@gmail.com?subject=Direct contact from portfolio'
                className='cursor-pointer dark:text-boston-blue-100 text-boston-blue-800'
              >
                <span className='icon-[uil--envelope-upload] h-12 w-12'></span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
