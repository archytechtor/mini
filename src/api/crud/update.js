import {db} from '../../firebase';
import {doc, updateDoc} from 'firebase/firestore';

export const update = (collectionName, id, data) =>
  updateDoc(doc(db, collectionName, id), data);