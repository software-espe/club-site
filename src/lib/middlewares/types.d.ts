import { NextApiRequest, NextApiResponse } from 'next';

export type ApiFunction = (
  _req: NextApiRequest,
  _res: NextApiResponse
) => void | Promise;

export type Handler = { [method: string]: ApiFunction };
