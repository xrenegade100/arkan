/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { FirebaseError } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useState } from 'react';
import { firestore } from '../firebase.config';
import { UserInfo } from '../types';

const UserDAO = () => {
  const userCollection = collection(firestore, 'users');
  const [firebaseError, setFirebaseError] = useState<string>();

  const getUserDataById = async (id: string): Promise<UserInfo | null> => {
    let user: QuerySnapshot<DocumentData> | null = null;
    const userQuery = query(userCollection, where('uid', '==', id), limit(1));

    try {
      user = await getDocs(userQuery);
    } catch (error) {
      setFirebaseError((error as FirebaseError).code);
    }

    if (user?.docs[0]) {
      return {
        ...(user.docs[0].data() as UserInfo),
        data_id: user.docs[0].id,
      };
    }

    throw Error('user do not exist');
  };

  const createUser = async (
    username: string,
    email: string,
    uid: string,
    photoUrl: string,
  ): Promise<DocumentReference<DocumentData> | null> => {
    try {
      const user = await addDoc(userCollection, {
        email,
        username,
        name: '',
        uid,
        photo_url: photoUrl,
        bio: '',
      });

      return user;
    } catch (error) {
      setFirebaseError((error as FirebaseError).code);
    }

    return null;
  };

  const modifyUserInfo = async (
    id: string,
    user: UserInfo,
  ): Promise<boolean> => {
    try {
      const report = doc(firestore, 'users', id);
      await updateDoc(report, user);
    } catch (error) {
      setFirebaseError((error as FirebaseError).code);
      return false;
    }

    return true;
  };

  const deleteUser = async (id: string): Promise<boolean> => {
    try {
      const user = doc(firestore, 'users', id);
      await deleteDoc(user);
    } catch (error) {
      setFirebaseError((error as FirebaseError).code);
      return false;
    }

    return true;
  };

  return {
    getUserDataById,
    createUser,
    modifyUserInfo,
    deleteUser,
    firebaseError,
  };
};

export default UserDAO;
