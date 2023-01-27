import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType
} from 'next';
import { Member } from '../../../interface/member.interface';
import { getMemberById } from '../../../lib/controllers/member.controller';
import BasePage from '../../../components/templates/BasePage';

type fetchData = {
  member: Member;
};

export const getServerSideProps: GetServerSideProps<fetchData> = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query as { id: string };

  const member = await getMemberById(id);
  return {
    props: {
      member: member as Member
    }
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Index = ({ member }: Props) => {
  return (
    <BasePage title="Miembros del club" backTo="/members">
      <h1>
        {member?.name} {member?.surname}
      </h1>
    </BasePage>
  );
};
export default Index;
