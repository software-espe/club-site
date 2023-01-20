import { Collections } from '../../interface/collections.interface';
import { Member } from '../../interface/member.interface';
import { Query } from '../tools/BuildQueryParams';
import { firestore } from '../firebase/firebase.admin.config';
import type { UpdateData } from '@firebase/firestore';

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

export const setMember = async (
  id: string,
  member: Member
): Promise<Member | void> => {
  await firestore.collection(Collections.members).doc(id).set(member);
  return { ...member, id };
};

export const getMemberById = async (id: string): Promise<Member | void> => {
  const memberRef = await firestore
    .collection(Collections.members)
    .doc(id)
    .get();
  if (!memberRef.exists) {
    throw {
      message: 'Member does not exist'
    };
  }

  return { ...memberRef.data(), id: id } as Member;
};

export const updateMember = async (
  id: string,
  member: Member
): Promise<Member | void> => {
  try {
    await firestore
      .collection(Collections.members)
      .doc(id)
      .update(member as UpdateData<Member>);
    return {
      id,
      ...member
    };
  } catch (_e) {
    throw {
      message: 'Member does not exist or could not be updated'
    };
  }
};

export const deleteMember = async (uid: string): Promise<void> => {
  const userRef = await firestore.collection(Collections.members).doc(uid);
  const user = await userRef.get();
  if (!user.exists) {
    throw {
      message: `User ${uid} does not exist`
    };
  }
  await userRef.delete();
};
