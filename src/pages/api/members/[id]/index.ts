import { Member } from '../../../../interface/member.interface';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteMember,
  getMemberById,
  setMember,
  updateMember
} from '../../../../lib/controllers/member.controller';
import apiHandler from '../../../../lib/middlewares/apiHandler';

const getController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const id: string = query.id as string;

  try {
    const member = await getMemberById(id);
    return res.status(200).json(member);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const id: string = query.id as string;

  try {
    await deleteMember(id);
    return res.status(200).json(`User ${id} was deleted`);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, body } = req;

  if (!body) {
    return res.status(400).json({ message: 'member is not valid' });
  }

  const id: string = query.id as string;

  try {
    const member = await updateMember(id, body as Member);
    return res.status(200).json(member);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, body } = req;
  if (!query.id || !body) {
    return res.status(400).json({ message: 'Missing Id or body' });
  }

  const id: string = query.id as string;
  try {
    const member = await setMember(id, body as Member);
    return res.status(200).json(member);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default apiHandler({
  delete: deleteController,
  put: putController,
  post: postController,
  get: getController
});
