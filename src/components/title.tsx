export interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <section className='divide-y-2 divide-boston-blue-700'>
      <h2 className='text-2xl lg:text-xl  xl:text-4xl text-left dark:text-boston-blue-50 text-boston-blue-500'>
        {title.toUpperCase()}
      </h2>
      <div className='text-1xl mt-3 pt-2 dark:text-boston-blue-50 text-boston-blue-900'>
        {subtitle}
      </div>
    </section>
  );
};
