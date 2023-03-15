/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
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
                icon="account_circle"
                text="account"
                onClick={() => {}}
              />
              <SidebarItem icon="analytics" text="analisi" onClick={() => {}} />
              <SidebarItem
                icon="public"
                text="interazioni"
                onClick={() => {}}
              />
              <SidebarItem icon="logout" text="logout" onClick={logout} />
              <hr className="w-full my-4" />
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-end md:hidden ">
              <SidebarItem icon="login" text="login" onClick={() => {}} />
              <SidebarItem icon="person_add" text="sign up" onClick={logout} />
              <hr className="w-full my-4" />
            </div>
          )}
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
