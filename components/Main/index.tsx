/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useRouter } from 'next/router';
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

  // routing
  const router = useRouter();
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

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
          profilePicture={
            user?.photoURL
              ? (user?.photoURL as string)
              : 'https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'
          }
          username={user ? (user.displayName as string) : 'Guest'}
          email={user ? (user.email as string) : 'Arkan guest'}
          isVisible={isSidebarVisible}
        >
          {user ? (
            <div className="w-full flex flex-col justify-center items-end md:hidden ">
              <SidebarItem
                selected={path.includes('/user/account')}
                icon="account_circle"
                text="account"
                onClick={() => {
                  router.push('/user/account');
                  setIsSidebarVisible(false);
                }}
              />
              <SidebarItem
                selected={path.includes('/analisi')}
                icon="analytics"
                text="analisi"
                onClick={() => {
                  router.push(`/user/analisi/${user.uid}`);
                  setIsSidebarVisible(false);
                }}
              />
              <SidebarItem
                selected={path.includes('/user/interazioni')}
                icon="public"
                text="interazioni"
                onClick={() => {
                  router.push(`/user/interazioni/${user.uid}`);
                  setIsSidebarVisible(false);
                }}
              />
              <SidebarItem icon="logout" text="logout" onClick={logout} />
              <hr className="w-full my-4" />
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-end md:hidden ">
              <SidebarItem
                icon="login"
                text="login"
                onClick={() => {
                  router.push('/login');
                  setIsSidebarVisible(false);
                }}
              />
              <SidebarItem
                icon="person_add"
                text="sign up"
                onClick={() => {
                  router.push('/signup');
                  setIsSidebarVisible(false);
                }}
              />
              <hr className="w-full my-4" />
            </div>
          )}
          <SidebarItem
            selected={path === '/segnala'}
            icon="report"
            text="segnala"
            onClick={() => {
              if (user) {
                router.push('/segnala');
              } else {
                router.push('/login');
              }
              setIsSidebarVisible(false);
            }}
          />
          <SidebarItem
            selected={path === '/hos'}
            icon="list_alt"
            text="Hall of Shame"
            onClick={() => {
              router.push('/hos');
              setIsSidebarVisible(false);
            }}
          />
        </Sidebar>
      </div>
      <div className="w-full h-full m-0 p-0">{children}</div>
    </div>
  );
};

export default Main;
