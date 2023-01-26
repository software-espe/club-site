import { User } from '@firebase/auth';
import { clubUser } from '../interface/user.interface';
import { decodeAuthToken } from './decode.tools';
import { role } from '../interface/common.interface';
import { setUserRole } from '../lib/services/auth.service';

export const getInfoFromUser = async (user: User): Promise<clubUser> => ({
  displayName: user.displayName,
  email: user.email,
  photoURL: user.photoURL,
  uid: user.uid,
  role: await getRoleFromUser(user)
});

const getRoleFromUser = async (user: User): Promise<role> => {
  const authToken = user.toJSON() as any;
  const customClaims = authToken.stsTokenManager.accessToken;
  const token = decodeAuthToken(customClaims) as { role: role };
  if (!token.role) {
    await setUserRole(user.uid, 'progress');
    return 'progress';
  }
  return token.role;
};
