import {
  Badge,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/react';
import { TimeLineProps } from '@interface/time-line.interface';

export const TimeLine: React.FC<TimeLineProps> = ({
  title = 'Test time Line',
  subtitle,
  content,
  htmlContent,
  initialDate = '2024/02/14',
  finalDate,
  icon,
}) => {
  return (
    <div
      className='w-full
        flex justify-between items-center
        dark:border-white-alpha-light 
        border-boston-blue-500 border-1 border-r-0 border-b-0 border-t-0 
        pl-6 pr-2 relative min-h-28'
    >
      <div className='absolute left-[-20px]'>
        <Badge shape='circle' showOutline={false} className='left-0 absolute '>
          <Avatar
            className='bg-white dark:bg-black'
            isBordered
            radius='full'
            fallback={
              !icon ? (
                <span
                  className='icon-[iconamoon--history-thin] text-xl
                 dark:text-white-alpha text-boston-blue-950'
                ></span>
              ) : (
                ''
              )
            }
          />
        </Badge>
      </div>
      <Card className='w-fit bg-transparent shadow-none'>
        <CardHeader className='justify-between'>
          <div className='flex'>
            <div className='flex flex-col gap-1 items-start justify-center'>
              <h2 className='text-small text-left font-semibold leading-none dark:text-boston-blue-400 text-boston-blue-900 '>
                {title}
              </h2>
              <span className='text-small tracking-tight text-left  dark:text-boston-blue-50 text-boston-blue-900 '>
                {subtitle}
              </span>
              {htmlContent}
            </div>
          </div>
        </CardHeader>
        <CardBody className='px-3 py-0 text-small text-default-400'>
          <p className='text-left'>{content}</p>
        </CardBody>
        <CardFooter className='gap-3'>
          <div className='flex gap-1 items-center'>
            <span className='icon-[clarity--date-solid] font-semibold text-small dark:text-boston-blue-300  text-boston-blue-800 '></span>
            <p className='text-small dark:text-white text-boston-blue-500 tabular-nums'>
              {initialDate}
            </p>
          </div>
          <div className='flex gap-1 items-center'>
            <span className='icon-[clarity--date-solid] font-semibold text-small dark:text-boston-blue-300 text-boston-blue-800 '></span>
            <p className='text-small dark:text-white text-boston-blue-500 tabular-nums'>
              {finalDate ?? 'At the moment.'}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
