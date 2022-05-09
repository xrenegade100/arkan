import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Avatar } from '..';
import LogoIcon from '../LogoIcon';

type Props = {
  onMenuClick?: () => any;
};

const Navbar = ({ onMenuClick }: Props) => {
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return (
    <nav className='flex h-14 w-screen bg-primary-dark items-center justify-between'>
      <button
        onClick={onMenuClick}
        className='-ml-10 material-icons text-white w-60'
      >
        menu
      </button>
      <div className='flex text-center'>
        <Link href='/' passHref>
          <LogoIcon size='base' />
        </Link>
      </div>
      <div className='flex items-center text-white mr-3 w-60'>
        <button
          className={clsx('p-4 hover:bg-secondary-main font-bold uppercase', {
            'bg-secondary-main': path === '/segnala',
          })}
        >
          <Link href='/segnala'>Segnala</Link>
        </button>
        <button
          className={clsx(
            'p-4 hover:bg-secondary-main font-bold uppercase mr-4',
            {
              'bg-secondary-main': path === '/feed',
            }
          )}
        >
          <Link href='/feed'>Feed</Link>
        </button>
        <Avatar color='#333' name='Giovanni' />
      </div>
    </nav>
  );
};

export default Navbar;
