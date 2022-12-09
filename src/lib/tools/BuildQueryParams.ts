import { firestore } from 'firebase-admin';
import WhereFilterOp = firestore.WhereFilterOp;

export type Query = [string, WhereFilterOp, string | number];

export const buildQueryParams = (
  params: Record<string, unknown>
): Array<Query> => {
  return Object.entries(params).map(([key, value]: [string, unknown]) => {
    return [key, '==', value];
  }) as Array<Query>;
};
