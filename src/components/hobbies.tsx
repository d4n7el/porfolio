import { HobbiesProps } from '@interface/hobbies.interface';

export const Hobbies: React.FC<HobbiesProps> = ({ icon }) => {
  return (
    <article
      className='bg-white-alpha
     flex justify-center 
     dark:bg-black-alpha 
     rounded-xl border-boston-blue-800 
     border-solid border p-2 sm:p-2 md:p-6'
    >
      {icon}
    </article>
  );
};
