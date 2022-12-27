import UserThumbnail from '../atoms/UserThumbnail';
import { useRouter } from 'next/router';

interface Props {
  userName: string;
  online?: boolean;
}

const Header = ({ userName, online }: Props) => {
  // if url is not  / then show a back button

  const router = useRouter();

  const redirectToHome = async () => {
    await router.push('/');
  };

  const isHome = router.pathname === '/';

  return (
    <header className="flex justify-between items-center h-24 w-full bg-gray px-8 py-4">
      <button
        onClick={redirectToHome}
        className={`hover:opacity-100 opacity-50 ${isHome && 'invisible'}`}
      >
        Go Back
      </button>
      <UserThumbnail userName={userName} online={online} />
    </header>
  );
};

export default Header;
