// istanbul ignore file

import type { NextApiRequest, NextApiResponse } from 'next';
import MemberController from '../../lib/controllers/member.controller';

const members = async (req: NextApiRequest, res: NextApiResponse) => {
  await MemberController(req, res);
};
export default members;
