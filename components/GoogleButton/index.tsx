import clsx from 'clsx';
import React from 'react';

interface Props {
  action: 'signup' | 'login';
  className?: string;
  onClick: () => {};
  disabled: boolean;
}

const GoogleButton: React.FC<Props> = ({
  action,
  className,
  onClick,
  disabled,
}: Props) => (
  <button
    disabled={disabled}
    type="button"
    className={clsx(
      `flex justify-center items-center p-2 border border-slate-300 rounded-lg ${className}`,
      {
        'opacity-70 cursor-not-allowed': disabled,
      },
    )}
    onClick={onClick}
  >
    <img src="/google-icon.svg" alt="google" className="w-5 h-5" />
    <span className="text-gray-500 xl:text-lg font-body px-4">
      {action === 'signup' ? 'Sign up with Google' : 'Login with Google'}
    </span>
  </button>
);

export default GoogleButton;
