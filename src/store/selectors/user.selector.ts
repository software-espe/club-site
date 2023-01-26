import { State } from '../store';
import { clubUser } from '../../interface/user.interface';
import { useSelector } from 'react-redux';

const userSelector = () => {
  const user = useSelector((state: State): clubUser => {
    return state.userSession.user as clubUser;
  });

  const isLogged = useSelector((state: State): boolean => {
    return state.userSession.loggedIn;
  });

  return {
    user,
    isLogged
  };
};

export default userSelector;
