import { Card, CardHeader } from '@nextui-org/react';
import { SkillsCardProps } from '@interface/card-software-skills.interface';
import { useTranslation } from 'react-i18next';

export const SkillsCard = ({
  icon,
  label,
  description,
  labelBody,
  dataBody = {},
}: SkillsCardProps) => {
  const [t] = useTranslation('translation');
  return (
    <Card
      className=' w-full sm:min-w-[47%] sm:max-w-[47%] md:min-w-[300px] md:max-w-[300px] 
      shadow-none border-1 border-sky-500
     border-boston-blue-900 '
    >
      <CardHeader className='flex gap-3 h-full'>
        {icon}
        <div className='flex flex-col'>
          <p className='text-md flex justify-start'>
            <span className='font-bold text-boston-blue-900 dark:text-boston-blue-500 text-left'>
              {label}
            </span>
          </p>
          {description ? (
            <span
              className='tracking-wide text-left font-extralight text-sm
             text-boston-blue-900 dark:text-boston-blue-100'
            >
              {t(description)}
            </span>
          ) : null}
          <p className='text-small flex justify-start text-left text-boston-blue-900 dark:text-boston-blue-600'>
            {labelBody ? <span>{t(labelBody, dataBody)}</span> : null}
          </p>
        </div>
      </CardHeader>
    </Card>
  );
};
