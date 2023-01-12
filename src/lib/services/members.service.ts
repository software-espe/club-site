import { Member } from '../../interface/member.interface';
import axios from 'axios';

export const fetchAllMembers = async (): Promise<{
  count: number;
  members: Member[];
}> => {
  const response = await axios.get('/api/members');
  return response.data;
};

export const fetchMemberById = async (uid: string): Promise<Member> => {
  const response = await axios.get(`/api/members/${uid}`);
  return response.data;
};

export const fetchRegisterMember = async (
  id?: string,
  member?: Member
): Promise<Member> => {
  return await axios.post(`/api/members/${id}`, member);
};
