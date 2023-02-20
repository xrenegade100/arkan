/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useRecoilState } from 'recoil';
import imageList from '../../data/images';

interface Props {
  className: string;
  isDragActive: boolean
}

const FileInput: React.FC<Props> = ({ className, isDragActive }: Props) => {
  const [images, setImages] = useRecoilState(imageList);

  const onImageSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return
    }
    const fileList = Array.prototype.slice.call(event.target.files);
    setImages([...images, ...fileList]);
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        className="file-input"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          onImageSelected(e);
        }}
        multiple
        hidden
      />
      <label
        htmlFor="file"
        className={`${className} h-52 w-96 border-2 border-dashed border-gray-300 flex flex-col justify-center items-center m-2 rounded-md shadow-md hover:cursor-pointer transition-all`}
      >
        <h2 className="material-icons md-48 text-gray-300">{!isDragActive ? "add_photo_alternate" : "file_upload"}</h2>
        <span className='font-bold text-lg text-gray-300'>
          {!isDragActive ? "Trascina qui o clicca per aggiungere i file" : "Rilascia il file"}
        </span>
      </label>
    </div>
  );
};

export default FileInput;
