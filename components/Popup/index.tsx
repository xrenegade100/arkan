/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import clsx from 'clsx';
import React from 'react';
import Button from '../Button';

interface Props {
  title: string;
  message: string;
  isVisible: boolean;
  onClick: () => void;
}

const Popup: React.FC<Props> = ({
  title,
  message,
  isVisible,
  onClick,
}: Props) => (
  <div
    className={clsx(
      'absolute z-10 w-10/12 lg:w-3/4 xl:w-1/5 shadow-lg py-4 rounded-md bg-white',
      {
        visible: isVisible,
        invisible: !isVisible,
      },
    )}
  >
    <div className="flex flex-col justify-start items-start mx-4">
      <span className="font-body font-bold text-xl text-red-500">{title}</span>
      <span className="py-2 text-red-500">{message}</span>
      <Button onClick={onClick} className="self-end mt-4">
        <span className="font-body">OK</span>
      </Button>
    </div>
  </div>
);

export default Popup;
