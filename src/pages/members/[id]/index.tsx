import { Member } from '../../../interface/member.interface';
import { NextPage } from 'next';
import { fetchMemberById } from '../../../lib/services/members.service';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BasePage from '../../../components/templates/BasePage';

const Index: NextPage = () => {
  const route = useRouter();
  const { id } = route.query;
  const [member, setMember] = useState<Member | undefined>(undefined);

  useEffect(() => {
    (async () => {
      if (id) {
        const fetchMember = await fetchMemberById(id as string);
        setMember(fetchMember);
      }
    })();
  });

  return (
    <BasePage title="Miembros del club" backTo="/members">
      <h1>
        {member?.name} {member?.surname}
      </h1>
    </BasePage>
  );
};
export default Index;
