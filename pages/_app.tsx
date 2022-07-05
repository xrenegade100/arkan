import { ChakraProvider, useOutsideClick } from '@chakra-ui/react';
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
import NextNProgress from 'nextjs-progressbar';
import ProvideAuth, { useAuth } from '../hooks/useAuth';
import { __Drawer } from '../components/__';

const theme = extendTheme({
  fonts: {
    body: 'Quicksand, sans-serif',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  useOutsideClick({
    ref: drawerRef,
    handler: () => setIsOpen(false),
  });

  return (
    <ProvideAuth>
      <>
        <NextNProgress height={2} color='#F9A825' />
        <div className='fixed w-full h-[56px] z-50 top-0'>
          <Navbar
            hambugerIcon={isOpen ? 'close' : 'menu'}
            onMenuClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <div
          className={clsx('z-[40] transition-all', {
            fixed: isOpen,
            '-ml-[288px] absolute': !isOpen,
          })}
          ref={drawerRef}
        >
          <__Drawer
            onLogout={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <div
          className={clsx('flex justify-center w-full mt-[56px]', {
            'hidden md:flex': isOpen,
          })}
        >
          {' '}
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </div>
      </>
    </ProvideAuth>
  );
}

export default MyApp;
