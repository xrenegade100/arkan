import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from 'react';

interface User {
  id: string;
  email: string;
  iconColor: string;
}

interface IAuthContext {
  user?: User;
  isLoggedIn: boolean;
  login({ email, password }: { email: string; password: string }): void;
  logout(): void;
}

const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
} as IAuthContext);

const useProvideLock = (): IAuthContext => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setUser({
      id: '1',
      email,
      iconColor: (((1 << 24) * Math.random()) | 0).toString(16),
    });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setUser(undefined);
  };
  // eslint-disable-next-line object-curly-newline
  return { user, isLoggedIn, login, logout };
};

const ProvideAuth = ({ children }: { children: ReactElement }) => {
  const lock = useProvideLock();
  return <AuthContext.Provider value={lock}>{children}</AuthContext.Provider>;
};

export default ProvideAuth;

export const useAuth = () => useContext(AuthContext);
