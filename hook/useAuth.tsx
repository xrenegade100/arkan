/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, ReactElement, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  updateProfile,
  browserLocalPersistence,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { FirebaseError } from 'firebase/app';
import { AuthContext } from '../context';
import { auth, googleProvider } from '../firebase.config';
import useUserDAO from './useUserDAO';

const useProvideAuth = () => {
  const router = useRouter();

  const [user, setUser] = useState<User>();
  const [firebaseError, setFirebaseError] = useState<FirebaseError>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { createUser } = useUserDAO();

  useEffect(() => {
    (async () => {
      await auth.setPersistence(browserLocalPersistence);
      setUser(auth.currentUser as User);
      if (auth.currentUser?.email) {
        setIsLoggedIn(true);
      }
    })();

    return () => {
      setFirebaseError(undefined);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      if (router.pathname === '/login' || router.pathname === '/signup') {
        router.push('/');
      }
    } else if (router.pathname.includes('/user')) {
      router.push('/');
    }
  }, [isLoggedIn]);

  const singinWithEmail = async (
    email: string,
    username: string,
    password: string,
  ) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      if (data) {
        await updateProfile(auth.currentUser as User, {
          displayName: username,
        });
        createUser(
          data.user.displayName as string,
          data.user.email as string,
          data.user.uid as string,
          data.user.photoURL as string,
        );
        setUser(data.user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      setFirebaseError(error as FirebaseError);
    }
  };

  const authenticateWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      if (data.user) {
        setUser(data.user);
        setIsLoggedIn(true);
        createUser(
          data.user.displayName as string,
          data.user.email as string,
          data.user.uid as string,
          data.user.photoURL as string,
        );
      }
    } catch (error) {
      setFirebaseError(error as FirebaseError);
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      if (data.user) {
        setUser(data.user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      setFirebaseError(error as FirebaseError);
    }
  };

  const modifyAccount = async (username: string) => {
    try {
      await updateProfile(auth.currentUser as User, {
        displayName: username,
      });
      setUser({
        ...(user as User),
        displayName: username,
      });
    } catch (error) {
      setFirebaseError(error as FirebaseError);
      console.log(error);
    }
  };

  const logout = async () => {
    if (user) {
      await auth.signOut();
      setUser(undefined);
      setIsLoggedIn(false);
    }
  };

  return {
    user,
    isLoggedIn,
    loginWithEmail,
    singinWithEmail,
    authenticateWithGoogle,
    modifyAccount,
    firebaseError,
    logout,
  };
};

interface Props {
  children: ReactElement;
}

const ProvideAuth: React.FC<Props> = ({ children }: Props) => {
  const mAuth = useProvideAuth();
  return <AuthContext.Provider value={mAuth}>{children}</AuthContext.Provider>;
};

export default ProvideAuth;

export const useAuth = () => useContext(AuthContext);
