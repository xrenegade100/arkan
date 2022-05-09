import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';
import Avatar from '../Avatar';
import DrawerItem, { DrawerItemProps } from './DrawerItem';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const Drawer: any & { DrawerItem: React.FC<DrawerItemProps> } = forwardRef(
  ({ isOpen, children }: Props, ref) => {
    return (
      <div
        style={{
          height: 'calc(100vh - 56px)',
          filter: 'drop-shadow(0px 3.15852px 3.15852px rgba(0, 0, 0, 0.25))',
        }}
        className={clsx(
          'w-1/5 bg-primary-main rounded-br-[138px] flex flex-col items-center',
          {
            hidden: !isOpen,
          }
        )}
      >
        <div
          className='cursor-pointer w-60 h-24 mt-8 rounded-lg flex justify-evenly items-center'
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
  }
);

Drawer.DrawerItem = DrawerItem;
Drawer.displayName = 'Drawer';

export default Drawer;
