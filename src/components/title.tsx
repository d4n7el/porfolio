export interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <section className='divide-y-2 divide-boston-blue-700'>
      <h2 className='text-4xl text-left dark:text-boston-blue-50 text-boston-blue-500'>
        {title}
      </h2>
      <div className='mt-3 w-80 flex'>{subtitle}</div>
    </section>
  );
};
