import type { NextPage } from 'next';
import Main from '../components/Main';
import Head from 'next/head';
import DarkPatternCard from '../components/DarkPatternCard';

const Home: NextPage = () => {
  return (
    <div>

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
    </div>
  );
};

export default Home;
