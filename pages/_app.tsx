import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Navbar } from '../components';
import Drawer from '../components/Drawer';
import DrawerItem from '../components/Drawer/DrawerItem';
import '../styles/globals.css';
import { extendTheme } from '@chakra-ui/react';
import clsx from 'clsx';

const theme = extendTheme({
  fonts: {
    body: 'Quicksand, sans-serif',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <div className='fixed w-full h-[56px] z-50 top-0'>
        <Navbar
          hambugerIcon={isOpen ? 'close' : 'menu'}
          onMenuClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div className='fixed z-[40]'>
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
      </div>
      <div
        className={clsx('flex justify-center w-full mt-[56px]', {
          'hidden md:flex': isOpen,
        })}
      >
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
    </>
  );
}

export default MyApp;
