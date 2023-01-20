import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytes
} from 'firebase/storage';
import { firebaseStorage } from '../firebase/firebase.config';

const makeStoragePath = (file: File, folder = 'photos'): string => {
  return `${folder}/${file.name?.replace(/\s/g, '')}`;
};

export const uploadPhoto = async (
  photo: File,
  folder?: string
): Promise<string | void> => {
  try {
    const storageRef: StorageReference = ref(
      firebaseStorage,
      makeStoragePath(photo, folder)
    );
    await uploadBytes(storageRef, photo);
  } catch (error) {
    console.error(error);
  }
};

export const getFileUrl = async (path = './'): Promise<string> => {
  try {
    const fileRef: StorageReference = ref(firebaseStorage, path);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error(error);
    return '';
  }
};
