import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Drawer from '../components/Drawer';
import DrawerItem from '../components/Drawer/DrawerItem';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <div className='flex'>
        <Drawer isOpen={isOpen}>
          <Link passHref href='/account'>
            <DrawerItem
              active={path === '/account'}
              icon='account_circle'
              label='Account'
            />
          </Link>
          <Link passHref href='/analisi'>
            <DrawerItem
              active={path === '/analisi'}
              icon='analytics'
              label='Analisi'
            />
          </Link>
          <Link passHref href='/interazioni'>
            <DrawerItem
              active={path === '/interazioni'}
              icon='public'
              label='Interazioni'
            />
          </Link>
          <DrawerItem icon='logout' label='Logout' />
        </Drawer>
        <div className='full'>
          <Component {...pageProps} />;
        </div>
      </div>
    </>
  );
}

export default MyApp;
