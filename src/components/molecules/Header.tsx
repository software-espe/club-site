import UserThumbnail from '../atoms/UserThumbnail';

interface Props {
  userName: string;
  online?: boolean;
}

const Header = ({ userName, online }: Props) => {
  return (
    <header className="flex justify-end h-24 w-full bg-gray px-8 py-4">
      <UserThumbnail userName={userName} online={online} />
    </header>
  );
};

export default Header;
