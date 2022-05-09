import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Drawer from '../components/Drawer';
import DrawerItem from '../components/Drawer/DrawerItem';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return <>Analisi</>;
};

export default Home;
