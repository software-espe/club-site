import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../lib/firebase/firebase.admin.config';
import { clubUser } from '../../../interface/user.interface';
import apiHandler from '../../../lib/middlewares/apiHandler';

const validateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = req.body as { user: clubUser };

  const { email, uid } = user;

  const isEspeEmail = email?.endsWith('@espe.edu.ec');

  if (!isEspeEmail) {
    await auth.setCustomUserClaims(uid, { status: 'banned' });
    return res.status(200).json({ ...user, status: 'banned' });
  }

  await auth.setCustomUserClaims(uid, { status: 'verified' });
  return res.status(200).json({ ...user, status: 'verified' });
};

export default apiHandler({
  post: validateUser
});
