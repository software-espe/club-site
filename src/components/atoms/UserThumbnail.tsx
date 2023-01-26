import { clubUser } from '../../interface/user.interface';
import React from 'react';
import userNameDecorator from '../../lib/tools/userNameDecorator';

interface Props {
  user: clubUser;
  onClick?: () => void;
}

const UserThumbnail = ({ user, onClick }: Props) => {
  const photoUrl = user.photoURL || '/fallbacks/users.svg';

  return (
    <div className="flex justify-center items-center relative">
      <button onClick={onClick}>
        <h3 className="text-small mr-3">
          {userNameDecorator(user?.displayName)}
        </h3>
      </button>
      <img
        className="relative w-10 h-10 rounded-full"
        src={photoUrl}
        alt="user photo"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/fallbacks/users.svg';
        }}
      />
      <div
        role="status"
        className="absolute bg-green-light top-0 -right-1 w-3 h-3 rounded-full outline outline-4 outline-gray"
      />
    </div>
  );
};

export default UserThumbnail;
