import React from 'react';
import clsx from 'clsx';

export interface Props {
  /** Button variant (check design system) */
  variant?: 'primary' | 'secondary' | 'success' | 'modal';
  /** What to display inside of the button (most of the time you want a text) */
  children?: string | React.ReactElement;
  /** Should the button be disabled? */
  disabled?: boolean;
  onClick?: () => void;
}

// eslint-disable-next-line object-curly-newline
const Button = ({ children, disabled, variant, onClick }: Props) => (
  <button
    onClick={onClick}
    type='button'
    className={clsx(
      'font-bold m-4 w-36 px-3 py-2 rounded-lg transition-colors',
      {
        'opacity-70 cursor-default': disabled,
      },
      {
        'hover:bg-primary-accent': !disabled && variant === 'primary',
      },
      {
        'text-white bg-primary-main': variant === 'primary',
      },
      {
        'bg-gray-200 text-secondary-gray-almost-black': variant === 'secondary',
      },
      {
        'hover:bg-gray-100': variant === 'secondary' && !disabled,
      },
      {
        'bg-success-main text-white': variant === 'success',
      },
      {
        'hover:bg-success-hover': variant === 'success' && !disabled,
      },
      {
        'bg-gray-800 text-white uppercase hover:bg-gray-900':
          variant === 'modal',
      }
    )}
  >
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  children: '',
  onClick: () => {},
};

export default Button;
