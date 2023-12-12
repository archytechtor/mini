import {auth} from '../../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const signUp = async(email, password) => {
  const {user} = await createUserWithEmailAndPassword(auth, email, password);

  return user;
};