import { decodeAuthToken } from '../../src/tools/decode.tools';
import jwt_decode from 'jwt-decode';

describe('decodeAuthToken', () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  it('should decode the token correctly', () => {
    const decodedToken = decodeAuthToken(token);
    expect(decodedToken).toEqual(jwt_decode(token));
  });

  it('should throw an error if the token is invalid', () => {
    const invalidToken = 'invalid_token';
    expect(() => decodeAuthToken(invalidToken)).toThrowError();
  });
});
