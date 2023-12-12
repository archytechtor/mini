import {db} from '../../firebase';
import {addDoc, collection, doc, writeBatch} from 'firebase/firestore';

export const add = async(collectionName, records, key) => {
  if (Array.isArray(records)) {
    const batch = writeBatch(db);

    records.forEach((record) => {
      if (typeof record === 'object') {
        return batch.set(doc(collection(db, collectionName)), record);
      }

      return batch.set(doc(collection(db, collectionName)), key ? {[key]: record} : {record});
    });

    return batch.commit();
  }

  const {id} = await addDoc(collection(db, collectionName), records);

  return id;
};