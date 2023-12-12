import {db} from '../../firebase';
import {collection, deleteDoc, doc, getDocs, query, where} from 'firebase/firestore';

export const remove = async(collectionName, {id, filter}) => {
  if (id) {
    return deleteDoc(doc(db, collectionName, id));
  }

  const docSnap = await getDocs(
    query(
      collection(db, collectionName),
      ...(filter || []).map(({field, op, value}) => where(field, op, value))
    )
  );

  docSnap.forEach(({ref}) => {
    deleteDoc(ref);
  });
};