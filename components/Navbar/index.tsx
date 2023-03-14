import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../../hook/useAuth';
import Avatar from '../Avatar';

interface Props {
  onClick: () => void;
  isSidebarVisible: boolean;
}

const Navbar: React.FC<Props> = ({ onClick, isSidebarVisible }: Props) => {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className="fixed z-10 w-full h-14 bg-primary-main shadow-md">
      <div className="h-full mx-8 flex justify-between items-center">
        <div className="w-full h-full flex justify-start items-center">
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <span
            className="material-symbols-rounded md-36 text-white hover:cursor-pointer"
            onClick={onClick}
          >
            {!isSidebarVisible ? 'menu' : 'close'}
          </span>
        </div>
        <Link href="/" className="h-fit w-fit hover:cursor-pointer">
          <Image src="/logo.png" alt="Arkan" width={160} height={50} priority />
        </Link>
        {user ? (
          <div className="w-full h-full flex justify-end items-center">
            <Avatar
              imageUrl={
                user.photoURL
                  ? user.photoURL
                  : 'https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'
              }
              dimen="sm"
              user={user.displayName as string}
              onClick={() => {}}
            />
          </div>
        ) : (
          <div className="w-full h-full flex justify-end items-center">
            <Link href="/" className="h-full">
              <span className="w-0 md:w-fit h-full flex items-center justify-center bg-transparent px-2 font-body text-xl font-bold text-white hover:bg-secondary-main hover:cursor-pointer transition-colors">
                SIGN IN
              </span>
            </Link>
            <Link href="/" className="h-full">
              <span className="w-0 md:w-fit h-full flex items-center justify-center bg-transparent px-2 font-body text-xl font-bold text-white transition-colors hover:bg-secondary-main hover:cursor-pointer">
                SIGN UP
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
