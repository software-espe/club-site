import { useSelector } from 'react-redux';
import { State } from '../store';
import type { User } from '@firebase/auth';

const userSelector = () => {
  const user = useSelector((state: State): User => {
    return state.userSession.user as User;
  });

  const isLoading = useSelector((state: State): boolean => {
    return state.userSession.isLoading;
  });

  const isLogged = useSelector((state: State): boolean => {
    return state.userSession.loggedIn;
  });

  return {
    user,
    isLoading,
    isLogged
  };
};

export default userSelector;
