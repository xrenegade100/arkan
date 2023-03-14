import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../hook/useAuth';
import useOutsideClick from '../../hook/useOutsideClick';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SidebarItem from '../Sidebar/Item';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebar = useRef<HTMLDivElement>(null);
  const outsideClick = useOutsideClick(sidebar, isSidebarVisible);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (outsideClick) setIsSidebarVisible(false);
  }, [outsideClick]);

  return (
    <div className="w-full h-screen m-0 p-0">
      <div ref={sidebar}>
        <Navbar
          onClick={() => {
            setIsSidebarVisible(!isSidebarVisible);
          }}
          isSidebarVisible={isSidebarVisible}
        />
        <Sidebar
          profilePicture={user?.photoURL as string}
          username={user ? (user.displayName as string) : 'Guest'}
          email={user ? (user.email as string) : 'Arkan guest'}
          isVisible={isSidebarVisible}
        >
          <SidebarItem icon="report" text="segnala" onClick={() => {}} />
          <SidebarItem
            icon="list_alt"
            text="Hall of Shame"
            onClick={() => {}}
          />
        </Sidebar>
      </div>
      <div className="w-full h-full m-0 p-0">{children}</div>
    </div>
  );
};

export default Main;
