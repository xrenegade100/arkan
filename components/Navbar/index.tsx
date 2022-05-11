import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Avatar } from '..';
import LogoIcon from '../LogoIcon';

type Props = {
  onMenuClick?: () => any;
  hambugerIcon?: string;
};

const Navbar = ({ onMenuClick, hambugerIcon }: Props) => {
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return (
    <nav className='flex h-14 w-screen bg-primary-dark items-center justify-between'>
      <button
        onClick={onMenuClick}
        className='material-icons pr-32 text-white w-60'
      >
        {hambugerIcon}
      </button>
      <div className='w-60 flex flex-1 justify-center'>
        <Link href='/' passHref>
          <LogoIcon size='base' />
        </Link>
      </div>
      <div className='flex items-center text-white w-60'>
        <Link href='/segnala'>
          <button
            className={clsx('p-4 hover:bg-secondary-main font-bold uppercase', {
              'bg-secondary-main': path === '/segnala',
            })}
          >
            Segnala
          </button>
        </Link>
        <Link href='/feed'>
          <button
            className={clsx(
              'p-4 hover:bg-secondary-main font-bold uppercase mr-4',
              {
                'bg-secondary-main': path === '/feed',
              }
            )}
          >
            Feed
          </button>
        </Link>
        <Avatar color='#333' name='Giovanni' />
      </div>
    </nav>
  );
};

export default Navbar;
