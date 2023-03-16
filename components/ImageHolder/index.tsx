/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import IconButton from '../IconButton';

interface Props {
  name: string;
  imageToShow: File;
  onClick: () => void;
}

const ImageHolder: React.FC<Props> = ({
  name,
  imageToShow,
  onClick,
}: Props) => {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    const blob = new Blob([imageToShow]);
    setUrl(URL.createObjectURL(blob));
  }, []);

  return (
    <div
      className="relative h-52 w-96 border border-primary-main flex justify-center items-center m-2 rounded-md shadow-md"
      title={name}
    >
      <img className="w-full h-full object-contain" src={url} />
      <div className="absolute w-full h-1/5 px-2 rounded-b-md flex justify-between items-center bottom-0 bg-primary-main/25 overflow-hidden">
        <span className="font-bold">
          {name.length <= 10
            ? imageToShow?.name
            : `${imageToShow?.name.substring(0, 8)}...`}
        </span>
        <div className="flex justify-end items-center">
          <IconButton icon="clear" size="sm" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
export default ImageHolder;
