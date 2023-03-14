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
import { AuthContext } from '../context';
import { auth, googleProvider } from '../firebase.config';

const useProvideAuth = () => {
  const router = useRouter();

  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      await auth.setPersistence(browserLocalPersistence);
      setUser(auth.currentUser as User);
      if (auth.currentUser?.email) {
        setIsLoggedIn(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      if (router.pathname === '/login' || router.pathname === '/signup') {
        router.push('/');
      }
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
        setUser(data.user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const authenticateWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      if (data.user) {
        setUser(data.user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
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
