import { clubUser } from '../../interface/user.interface';
import { emailStatus, role } from '../../interface/common.interface';
import { getInfoFromUser } from '../../tools/user.tools';
import { logOutGoogle, signInWithGoogle } from '../firebase/firebase_auth';

const userSignIn = async (): Promise<clubUser | void> => {
  const userSession = await signInWithGoogle();
  return getInfoFromUser(userSession.user);
};

export const userSignUp = async (): Promise<clubUser | void> => {
  const userSession = await signInWithGoogle();
  const userInfo = getInfoFromUser(userSession.user);
  return await validateUser(userInfo);
};

const userSignOut = async (): Promise<void> => {
  try {
    await logOutGoogle();
  } catch (error) {
    console.error(error);
  }
};

export { userSignIn, userSignOut };

export const setUserRole = async (
  userUid: string,
  userRole: role | undefined,
  status: emailStatus
) => {
  try {
    await fetch('/api/users/role', {
      method: 'POST',
      body: JSON.stringify({
        uid: userUid,
        role: userRole,
        status: status
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: process.env.AUTHORIZATION_API_KEY || ''
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const validateUser = async (user: clubUser): Promise<clubUser> => {
  if (user.status === 'verified' || user.status === 'banned') {
    return user;
  }

  const validation = await fetch('/api/users/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: process.env.AUTHORIZATION_API_KEY || ''
    },
    body: JSON.stringify({ user })
  });
  return (await validation.json()) as clubUser;
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
