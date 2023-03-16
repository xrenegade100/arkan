import { createContext } from 'react';

interface IAuthContext {
  image: File | undefined;
  addImage: (imageToAdd: File) => void;
  deleteImage: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
