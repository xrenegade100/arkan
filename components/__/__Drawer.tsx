import Link from 'next/link';
import { useRouter } from 'next/router';
import path from 'path';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Drawer from '../Drawer';
import DrawerItem from '../Drawer/DrawerItem';

interface __DrawerProps {
  onLogout: () => any;
}

const __Drawer = ({ onLogout }: __DrawerProps) => {
  const [path, setPath] = useState('');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth();

  return (
    <Drawer isModalOpen={isOpen}>
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
      <DrawerItem
        onClick={() => {
          auth.logout();
          onLogout();
        }}
        icon='logout'
        label='Logout'
      />
    </Drawer>
  );
};

export default __Drawer;
