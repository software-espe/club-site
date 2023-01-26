import { clubUser } from '../../interface/user.interface';
import { getInfoFromUser } from '../../tools/user.tools';
import { logOutGoogle, signInWithGoogle } from '../firebase/firebase_auth';
import { role } from '../../interface/common.interface';

const userSignIn = async (): Promise<clubUser | void> => {
  try {
    const userSession = await signInWithGoogle();
    return getInfoFromUser(userSession.user);
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

export const setUserRole = async (userUid: string, userRole: role) => {
  try {
    await fetch('/api/users/role', {
      method: 'POST',
      body: JSON.stringify({ uid: userUid, role: userRole }),
      headers: {
        'Content-Type': 'application/json',
        authorization: process.env.AUTHORIZATION_API_KEY || ''
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUserRole = async (
  userUid: string
): Promise<Record<role, boolean> | void> => {
  try {
    const response = await fetch(`/api/users/role?uid=${userUid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: process.env.AUTHORIZATION_API_KEY || ''
      }
    });
    const { role } = await response.json();
    return role;
  } catch (error) {
    console.error(error);
  }
};
