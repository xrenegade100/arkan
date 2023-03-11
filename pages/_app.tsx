import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Main from '../components/Main';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arkan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/arkan-logo.png" />
      </Head>
      <Main>
        <Component {...pageProps} />
        <Footer />
      </Main>
    </>
  );
}

export default MyApp;
