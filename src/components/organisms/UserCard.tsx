import { Member } from '../../interface/member.interface';
import { getFileUrl } from '../../lib/services/photos.service';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import UserSocials from '../molecules/UserSocials';

const UserCard: FC<Partial<Member>> = ({
  id,
  name,
  surname,
  socials,
  role,
  label,
  picture_url
}) => {
  const router = useRouter();

  const [picture, setPicture] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      if (picture_url) {
        const picture = await getFileUrl(picture_url);
        setPicture(picture);
      }
    })();
  });

  const redirectToMember = async () => {
    await router.push(`/members/${id}`);
  };

  return (
    <button
      className="center-col gap-4 w-80 h-80 rounded-lg hover:bg-gray-opaque"
      onClick={redirectToMember}
    >
      {role === 'vetus' && <span className="text-small">{label}</span>}
      <div className="overflow-hidden bg-gray-light h-32 w-32 rounded-full">
        {picture && (
          <img
            src={picture}
            alt="user"
            className="object-cover"
            width={128}
            height={128}
          />
        )}
      </div>
      <span className="text-body font-bold">
        {name} {surname}
      </span>
      <UserSocials {...socials} />
    </button>
  );
};

export default UserCard;
