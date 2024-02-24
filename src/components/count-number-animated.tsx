import { useEffect, useState } from 'react';

export interface CountNumberAnimatedProps {
  number: number;
}

export const CountNumberAnimated = ({ number }: CountNumberAnimatedProps) => {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    const countTimeOut = setInterval(() => {
      if (num < number) {
        setNum((prevNum) => prevNum + 1);
      } else {
        clearInterval(countTimeOut);
      }
    }, 2);

    return () => clearInterval(countTimeOut);
  }, [number, num]);

  return <>{num ? <span className=''>{num}</span> : null}</>;
};
