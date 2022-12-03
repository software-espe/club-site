import { NextApiRequest, NextApiResponse } from 'next';
import { addMember, getAllMembers } from '../services/member.services';
import { Member } from '../../models/member.interface';

const MemberController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;
  const bodyIsEmpty = !Object.keys(body).length;

  if (method === 'GET' && bodyIsEmpty) {
    const members = await getAllMembers();
    return res.status(200).json({
      Number_of_members: members.length,
      members
    });
  }

  if (method === 'POST' && bodyIsEmpty) {
    return res.status(400).json({ message: 'member is not valid' });
  }

  if (method === 'POST') {
    const member = await addMember(JSON.parse(body) as Member);
    if (!member) {
      return res.status(500).json({ message: 'Member could not be created' });
    }
    return res.status(200).json(member);
  }
};
export default MemberController;
