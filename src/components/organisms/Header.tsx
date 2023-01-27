import { logout } from '../../store/reducers/user.store';
import { useDispatch } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import { useRouter } from 'next/router';
import { userSignOut } from '../../lib/services/auth.service';
import GoBackButton from '../atoms/GoBackButton';
import Modal from '../atoms/Modal';
import UserThumbnail from '../atoms/UserThumbnail';
import userSelector from '../../store/selectors/user.selector';

interface Props {
  backTo?: string;
}

const Header = ({ backTo = '/' }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isModalOpen, openModal, closeModal] = useModal();
  const { user, isLogged } = userSelector();

  const redirectToHome = async () => {
    await router.push(backTo);
  };

  const signOut = async () => {
    await userSignOut();
    dispatch(logout());
    closeModal();
  };

  const isHome = router?.pathname === '/';
  const isRegisterRoute = router?.pathname.includes('register');

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
        {isLogged && !isRegisterRoute && (
          <UserThumbnail onClick={openModal} user={user} />
        )}
      </header>
    </>
  );
};

export default Header;
