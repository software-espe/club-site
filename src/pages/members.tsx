import { useEffect, useState } from 'react';
import BasePage from '../components/templates/BasePage';
import Image from 'next/image';
import { Member } from '../models/member.interface';
import MemberSection from '../components/atoms/MemberSection';
import { NextPage } from 'next';
import UserCard from '../components/organisms/UserCard';
import { fetchAllMembers } from '../lib/services/members.service';

const Members: NextPage = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (isLoading) {
        const { members } = await fetchAllMembers();
        setMembers(members);
        setIsLoading(false);
      }
    })();
  });

  const staffMembers = members.filter((member) => member.role === 'Staff');
  const topMembers = members.filter((member) => member.role === 'TopMember');
  const regularMembers = members.filter((member) => member.role === 'Member');

  return (
    <BasePage title="Miembros del club">
      <div className="center-col gap-10 mb-20">
        <div className="center lg:flex-row flex-col gap-10">
          <Image src="/images/logo.svg" alt="logo" width={152} height={172} />
          <div className="center-col">
            <h1 className="lg:text-bigTitle text-title font-bold">
              Miembros del Club
            </h1>
            <p className="lg:text-body text-small">
              Si formas parte del club y no te encuentras en el listado
            </p>
            <a className="text-blue-light lg:text-body text-small">
              haz click aquí
            </a>
          </div>
        </div>

        <p className="text-gray-super w-1/2 text-center lg:text-body text-small">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <MemberSection name="Nuestro Staff">
        {staffMembers.map((member) => (
          <UserCard key={member.id} {...member} />
        ))}
      </MemberSection>
      <MemberSection name="Miembros Destacados">
        {topMembers.map((member) => (
          <UserCard key={member.id} {...member} />
        ))}
      </MemberSection>
      <MemberSection name="Miembros" isLast>
        {regularMembers.map((member) => (
          <UserCard key={member.id} {...member} />
        ))}
      </MemberSection>
    </BasePage>
  );
};

export default Members;
