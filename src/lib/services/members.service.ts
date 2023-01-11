import { Member } from '../../interface/member.interface';

export const fetchAllMembers = async (): Promise<{
  count: number;
  members: Member[];
}> => {
  const data = await fetch('/api/members');
  return await data.json();
};

export const fetchMemberById = async (uid: string): Promise<Member> => {
  const data = await fetch(`/api/members/${uid}`);
  return await data.json();
};
