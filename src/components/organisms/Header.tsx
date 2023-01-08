import UserThumbnail from '../atoms/UserThumbnail';
import { useRouter } from 'next/router';
import { userSignIn, userSignOut } from '../../lib/services/auth.service';
import { login, logout } from '../../store/reducers/user.store';
import { useDispatch } from 'react-redux';
import userSelector from '../../store/selectors/user.selector';
import SessionBadge from '../atoms/SessionBadge';
import GoBackButton from '../atoms/GoBackButton';
import Modal from '../atoms/Modal';
import { useModal } from '../../hooks/useModal';

interface Props {
  backTo?: string;
}

const Header = ({ backTo = '/' }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isModalOpen, openModal, closeModal] = useModal();
  const { user, isLoading, isLogged } = userSelector();

  const redirectToHome = async () => {
    await router.push(backTo);
  };

  const signIn = async () => {
    const userSession = await userSignIn();
    if (userSession) {
      dispatch(login(userSession));
    }
  };

  const signOut = async () => {
    await userSignOut();
    dispatch(logout());
    closeModal();
  };

  const isHome = router?.pathname === '/';

  const userIsLogged = isLogged && !isLoading;
  const userIsNotLogged = !isLogged && !isLoading;

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        title="¿Quieres cerrar sesión?"
        className="center gap-4"
        onClose={closeModal}
        showCloseButton={false}
      >
        <button
          className="py-2 px-4 bg-gray-light hover:bg-gray-super rounded-lg"
          onClick={signOut}
        >
          Cerrar
        </button>
        <button
          className="py-2 px-4 bg-gray-light hover:bg-gray-super rounded-lg"
          onClick={closeModal}
        >
          Cancelar
        </button>
      </Modal>
      <header className="flex justify-between items-center h-24 w-full bg-gray px-8 py-4">
        <GoBackButton isHome={isHome} onClick={redirectToHome} />
        {userIsLogged && <UserThumbnail onClick={openModal} user={user} />}
        {userIsNotLogged && <SessionBadge text="Entrar" onClick={signIn} />}
      </header>
    </>
  );
};

export default Header;
