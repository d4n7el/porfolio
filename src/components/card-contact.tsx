import { CardContactProps } from 'src/interface/card-contact.interface';

export const CardContact: React.FC<CardContactProps> = ({ icon, url }) => {
  return (
    <div
      className='bg-white-alpha
			dark:bg-black-alpha
			rounded-xl
			border-boston-blue-800
			border-solid border
			w-20 sm:w-40
			card-blur h-24 scale-up-top-right flex items-center justify-center'
    >
      <a
        href={url}
        target='blank'
        className='cursor-pointer dark:text-boston-blue-100 text-boston-blue-800'
      >
        {icon}
      </a>
    </div>
  );
};
