import React from 'react';

interface Props {
  userName: string;
  online?: boolean;
}

const UserThumbnail = ({ userName, online = false }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <h3 className="font-bold text-small mr-3">{userName}</h3>
      <span className="relative w-14 h-14 rounded-full bg-gray-light">
        <div
          role="status"
          className={`absolute ${
            online ? 'bg-green-light' : 'bg-gray-light'
          } top-1 right-1 w-3 h-3 rounded-full outline outline-4 outline-gray`}
        />
      </span>
    </div>
  );
};

export default UserThumbnail;
