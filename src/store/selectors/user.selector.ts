import { useSelector } from 'react-redux';
import { State } from '../store';
import type { User } from '@firebase/auth';

const userSelector = () => {
  const user = useSelector((state: State): User => {
    return state.user.user as User;
  });

  return {
    user
  };
};

export default userSelector;
