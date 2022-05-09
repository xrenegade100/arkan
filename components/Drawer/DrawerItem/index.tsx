import clsx from 'clsx';
import React from 'react';

export type DrawerItemProps = {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => {};
  href?: string;
};

const DrawerItem = React.forwardRef(
  (
    { icon, label, active, onClick, href }: DrawerItemProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => (
    <a href={href} onClick={onClick} className='flex' ref={ref}>
      <div className='w-2/12 h-2'></div>
      <div
        className={clsx(
          'w-10/12 cursor-pointer flex items-center p-2 space-x-3 rounded-l-[15px] hover:bg-primary-accent transition-all',
          {
            'bg-primary-accent': active,
          }
        )}
      >
        <span className='material-icons-outlined !text-4xl text-white'>
          {icon}
        </span>
        <span
          className='font-bold uppercase text-xl text-white'
          style={{
            lineHeight: '1rem',
          }}
        >
          {label}
        </span>
      </div>
    </a>
  )
);

DrawerItem.displayName = 'DrawerItem';

export default DrawerItem;
