/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { validation } from '../../helpers/CredentialsValidation';
import { useImage } from '../../hook/useImage';

interface Props {
  className?: string;
  isInvalid: number;
}

const ImageInput: React.FC<Props> = ({ className, isInvalid }: Props) => {
  const { addImage } = useImage();

  const { getRootProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles: File[]) => {
      addImage(acceptedFiles[0]);
    },
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div {...getRootProps()}>
      <input
        type="file"
        name="file"
        id="file"
        className="file-input"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          if (e.target.files) {
            addImage(e.target.files[0]);
          }
        }}
        multiple
        hidden
      />
      <label
        htmlFor="file"
        className={clsx(
          `${className} w-full border-2 border-dashed border-gray-300 flex flex-col justify-center items-center rounded-md shadow-md hover:cursor-pointer transition-all`,
          {
            'border-red-500': isInvalid === validation.EMPTY,
            'border-gray-300': isInvalid === validation.VALID,
          },
        )}
      >
        <h2 className="material-symbols-rounded w-full md-48 text-gray-300 text-center">
          {!isDragActive ? 'add_photo_alternate' : 'file_upload'}
        </h2>
        <span className="font-bold text-lg w-full text-gray-300 text-center">
          {!isDragActive
            ? 'Trascina qui o clicca per aggiungere il file *'
            : 'Rilascia il file'}
        </span>
      </label>
    </div>
  );
};

export default ImageInput;
