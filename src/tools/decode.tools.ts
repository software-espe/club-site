import jwt_decode from 'jwt-decode';

export const decodeAuthToken = (token: string) => {
  return jwt_decode(token);
};
