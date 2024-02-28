import { NavProps } from '@interface/nav.interface';
import { Button, Link } from '@nextui-org/react';
import { CardContact } from '@components/card-contact';
import { useTranslation } from 'react-i18next';

const ContainerHome: React.FC<NavProps> = ({ changeActiveLink = () => {} }) => {
  const [t] = useTranslation('translation');
  return (
    <div
      className='flex relative
        justify-center items-center h-full
        bg-cover bg-center
        bg-light-home-bg-default dark:bg-dark-home-bg-default 
        pt-12 md:pt-0 pb-10 sm:pb-0'
      onMouseEnter={() => {
        changeActiveLink('#home');
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
            card-blur bg-white-alpha-light
            dark:bg-black-alpha 
            border-boston-blue-800
            md:rounded-xl
            md:border-solid md:border md:pl-10 md:pr-10
            md:py-16 pl-10 sm:pr-10 py-5 pr-10'
        >
          <h1
            className='font-thin  bg-none 
              dark:text-boston-blue-50
              text-boston-blue-800 font-default
              text-8xl text-left'
          >
            <span className='font-bold dark:text-boston-blue-400 text-boston-blue-600'>
              {t('hi')}
            </span>
            <span>, {t('iam')}</span>
          </h1>
          <h2
            className='font-thin text-6xl text-left
              dark:text-boston-blue-50
              text-boston-blue-800 font-default'
          >
            {t('softwareDeveloper')}
          </h2>
          <pre
            className='text-left mt-3 text-2xl 
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
              aria-label='go-about'
              as={Link}
              href='#about'
              color='primary'
              variant='bordered'
              className=' text-boston-blue-900 dark:text-boston-blue-200 border-light-primary sm:px-20'
            >
              {t('about')}
            </Button>
            <Button
              aria-label='go-resume'
              as={Link}
              href='#resume'
              color='primary'
              variant='bordered'
              className='text-boston-blue-900 dark:text-boston-blue-200 border-light-primary sm:px-20'
            >
              {t('resume')}
            </Button>
          </section>
        </div>
        <div
          className='flex w-full sm:w-full md:w-20 lg:w-60 gap-2 flex-wrap justify-center
         mt-10 sm:mt-0 pb-10 md:pb-0'
        >
          <CardContact
            icon={<span className='icon-[bi--linkedin] h-12 w-12'></span>}
            url='https://www.linkedin.com/in/daniel-felipe-zamora-ortiz/'
            arialLabel='go-to-linkedin'
          ></CardContact>
          <CardContact
            icon={<span className='icon-[mdi--github] h-12 w-12'></span>}
            url='https://github.com/d4n7el'
            arialLabel='go-to-github'
          ></CardContact>
          <CardContact
            icon={
              <span className='icon-[simple-icons--whatsapp] h-12 w-12'></span>
            }
            url='https://api.whatsapp.com/send?phone=3206198705'
            arialLabel='send-message-by-whatsapp'
          ></CardContact>
          <CardContact
            icon={
              <span className='icon-[uil--envelope-upload] h-12 w-12'></span>
            }
            url='mailto:dfzortiz@gmail.com?subject=Direct contact from portfolio'
            arialLabel='send-email'
          ></CardContact>
        </div>
      </section>
      <Link
        href='#about'
        className='hidden md:inline-flex absolute bottom-24 
        bg-boston-blue-950-alpha-8 dark:bg-boston-blue-950-alpha-4
        drop-shadow-md rounded-full border-1 border-white-alpha'
      >
        <span
          className='icon-[formkit--down] w-20 h-20
        text-white animate-bouncing duration-150'
        ></span>
      </Link>
    </div>
  );
};

export default ContainerHome;
