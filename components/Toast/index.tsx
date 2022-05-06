import React from 'react';
import clsx from 'clsx';

export interface Props {
  /** What to display inside of the toast (most of the time you want a text) */
  children?: string | React.ReactElement;
  /** Should the toast be disabled? */
  disabled?: boolean;
  onClick?: () => void;
}

// eslint-disable-next-line object-curly-newline
const Toast = ({ children, onClick }: Props) => (
  <button
    className='bg-secondary-main px-1 py-1 rounded-lg text-white font-bold text-sm hover:bg-secondary-accent'
    onClick={onClick}
    type='button'
  >
    {children}
  </button>
);

Toast.defaultProps = {
  disabled: false,
  children: '',
  onClick: () => {},
};

export default Toast;
