import { Slider, Chip, Spinner, Tooltip } from '@nextui-org/react';
import { ReactElement } from 'react';

export interface ChipSkillProps {
  icon?: ReactElement;
  iconLabel?: string;
  defaultValue?: number;
  inProgress?: boolean;
}
export const ChipSkill: React.FC<ChipSkillProps> = ({
  icon,
  iconLabel,
  defaultValue = 0,
  inProgress = false,
}) => {
  return (
    <div
      className='w-full
      flex justify-between items-center 
      gap-5
      bg-white dark:bg-transparent
    dark:border-white-alpha-light border-boston-blue-900 border-1 rounded-lg px-10 py-3'
    >
      <article className=' flex items-center gap-5'>
        <Chip
          className='px-6 bg-transparent'
          variant='flat'
          startContent={icon}
        >
          {iconLabel}
        </Chip>
      </article>
      <Slider
        isDisabled={true}
        size='sm'
        radius='md'
        step={1}
        maxValue={100}
        minValue={0}
        defaultValue={defaultValue}
        aria-label='react'
        className='w-80 text-black'
        classNames={{
          base: 'max-w-md gap-3',
          track: 'border-s-bg-black',
          filler: 'bg-gradient-to-r from-boston-blue-900  to-boston-blue-300',
          thumb: [
            'transition-size',
            'bg-gradient-to-r from-boston-blue-900 to-boston-blue-300',
            'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
            'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
          ],
        }}
      />
      {inProgress ? (
        <Tooltip content='In progress'>
          <Spinner size='sm' color='warning' />
        </Tooltip>
      ) : (
        ''
      )}
    </div>
  );
};
