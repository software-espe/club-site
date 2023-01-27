import { User } from '@firebase/auth';
import { clubUser } from '../interface/user.interface';
import { customClaims } from '../interface/common.interface';
import { decodeAuthToken } from './decode.tools';

export const getInfoFromUser = (user: User): clubUser => {
  const { role, status } = getRoleFromUser(user);

  return {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid,
    role: role,
    status: status || 'unverified'
  };
};

const getRoleFromUser = (user: User): customClaims => {
  const authToken = user.toJSON() as any;
  const customClaims = authToken.stsTokenManager.accessToken;
  return decodeAuthToken(customClaims) as customClaims;
};
