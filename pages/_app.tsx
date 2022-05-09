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
      <Navbar
        onMenuClick={() => {
          setIsOpen(!isOpen);
        }}
      />
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
        <div className='flex justify-center w-full'>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </div>
      </div>
    </>
  );
}

export default MyApp;
