import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential
} from '@firebase/auth';
import { firebaseAuth } from './firebase.config';

const signInWithGoogle = async (): Promise<UserCredential> => {
  return await signInWithPopup(
    firebaseAuth,
    new GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' })
  );
};
const logOutGoogle = async (): Promise<void> => {
  await signOut(firebaseAuth);
};

export { signInWithGoogle, logOutGoogle };
