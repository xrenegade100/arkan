/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { auth } from '../firebase.config';
import { validation } from '../helpers/CredentialsValidation';
import { UserInfo } from '../types';
import useUserDAO from './useUserDAO';

const useAccount = () => {
  const [user, setUser] = useState<UserInfo>();
  const [isOwner, setIsOwner] = useState(false);

  const { getUserDataById, modifyUserInfo, firebaseError } = useUserDAO();

  const [isUsernameValid, setIsUsernameValid] = useState(validation.VALID);

  useEffect(() => {
    if (firebaseError) {
      alert(firebaseError);
    }
  }, [firebaseError]);

  const getUserById = async (id: string) => {
    setUser((await getUserDataById(id)) as UserInfo);
    if (id === auth.currentUser?.uid) {
      setIsOwner(true);
    }
  };

  const updateInfo = async (
    email: string,
    username: string,
    name: string,
    bio: string,
  ): Promise<boolean> => {
    setIsUsernameValid(validation.VALID);
    if (username === '') {
      setIsUsernameValid(validation.EMPTY);
      return false;
    }

    const pojo = {
      email,
      username,
      name,
      bio,
    } as UserInfo;

    if (user) {
      const isUpdated = await modifyUserInfo(user.data_id, pojo);
      if (isUpdated) {
        setUser({
          ...user,
          bio,
          username,
          name,
        });
      }
      setIsUsernameValid(validation.VALID);
      return true;
    }

    return false;
  };

  return {
    user,
    getUserById,
    updateInfo,
    isUsernameValid,
    setIsUsernameValid,
    isOwner,
    firebaseError,
  };
};

export default useAccount;
