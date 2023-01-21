import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Member } from '../../interface/member.interface';
import { getMembers } from '../../lib/controllers/member.controller';
import BasePage from '../../components/templates/BasePage';
import Image from 'next/image';
import MemberSection from '../../components/atoms/MemberSection';
import UserCard from '../../components/organisms/UserCard';

type fetchData = {
  members: Member[];
};

export const getStaticProps: GetStaticProps<fetchData> = async () => {
  const members = await getMembers();
  return {
    props: {
      members
    }
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index = ({ members }: Props) => {
  const staffMembers = members.filter((member) => member.role === 'vetus');
  const topMembers = members.filter((member) => member.role === 'venator');
  const regularMembers = members.filter((member) => member.role === 'member');
  const candidateMembers = members.filter(
    (member) => member.role === 'candidate'
  );

  return (
    <BasePage title="Miembros del club">
      <div className="center-col gap-10 p-10 mb-14">
        <div className="center lg:flex-row flex-col">
          <Image
            className="hidden lg:block"
            src="/images/logo.svg"
            alt="logo"
            width={152}
            height={172}
          />
          <div className="center-col">
            <h1 className="lg:text-bigTitle text-title font-bold">
              Miembros del Club
            </h1>
            <p className="lg:text-body text-small text-center">
              Si formas parte del club y no te encuentras en el listado{' '}
              <span className="text-blue-light lg:text-body text-small">
                haz click aquí
              </span>
            </p>
          </div>
        </div>

        <p className="text-gray-super text-center md:w-[800px] w-full lg:text-body text-small">
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
      <MemberSection name="Miembros">
        {regularMembers.map((member) => (
          <UserCard key={member.id} {...member} />
        ))}
      </MemberSection>
      <MemberSection name="Candidatos" isLast>
        {candidateMembers.map((member) => (
          <UserCard key={member.id} {...member} />
        ))}
      </MemberSection>
    </BasePage>
  );
};

export default Index;
