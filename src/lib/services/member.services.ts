import { Collections } from '../../models/collections.interface';
import { Member } from '../../models/member.interface';
import { Query } from '../tools/BuildQueryParams';
import { firestore } from '../firebase.admin.config';

export const getAllMembers = async (): Promise<Member[]> => {
  const queryMembers = await firestore.collection(Collections.members).get();
  return queryMembers.docs.map((doc) => {
    return { ...doc.data(), id: doc.id } as Member;
  });
};

export const getMembers = async (
  queryParams?: Array<Query>
): Promise<Member[]> => {
  let snapshot: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;
  snapshot = await firestore.collection(Collections.members);

  if (queryParams) {
    queryParams.forEach((query) => {
      snapshot = snapshot.where(...query);
    });
  }

  const queryMembers = await snapshot.get();

  return queryMembers.docs.map((doc) => {
    return { ...doc.data(), id: doc.id } as Member;
  });
};

export const addMember = async (member: Member): Promise<Member | void> => {
  const doc = await firestore.collection(Collections.members).add(member);
  return { ...member, id: doc.id };
};

export const getMemberById = async (id: string): Promise<Member | void> => {
  try {
    const doc = await firestore.collection(Collections.members).doc(id).get();
    return { ...doc.data(), id: doc.id } as Member;
  } catch {
    return undefined;
  }
};
