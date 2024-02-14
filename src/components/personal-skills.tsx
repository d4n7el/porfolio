import { Chip } from '@nextui-org/react';
import { ReactElement } from 'react';

export interface PersonalSkillsProps {
  label: string;
  icon?: ReactElement;
}

export const PersonalSkills: React.FC<PersonalSkillsProps> = ({
  label = 'Chip',
  icon,
}) => {
  return (
    <div>
      <Chip
        startContent={
          icon ?? (
            <span
              className='icon-[material-symbols-light--person-raised-hand]
           text-boston-blue-900 dark:text-boston-blue-100'
            ></span>
          )
        }
        variant='faded'
        className='text-boston-blue-900 dark:text-boston-blue-100 border-boston-blue-900 px-3'
      >
        {label}
      </Chip>
    </div>
  );
};
