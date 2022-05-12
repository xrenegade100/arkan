import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Avatar } from '..';
import LogoIcon from '../LogoIcon';

type Props = {
  onMenuClick?: () => any;
  hambugerIcon?: string;
  isLock?: boolean;
};

const Navbar = ({ onMenuClick, hambugerIcon, isLock }: Props) => {
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return (
    <nav className='flex h-14 bg-primary-dark items-center justify-between'>
      {!isLock && (
        <button
          onClick={onMenuClick}
          className='material-icons pr-32 text-white w-60'
        >
          {hambugerIcon}
        </button>
      )}

      {isLock && <div className='w-60'></div>}

      {!isLock && (
        <div className='w-60 flex flex-1 justify-center'>
          <Link href='/' passHref>
            <LogoIcon size='base' />
          </Link>
        </div>
      )}

      {isLock && (
        <div className='w-60 flex flex-1 justify-center'>
          <Link href='/' passHref>
            <LogoIcon size='base' />
          </Link>
        </div>
      )}
      {!isLock && (
        <div className='flex items-center text-white w-60'>
          <Link href='/segnala'>
            <button
              className={clsx(
                'p-4 hover:bg-secondary-main font-bold uppercase',
                {
                  'bg-secondary-main': path === '/segnala',
                }
              )}
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
      )}
      {isLock && (
        <div className='flex items-center text-white w-60'>
          <Link href='/login'>
            <button
              className={clsx(
                'p-4 hover:bg-secondary-main font-bold uppercase',
                {
                  'bg-secondary-main': path === '/login',
                }
              )}
            >
              Login
            </button>
          </Link>
          <Link href='/registrazione'>
            <button
              className={clsx(
                'p-4 hover:bg-secondary-main font-bold uppercase mr-4',
                {
                  'bg-secondary-main': path === '/registrazione',
                }
              )}
            >
              Registrazione
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
