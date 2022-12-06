import { NextApiRequest, NextApiResponse } from 'next';
import type { Handler } from './types';
import errorHandler from './errorHandler';

/**
 * Handle wrapper as middleware
 */
const apiHandler = (handler: Handler, protectedAPI?: boolean) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const method = request.method?.toLowerCase() || 'get';
    const { authorization } = request.headers;

    if (protectedAPI && authorization !== process.env.AUTHORIZATION_API_KEY) {
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
