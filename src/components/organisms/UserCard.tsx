import React, { FC } from 'react';
import { Member } from '../../models/member.interface';
import UserSocials from '../molecules/UserSocials';

const UserCard: FC<Partial<Member>> = ({
  name,
  surname,
  socials,
  role,
  label
}) => {
  return (
    <div className="center-col gap-4 max-w-max">
      {role === 'Staff' && <span className="text-small">{label}</span>}
      <div className="bg-gray-light h-32 w-32 rounded-full"></div>
      <span className="text-body font-bold">
        {name} {surname}
      </span>
      <UserSocials {...socials} />
    </div>
  );
};

export default UserCard;
