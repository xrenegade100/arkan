/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { FirebaseError } from 'firebase/app';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { firestore } from '../firebase.config';
import useStorage from './useStorage';

const useDatabase = () => {
  const detectedDarkPatternsCollection = collection(
    firestore,
    'user-detected-dp',
  );

  const { uploadImage } = useStorage();

  const [dbError, setDbError] = useState<string>();

  const addReport = async (
    siteName: string,
    siteLink: string,
    description: string,
    darkPatternType: string,
    dangerLevel: string,
    image: File,
    userId: string,
  ) => {
    try {
      const url = await uploadImage(image, userId);

      await addDoc(detectedDarkPatternsCollection, {
        'danger-level': dangerLevel,
        description,
        'detected-dp-name': darkPatternType,
        'dp-image-path': url,
        'site-link': siteLink,
        'site-name': siteName,
        'user-id': userId,
      });
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }
  };

  return {
    addReport,
    dbError,
  };
};

export default useDatabase;
