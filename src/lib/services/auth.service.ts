import { signInWithGoogle } from '../firebase/firebase_auth';
import type { User } from '@firebase/auth';

const userSignIn = async (): Promise<User | void> => {
  try {
    const userSession = await signInWithGoogle();
    return userSession.user;
  } catch (error) {
    console.error(error);
  }
};
export { userSignIn };
