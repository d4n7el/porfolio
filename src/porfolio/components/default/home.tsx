import { Button, Link } from '@nextui-org/react';
import '@styles/default/home.css';

export const HomeDefault = () => {
  return (
    <div className='h-[95vh]'>
      <div
        id='home-me'
        className='flex justify-start  items-center h-full pt-16  bg-cover bg-center relative bg-light-home-bg-default dark:bg-dark-home-bg-default'
      >
        <section id='me' className='lg:mx-96 sm:mx-40  h-[58vh]'>
          <div className='card-blur pl-10 pr-10 py-16 bg-white-alpha dark:bg-black-alpha rounded-xl'>
            <h1
              className='font-bold bg-none 
             dark:text-light-primary
             text-dark-tertiary font-default
              text-9xl text-justify'
            >
              DANIEL
            </h1>
            <h2
              className='font-thin text-7xl text-justify
              dark:text-light-primary
              text-dark-tertiary font-default'
            >
              ZAMORA
            </h2>
            <pre
              className='text-justify mt-3 text-2xl tracking-[.65em]
              dark:text-light-primary
              text-dark-tertiary font-default'
            >
              Software Developer
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
                className=' text-light-primary border-light-primary px-20'
              >
                About
              </Button>
              <Button
                as={Link}
                href='#resume'
                color='primary'
                variant='bordered'
                className='text-light-primary border-light-primary px-20'
              >
                Resume
              </Button>
            </section>
          </div>
        </section>
        <section className='flex absolute bottom-20 w-2/5 justify-start px-20 gap-3'>
          <a href=''>
            <span className='icon-[mdi--github] h-8 w-8'></span>
          </a>
          <a href=''>
            <span className='icon-[bi--linkedin] h-8 w-8'></span>
          </a>
          <a href=''>
            <span className='icon-[simple-icons--whatsapp] h-8 w-8'></span>
          </a>
        </section>
      </div>
    </div>
  );
};
