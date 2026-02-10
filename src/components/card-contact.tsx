import { CardContactProps } from 'src/interface/card-contact.interface';

export const CardContact: React.FC<CardContactProps> = ({
  icon,
  url,
  arialLabel,
}) => {
  return (
    <div
      className='bg-white-alpha-light
			dark:bg-black-alpha-9
			rounded-full
			sm:w-10
			card-blur h-12 flex items-center justify-center'
    >
      <a
        aria-label={arialLabel}
        href={url}
        target='blank'
        className='cursor-pointer dark:text-boston-blue-100 text-boston-blue-800'
      >
        {icon}
      </a>
    </div>
  );
};
