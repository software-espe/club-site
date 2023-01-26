import { NextApiRequest, NextApiResponse } from 'next';
import errorHandler from './errorHandler';
import type { Handler } from './types';

/**
 * Handle wrapper as middleware
 */
const apiHandler = (handler: Handler) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const method = request.method?.toLowerCase() || 'get';
    const { authorization } = request.headers;

    const isProduction = process.env.ENV === 'production';

    if (isProduction && authorization !== process.env.AUTHORIZATION_API_KEY) {
      return response.status(403).end('Unauthorized request');
    }

    if (!handler[method]) {
      return response.status(405).end(`Method ${request.method} Not Allowed`);
    }

    try {
      await handler[method](request, response);
    } catch (err) {
      errorHandler(err as Error | string, response);
    }
  };
};

export default apiHandler;
