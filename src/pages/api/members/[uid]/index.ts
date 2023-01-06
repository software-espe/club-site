import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteMember,
  updateMember,
  getMemberById
} from '../../../../lib/controllers/member.controller';
import { Member } from '../../../../interface/member.interface';
import apiHandler from '../../../../lib/middlewares/apiHandler';

const getController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const uid: string = query.uid as string;

  try {
    const member = await getMemberById(uid);
    return res.status(200).json(member);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const uid: string = query.uid as string;

  try {
    await deleteMember(uid);
    return res.status(200).json(`User ${uid} was deleted`);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, body } = req;

  if (!body) {
    return res.status(400).json({ message: 'member is not valid' });
  }

  const uid: string = query.uid as string;

  try {
    const member = await updateMember(uid, body as Member);
    return res.status(200).json(member);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default apiHandler({
  delete: deleteController,
  put: putController,
  get: getController
});
