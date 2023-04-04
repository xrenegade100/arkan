import clsx from 'clsx';
import React from 'react';

interface Props {
  isVisible: boolean;
}

const AccountNotify: React.FC<Props> = ({ isVisible }: Props) => (
  <div
    className={clsx('border border-red-500 rounded-md w-full', {
      'block h-auto': isVisible,
      'hidden h-0': !isVisible,
    })}
  >
    <div className="flex justify-start items-center p-4">
      <span className="material-symbols-rounded pr-2 text-red-500">
        warning{' '}
      </span>
      <span className="font-body text-sm md:text-base text-red-500">
        L'account indicato non esiste
      </span>
    </div>
  </div>
);

export default AccountNotify;
