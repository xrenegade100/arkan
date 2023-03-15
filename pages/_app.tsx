/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ProvideAuth from '../hook/useAuth';

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Arkan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/arkan-logo.png" />
      </Head>
      <ProvideAuth>
        {route.pathname === '/login' || route.pathname === '/signup' ? (
          <Component {...pageProps} />
        ) : (
          <Main>
            <Component {...pageProps} />
            <Footer />
          </Main>
        )}
      </ProvideAuth>
    </>
  );
}

export default MyApp;
