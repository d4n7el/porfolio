import { Button, Link } from '@nextui-org/react';
import { NavProps } from '@interface/nav.interface';
import { CardContact } from '@components/card-contact';

export const HomeDefault: React.FC<NavProps> = ({
  changeActiveLink = () => {},
}) => {
  return (
    <div className='sm:h-auto md:h-[100vh] overflow-hidden'>
      <div
        id='home'
        className='flex dark:justify-start
        justify-end items-center h-full
        bg-cover bg-center relative
        bg-light-home-bg-default dark:bg-dark-home-bg-default pt-7 sm:pt-0 pb-10 sm:pb-0'
        onMouseEnter={() => {
          changeActiveLink('home');
        }}
      >
        <section
          id='me'
          className='sm:mx-4 md:mx-2 lg:mx-10
          sm:ml-6 flex sm:gap-2 md:gap-2
          lg:gap-6 flex-wrap justify-center'
        >
          <div
            className='flex-wrap
            scale-up-top-left
            card-blur bg-white-alpha
            dark:bg-black-alpha 
            border-boston-blue-800
            md:rounded-xl
            md:border-solid md:border md:pl-10 md:pr-10
            md:py-16 pl-10 sm:pr-10 py-5'
          >
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
              <span className='tracking-[.50em] sm:tracking-[.85em] ml-3'>
                Daniel Zamora
              </span>
            </pre>
            <section
              id='actions'
              className='flex gap-3 w-full justify-start mt-8'
            >
              <Button
                as={Link}
                href='#about'
                color='primary'
                variant='bordered'
                className=' text-boston-blue-900 dark:text-boston-blue-200 border-light-primary sm:px-20'
              >
                About
              </Button>
              <Button
                as={Link}
                href='#resume'
                color='primary'
                variant='bordered'
                className='text-boston-blue-900 dark:text-boston-blue-200 border-light-primary sm:px-20'
              >
                Resume
              </Button>
            </section>
          </div>
          <div className='flex w-full sm:w-full md:w-20 lg:w-60 gap-2 flex-wrap justify-center mt-10 sm:mt-0'>
            <CardContact
              icon={<span className='icon-[bi--linkedin] h-12 w-12'></span>}
              url='https://www.linkedin.com/in/daniel-felipe-zamora-ortiz/'
            ></CardContact>
            <CardContact
              icon={<span className='icon-[mdi--github] h-12 w-12'></span>}
              url='https://github.com/d4n7el'
            ></CardContact>
            <CardContact
              icon={
                <span className='icon-[simple-icons--whatsapp] h-12 w-12'></span>
              }
              url='https://api.whatsapp.com/send?phone=3206198705'
            ></CardContact>
            <CardContact
              icon={
                <span className='icon-[uil--envelope-upload] h-12 w-12'></span>
              }
              url='mailto:dfzortiz@gmail.com?subject=Direct contact from portfolio'
            ></CardContact>
          </div>
        </section>
      </div>
    </div>
  );
};
