import {
  login,
  setLoading,
  setTriedToLogin
} from '../../store/reducers/user.store';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../lib/services/auth.service';
import Image from 'next/image';
import userSelector from '../../store/selectors/user.selector';

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const { user, isLogged } = userSelector();

  const signIn = async () => {
    dispatch(setTriedToLogin(true));
    dispatch(setLoading(true));
    try {
      const userSession = await userSignUp();
      if (userSession) {
        dispatch(login(userSession));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <button
      onClick={signIn}
      className="rounded-full border border-2 md:h-60 md:w-60 h-52 w-52 center overflow-hidden"
    >
      {isLogged && (
        <img
          src={user.photoURL || ''}
          alt="user"
          className="h-full w-full object-cover"
        />
      )}
      {!isLogged && (
        <Image
          src="/icons/google-gray.svg"
          width={100}
          height={100}
          alt="Google"
        />
      )}
    </button>
  );
};

export default GoogleLogin;
