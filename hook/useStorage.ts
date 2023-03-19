import { FirebaseError } from 'firebase/app';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../firebase.config';

const useStorage = () => {
  const [storageError, setStorageError] = useState<string>();

  const uploadImage = async (image: File, userId: string): Promise<string> => {
    if (image) {
      const imageRef = ref(storage, `detected-dp/${userId}/${image.name}`);
      try {
        await uploadBytes(imageRef, image);
        const url = await getDownloadURL(imageRef);
        return url;
      } catch (error) {
        setStorageError((error as FirebaseError).code);
      }
    }

    return '';
  };

  const deleteImage = async (image: File, userId: string) => {
    if (image) {
      const imageRef = ref(storage, `detected-dp/${userId}/${image.name}`);
      try {
        await deleteObject(imageRef);
      } catch (error) {
        setStorageError((error as FirebaseError).code);
      }
    }
  };

  return {
    uploadImage,
    deleteImage,
    storageError,
  };
};

export default useStorage;
