import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  username: string;
  email: string;
  children: React.ReactElement | React.ReactElement[];
  isVisible: boolean;
}

const Overlay: React.FC<Props> = ({
  username,
  email,
  children,
  isVisible,
}: Props) => (
  <div
    className={clsx(
      'z-10 absolute w-52 bg-gray-100 rounded-md over  shadow-md top-14 before:absolute before:-top-4 before:left-44 before:w-0 before:overflow-visible before:h-0 before:border-8 before:border-transparent before:border-b-gray-100  ',
      {
        'inline-block': isVisible,
        hidden: !isVisible,
      },
    )}
  >
    <Link
      href="/"
      className="flex flex-col justify-start items-start pt-3 pb-2 px-3 rounded-b-md overflow-hidden"
    >
      <span className="font-body text-sm truncate">{username}</span>
      <span className="font-body text-xs text-gray-500 truncate">{email}</span>
    </Link>
    {children}
  </div>
);

export default Overlay;
