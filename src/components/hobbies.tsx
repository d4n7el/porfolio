import { HobbiesProps } from '@interface/hobbies.interface';

export const Hobbies: React.FC<HobbiesProps> = ({ icon }) => {
  return (
    <article
      className='bg-white-alpha
      flex justify-center 
      dark:bg-black-alpha 
      border-boston-blue-500
      border-solid border pl-10 pr-10 border-t-0 border-b-0'
    >
      {icon}
    </article>
  );
};
