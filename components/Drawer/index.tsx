import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Avatar from '../Avatar';
import DrawerItem, { DrawerItemProps } from './DrawerItem';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const Drawer: React.FC<Props> & { DrawerItem: React.FC<DrawerItemProps> } = ({
  isOpen,
  children,
}: Props) => {
  return (
    <div
      style={{
        filter: 'drop-shadow(0px 3.15852px 3.15852px rgba(0, 0, 0, 0.25))',
      }}
      className={clsx(
        'w-72 h-screen bg-primary-main rounded-br-[138px] flex flex-col items-center',
        {
          hidden: !isOpen,
        }
      )}
    >
      <div
        className='cursor-pointer w-[250px] h-[100px] mt-8 rounded-lg flex justify-evenly items-center'
        style={{
          background: 'linear-gradient(98.95deg, #F9A825 0%, #FFD95A 100%)',
        }}
      >
        <div>
          <Avatar color='#333' name='Giovanni' />
        </div>
        <div className='flex flex-col'>
          <p className='font-bold text-base'>@BraindeadHermit</p>
          <p className='text-[11px]'>scorziello.giovanni00@gmail.com</p>
        </div>
      </div>
      <div className='mt-20 w-full'>{children}</div>
    </div>
  );
};

Drawer.DrawerItem = DrawerItem;

export default Drawer;
