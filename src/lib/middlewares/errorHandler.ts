import { NextApiResponse } from 'next';

const errorHandler = (err: Error | string, res: NextApiResponse) => {
  if (typeof err === 'string') {
    const is404 = err.toLowerCase().endsWith('not found');
    const statusCode = is404 ? 404 : 400;
    return res.status(statusCode).json({ message: err });
  }

  if (err?.name === 'UnauthorizedError') {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

export default errorHandler;
