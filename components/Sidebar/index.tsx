import React from 'react';
import UserCard from './UserCard'

const Sidebar: React.FC = () => {
  return (
    <div className="w-full sm:w-2/4 md:w-4/12 lg:w-1/5 fixed top-14 left-0 bottom-0 bg-primary-main sm:rounded-br-quarter transition-all">
      <UserCard email='scorziello.giovanni00@gmail.com' username='BraindeadHermit'/>
    </div>
  );
};

export default Sidebar;
