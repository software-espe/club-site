import UserThumbnail from '../atoms/UserThumbnail';
import { useRouter } from 'next/router';
import { userSignIn } from '../../lib/services/auth.service';
import { login } from '../../store/reducers/user.store';
import { useDispatch } from 'react-redux';
import userSelector from '../../store/selectors/user.selector';
import SessionBadge from '../atoms/SessionBadge';
import GoBackButton from '../atoms/GoBackButton';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, isLoading, isLogged } = userSelector();

  const redirectToHome = async () => {
    await router.push('/');
  };

  const signIn = async () => {
    const userSession = await userSignIn();
    if (userSession) {
      dispatch(login(userSession));
    }
  };

  // const signOut = async () => {
  //   await userSignOut();
  //   dispatch(logout());
  // };

  const isHome = router?.pathname === '/';

  const userIsLogged = isLogged && !isLoading;
  const userIsNotLogged = !isLogged && !isLoading;

  return (
    <header className="flex justify-between items-center h-24 w-full bg-gray px-8 py-4">
      <GoBackButton isHome={isHome} onClick={redirectToHome} />
      {userIsLogged && <UserThumbnail user={user} />}
      {userIsNotLogged && <SessionBadge text="Entrar" onClick={signIn} />}
    </header>
  );
};

export default Header;
