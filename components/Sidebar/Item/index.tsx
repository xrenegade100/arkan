import clsx from 'clsx';
import React from 'react';

interface Props {
  text: string;
  icon: string;
  selected?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<Props> = ({
  text,
  icon,
  selected,
  onClick,
}: Props) => (
  <button
    className={clsx(
      'w-11/12 flex justify-start items-center rounded-l-2xl py-2 hover:cursor-pointer',
      {
        'bg-primary-accent': selected,
      },
    )}
    onClick={onClick}
  >
    <span className="text-white material-symbols-rounded md-32 mx-3">
      {icon}
    </span>
    <span className="text-white font-body text-xl uppercase font-bold">
      {text}
    </span>
  </button>
);

SidebarItem.defaultProps = {
  selected: false,
};

export default SidebarItem;
