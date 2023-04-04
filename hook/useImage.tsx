/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, ReactElement, useContext } from 'react';
import { ImageContext } from '../context';

const useRemeberImage = () => {
  const [image, setImage] = useState<File>();

  const addImage = (imageToInsert: File) => {
    setImage(imageToInsert);
  };

  const deleteImage = () => {
    setImage(undefined);
  };

  return {
    image,
    addImage,
    deleteImage,
  };
};

interface Props {
  children: ReactElement;
}

const RememberImage: React.FC<Props> = ({ children }: Props) => {
  const mAuth = useRemeberImage();
  return (
    <ImageContext.Provider value={mAuth}>{children}</ImageContext.Provider>
  );
};

export default RememberImage;

export const useImage = () => useContext(ImageContext);
