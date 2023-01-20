import { Member } from '../../../interface/member.interface';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  addMember,
  getMembers
} from '../../../lib/controllers/member.controller';
import { buildQueryParams } from '../../../lib/tools/BuildQueryParams';
import apiHandler from '../../../lib/middlewares/apiHandler';

const getController = async (req: NextApiRequest, res: NextApiResponse) => {
  const queryParams = buildQueryParams(req.query);
  const members = await getMembers(queryParams);
  return res.status(200).json({
    count: members.length,
    members
  });
};

const postController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const bodyIsEmpty = !Object.keys(body).length;

  if (bodyIsEmpty) {
    return res.status(400).json({ message: 'member is not valid' });
  }

  const member = await addMember(body as Member);

  if (!member) {
    return res.status(500).json({ message: 'Member could not be created' });
  }

  return res.status(200).json(member);
};

export default apiHandler({
  get: getController,
  post: postController
});
