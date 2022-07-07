import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Avatar from '../Avatar';
import DrawerItem, { DrawerItemProps } from './DrawerItem';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const Drawer: any & { DrawerItem: React.FC<DrawerItemProps> } = forwardRef(
  ({ isOpen, children }: Props, ref) => {
    const auth = useAuth();

    return (
      <div
        style={{
          height: 'calc(100vh - 56px)',
          filter: 'drop-shadow(0px 3.15852px 3.15852px rgba(0, 0, 0, 0.25))',
        }}
        className={clsx(
          'w-screen md:w-72 bg-primary-main rounded-br-[138px] flex flex-col items-center',
          {
            'left-5': !isOpen,
            '-left-[288px]': isOpen,
          }
        )}
      >
        {auth.isLoggedIn && (
          <div
            className='cursor-pointer w-60 h-24 mt-8 rounded-lg flex justify-evenly items-center'
            style={{
              background: 'linear-gradient(98.95deg, #F9A825 0%, #FFD95A 100%)',
            }}
          >
            <>
              <div>
                <Avatar
                  color={'#' + auth.user?.iconColor}
                  name={auth.user!.email.toUpperCase()}
                />
              </div>
              <div className='flex flex-col'>
                <p className='font-bold text-base'>
                  @{auth.user?.email.substring(0, 10)}
                </p>
                <p className='text-[11px]'>{auth.user?.email}</p>
              </div>
            </>
          </div>
        )}
        <div className='mt-20 w-full'>{children}</div>
      </div>
    );
  }
);

Drawer.DrawerItem = DrawerItem;
Drawer.displayName = 'Drawer';

export default Drawer;
