import { UserInfo } from '@firebase/auth';
import { role } from './common.interface';

export interface clubUser extends Omit<UserInfo, 'providerId' | 'phoneNumber'> {
  role: role;
}
