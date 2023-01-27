import { UserInfo } from '@firebase/auth';
import { emailStatus, role } from './common.interface';

export interface clubUser extends Omit<UserInfo, 'providerId' | 'phoneNumber'> {
  role: role | undefined;
  status: emailStatus;
}
