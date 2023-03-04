import type { NextPage } from 'next';
import Main from '../components/Main';
import Head from 'next/head';
import DarkPatternCard from '../components/DarkPatternCard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arkan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/arkan-logo.png" />
      </Head>

      <Main>
        <br/><br/><br/><br/><br/>
        <DarkPatternCard 
          username='BraindeadHermit'
          detectionMode='rilevato tramite analisi'
          dangerLevel={3}
          siteName='Facebook'
          siteLink='https://www.facebook.com/'
          date={new Date().toLocaleDateString()}
          darkPatternType="nagging"
          description='very very long description about this dark pattern'
          imageLink='https://assets.puzzlefactory.pl/puzzle/297/747/original.jpg'
        />
      </Main>
    </div>
  );
};

export default Home;
