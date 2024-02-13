import {
  Badge,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/react';
import { ReactElement } from 'react';

export interface TimeLineProps {
  title: string;
  subtitle?: string;
  content?: string;
  htmlContent?: ReactElement;
  icon?: ReactElement;
  initialDate: string;
  finalDate?: string;
}

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
        dark:border-l-white-alpha-light 
        border-l-boston-blue-500 border-1 border-r-0 border-b-0 border-t-0 px-10 py-3 relative min-h-28'
    >
      <div className='absolute left-[-20px]'>
        <Badge shape='circle' showOutline={false} className='left-0 absolute'>
          <Avatar
            isBordered
            radius='full'
            fallback={
              !icon ? (
                <span className='icon-[iconamoon--history-thin] text-2xl text-boston-blue-950'></span>
              ) : (
                ''
              )
            }
          />
        </Badge>
      </div>
      <Card className='max-w-[340px] bg-transparent shadow-none'>
        <CardHeader className='justify-between'>
          <div className='flex gap-5'>
            <div className='flex flex-col gap-1 items-start justify-center'>
              <h4 className='text-small font-semibold leading-none dark:text-boston-blue-50 text-boston-blue-900 '>
                {title}
              </h4>
              <h5 className='text-small tracking-tight dark:text-boston-blue-400 text-boston-blue-900 '>
                {subtitle}
              </h5>
              {htmlContent}
            </div>
          </div>
        </CardHeader>
        <CardBody className='px-3 py-0 text-small text-default-400'>
          <p>{content}</p>
        </CardBody>
        <CardFooter className='gap-3'>
          <div className='flex gap-1 items-center'>
            <span className='icon-[clarity--date-solid] font-semibold text-small dark:text-white text-boston-blue-500 '></span>
            <p className=' text-default-400 text-small'>{initialDate}</p>
          </div>
          <div className='flex gap-1 items-center'>
            <span className='icon-[clarity--date-solid] font-semibold text-small dark:text-white text-boston-blue-500 '></span>
            <p className=' text-default-400 text-small'>
              {finalDate ?? 'At the moment.'}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
