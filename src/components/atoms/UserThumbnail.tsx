import React from 'react';
import type { User } from '@firebase/auth';

interface Props {
  user: User;
}

const UserThumbnail = ({ user }: Props) => {
  const photoUrl = user.photoURL || '/fallbacks/user.svg';

  return (
    <div className="flex justify-center items-center">
      <h3 className="capitalize text-small mr-3">
        {user.displayName?.toLowerCase()}
      </h3>
      <img
        className="relative w-12 h-12 rounded-full"
        src={photoUrl}
        alt="user photo"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/fallbacks/user.svg';
        }}
      />
    </div>
  );
};

export default UserThumbnail;
