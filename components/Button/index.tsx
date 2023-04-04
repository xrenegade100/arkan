import clsx from 'clsx';
import React from 'react';

export interface Props {
  variant?: 'primary' | 'secondary';
  children?: string | React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  disabled,
  variant,
  onClick,
  isLoading,
  className,
}: Props) => (
  <button
    data-cy="button"
    disabled={disabled || isLoading}
    onClick={onClick}
    type="button"
    className={clsx(
      'w-fit px-3 py-1 rounded-lg font-body font-bold text-white transition-colors',
      {
        'opacity-70 cursor-not-allowed': disabled || isLoading,
      },
      {
        'hover:bg-primary-accent':
          !(disabled || isLoading) && variant === 'primary',
      },
      {
        'bg-primary-main': variant === 'primary',
      },
      {
        'bg-secondary-main': variant === 'secondary',
      },
      {
        'hover:bg-secondary-accent':
          !(disabled || isLoading) && variant === 'secondary',
      },
      className,
    )}
  >
    {isLoading ? (
      <div
        data-cy="loading"
        style={{
          border: '3px solid transparent',
          borderTop: '3px solid #ffffff',
          borderRadius: '50%',
        }}
        className="animate-spin w-6 h-6 m-auto"
      />
    ) : (
      children
    )}
  </button>
);

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  children: '',
  isLoading: false,
  className: '',
};

export default Button;
