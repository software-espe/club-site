import UserThumbnail from '../atoms/UserThumbnail';
import { useRouter } from 'next/router';
import { userSignIn } from '../../lib/services/auth.service';
import { login } from '../../store/reducers/user.store';
import { useDispatch } from 'react-redux';
import userSelector from '../../store/selectors/user.selector';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = userSelector();

  const redirectToHome = async () => {
    await router.push('/');
  };

  const signIn = async () => {
    const userSession = await userSignIn();
    if (userSession) {
      dispatch(login(userSession));
    }
  };

  const isHome = router?.pathname === '/';

  return (
    <header className="flex justify-between items-center h-24 w-full bg-gray px-8 py-4">
      <button
        onClick={redirectToHome}
        className={`hover:opacity-100 opacity-50 ${isHome && 'invisible'}`}
      >
        Go Back
      </button>
      <button onClick={signIn}>click here</button>
      <UserThumbnail user={user} />
    </header>
  );
};

export default Header;
