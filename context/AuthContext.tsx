import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
import { createContext } from 'react';

interface IAuthContext {
  user: User | undefined;
  isLoggedIn: boolean;
  loginWithEmail: (email: string, password: string) => void;
  singinWithEmail: (email: string, username: string, password: string) => void;
  authenticateWithGoogle: () => {};
  firebaseError: FirebaseError | undefined;
  logout: () => {};
}

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
