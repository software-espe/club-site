import { NextPage } from 'next';
import BasePage from '../../../components/templates/BasePage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Member } from '../../../interface/member.interface';
import { fetchMemberById } from '../../../lib/services/members.service';

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
    <BasePage title="Miembros del club">
      <h1>{member?.name}</h1>
    </BasePage>
  );
};
export default Index;
