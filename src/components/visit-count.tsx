import {
  getFirestore,
  getDoc,
  updateDoc,
  doc,
  onSnapshot,
  DocumentSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { CountNumberAnimated } from './count-number-animated';
import { Users } from 'lucide-react';

export const VisitCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const db = getFirestore();
    const documentID = import.meta.env.VITE_APP_ENV;

    onSnapshot(doc(db, 'visit_count', documentID), (response: DocumentSnapshot) => {
      setCount(response.data()?.count ?? 0);
    });
    getDoc(doc(db, 'visit_count', documentID)).then((response) => {
      const newCount = (response.data()?.count ?? 0) + 1;
      updateDoc(doc(db, 'visit_count', documentID), {
        count: newCount,
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
