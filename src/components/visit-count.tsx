import { Chip, NavbarItem } from '@nextui-org/react';
import {
  getFirestore,
  getDoc,
  updateDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { CountNumberAnimated } from './count-number-animated';

export const VisitCount = () => {
  const [count, setCount] = useState<number>(0);
  const BD = getFirestore();
  const documentID = import.meta.env.VITE_APP_ENV;

  useEffect(() => {
    onSnapshot(doc(BD, 'visit_count', documentID), (response: any) => {
      setCount(response.data().count);
    });
    getDoc(doc(BD, 'visit_count', documentID)).then((response) => {
      const count = response.data()?.count + 1;
      updateDoc(doc(BD, 'visit_count', documentID), {
        count: count,
      });
    });
  }, []);
  return (
    <NavbarItem className='flex'>
      <div className='flex '>
        <Chip
          className=' dark:text-boston-blue-100
          text-boston-blue-900 px-2 border-1'
          startContent={
            <span
              className='icon-[ph--users-three]
              h-6 w-6 dark:text-boston-blue-100
            text-boston-blue-900 animate-slide-in-left '
            ></span>
          }
        >
          <CountNumberAnimated number={count}></CountNumberAnimated>
        </Chip>
      </div>
    </NavbarItem>
  );
};
