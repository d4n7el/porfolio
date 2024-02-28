import { Card, Skeleton } from '@nextui-org/react';
const Loading = () => {
  return (
    <div className='w-screen h-[100vh] overflow-hidden dark:bg-black bg-white'>
      <div
        className='flex dark:justify-start
				justify-end items-center h-full
				relative
				sm:pt-0 pb-10 sm:pb-0 w-screen'
      >
        <section
          className='sm:mx-4 md:mx-2 lg:mx-10
					sm:ml-6 flex sm:gap-2 md:gap-2
					lg:gap-6 flex-wrap justify-center w-screen'
        >
          <div
            className='flex-wrap
           	md:pl-10 md:pr-10
            md:py-16 pl-10 sm:pr-10 py-5'
          >
            <Card className='w-[300px] space-y-5 p-4' radius='lg'>
              <Skeleton className='rounded-lg'>
                <div className='h-24 rounded-lg bg-default-300'></div>
              </Skeleton>
              <div className='space-y-3'>
                <Skeleton className='w-3/5 rounded-lg'>
                  <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
                </Skeleton>
                <Skeleton className='w-4/5 rounded-lg'>
                  <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
                </Skeleton>
                <Skeleton className='w-2/5 rounded-lg'>
                  <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
                </Skeleton>
              </div>
            </Card>
            <section
              id='actions'
              className='flex gap-3 w-full justify-start mt-8'
            >
              <div className='max-w-[300px] w-full flex items-center gap-3'>
                <div>
                  <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                  <Skeleton className='h-3 w-3/5 rounded-lg' />
                  <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
              </div>
              <div className='max-w-[300px] w-full flex items-center gap-3'>
                <div>
                  <Skeleton className='flex rounded-full w-12 h-12' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                  <Skeleton className='h-3 w-3/5 rounded-lg' />
                  <Skeleton className='h-3 w-4/5 rounded-lg' />
                </div>
              </div>
            </section>
          </div>
          <div className='flex w-full sm:w-full md:w-20 lg:w-60 gap-2 flex-wrap justify-center mt-10 sm:mt-0'>
            <div className='max-w-[300px] w-full flex items-center gap-3'>
              <div>
                <Skeleton className='flex rounded-full w-12 h-12' />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
              </div>
            </div>
            <div className='max-w-[300px] w-full flex items-center gap-3'>
              <div>
                <Skeleton className='flex rounded-full w-12 h-12' />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
              </div>
            </div>
            <div className='max-w-[300px] w-full flex items-center gap-3'>
              <div>
                <Skeleton className='flex rounded-full w-12 h-12' />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
              </div>
            </div>
            <div className='max-w-[300px] w-full flex items-center gap-3'>
              <div>
                <Skeleton className='flex rounded-full w-12 h-12' />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Loading;
