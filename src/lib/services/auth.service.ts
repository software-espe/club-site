import { logOutGoogle, signInWithGoogle } from '../firebase/firebase_auth';
import type { User } from '@firebase/auth';

const userSignIn = async (): Promise<User | void> => {
  try {
    const userSession = await signInWithGoogle();
    return userSession.user;
  } catch (error) {
    console.error(error);
  }
};

const userSignOut = async (): Promise<void> => {
  try {
    await logOutGoogle();
  } catch (error) {
    console.error(error);
  }
};

export { userSignIn, userSignOut };
