import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../lib/firebase/firebase.admin.config';
import apiHandler from '../../../lib/middlewares/apiHandler';

const updateRole = async (req: NextApiRequest, res: NextApiResponse) => {
  const { uid, role } = req.body;

  const user = await auth.getUser(uid);

  await auth.setCustomUserClaims(user.uid, { role });

  res.status(200).json({ status: 'success' });
};

const getRole = async (req: NextApiRequest, res: NextApiResponse) => {
  const { uid } = req.query;

  const user = await auth.getUser(uid as string);
  const customClaims = user.customClaims;

  if (customClaims?.role) {
    res.status(200).json({ role: customClaims.role });
  }

  if (customClaims?.status === 'banned') {
    res.status(200).json({ status: 'banned', role: undefined });
  }

  res.status(404).json('Bad request');
};

export default apiHandler({
  get: getRole,
  post: updateRole
});
