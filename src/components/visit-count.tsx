import {
  getFirestore,
  getDoc,
  updateDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { CountNumberAnimated } from './count-number-animated';
import { Users } from 'lucide-react';

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
    <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyber-850 border border-slate-800 text-[11px] font-mono text-slate-400'>
      <Users className='w-3 h-3 text-cyan-400' />
      <CountNumberAnimated number={count} />
    </div>
  );
};
