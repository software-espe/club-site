import { NextApiRequest, NextApiResponse } from 'next';
import { addMember, getAllMembers } from '../../lib/services/member.services';
import { Member } from '../../models/member.interface';
import apiHandler from '../../lib/middlewares/apiHandler';

const getController = async (req: NextApiRequest, res: NextApiResponse) => {
  const members = await getAllMembers();
  return res.status(200).json({
    Number_of_members: members.length,
    members
  });
};

const postController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const bodyIsEmpty = !Object.keys(body).length;

  if (bodyIsEmpty) {
    return res.status(400).json({ message: 'member is not valid' });
  }

  const member = await addMember(JSON.parse(body) as Member);

  if (!member) {
    return res.status(500).json({ message: 'Member could not be created' });
  }

  return res.status(200).json(member);
};

export default apiHandler({
  get: getController,
  post: postController
});
