import React, { useRef, useState, useEffect } from 'react';
import useOutsideClick from '../../hook/useOutsideClick';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SidebarItem from '../Sidebar/Item';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const sidebar = useRef<HTMLDivElement>(null);
  const outsideClick = useOutsideClick(sidebar, isSidebarVisible);

  useEffect(() => {
    if(outsideClick) setIsSidebarVisible(false);
  }, [outsideClick]);
  

  return (
    <div className="w-full h-screen m-0 p-0">
      <div ref={sidebar}>
        <Navbar onClick={() => {setIsSidebarVisible(!isSidebarVisible)}} isSidebarVisible={isSidebarVisible}/>
        <Sidebar username='BraindeadHermit' email='scorziello.giovanni00@gmail.com' isVisible={isSidebarVisible}>
          <SidebarItem icon='account_circle' text='account' selected onClick={() => {}}/>
          <SidebarItem icon='analytics' text='analisi' onClick={() => {}}/>
          <SidebarItem icon='public' text='interazioni' onClick={() => {}}/>
          <SidebarItem icon='logout' text='logout' onClick={() => {}}/>
        </Sidebar>
      </div>
      <div className="w-full h-full m-0 p-0">{children}</div>
    </div>
  );
};

export default Main;
