import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SidebarItem from '../Sidebar/Item';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full h-screen m-0 p-0">
      <Navbar />
      <Sidebar username='BraindeadHermit' email='scorziello.giovanni00@gmail.com'>
        <SidebarItem icon='search' text='cerca'/>
      </Sidebar>
      <div className="w-full h-full m-0 p-0">{children}</div>
    </div>
  );
};

export default Main;
