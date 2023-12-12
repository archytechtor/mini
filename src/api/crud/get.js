import {db} from '../../firebase';
import {collection, doc, getDoc, getDocs, query} from 'firebase/firestore';

export const get = async(collectionName, id) => {
  if (id) {
    const document = await getDoc(doc(db, collectionName, id));

    if (document.exists()) {
      return {
        id: document.id,
        ...document.data()
      };
    }

    return null;
  }

  const {docs} = await getDocs(query(collection(db, collectionName)));

  return docs.map((document) => {
    return {
      id: document.id,
      ...document.data()
    };
  });
};