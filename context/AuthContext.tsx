import { User } from 'firebase/auth';
import { createContext } from 'react';

interface IAuthContext {
  user: User | undefined;
  isLoggedIn: boolean;
  loginWithEmail: (email: string, password: string) => void;
  singinWithEmail: (email: string, password: string) => void;
  authenticateWithGoogle: () => {};
  logout: () => {};
}

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
