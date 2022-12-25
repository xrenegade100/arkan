import React from 'react';
import UserCard from './UserCard'

interface Props {
  username: string;
  email: string;
  children: React.ReactElement | React.ReactElement[];
}

const Sidebar: React.FC<Props> = ({username, email, children}: Props) => {
  return (
    <div className="w-full sm:w-2/4 md:w-4/12 lg:w-1/5 fixed top-14 left-0 bottom-0 bg-primary-main sm:rounded-br-quarter transition-all">
      <div className='flex flex-col w-full justify-start items-center py-6'>
        <UserCard email={email} username={username}/>
        <div className='py-6 w-full flex flex-col justify-center items-end'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
