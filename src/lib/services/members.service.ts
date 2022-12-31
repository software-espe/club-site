import { Member } from '../../models/member.interface';

export const fetchAllMembers = async (): Promise<{
  count: number;
  members: Member[];
}> => {
  const data = await fetch('/api/members');
  return await data.json();
};