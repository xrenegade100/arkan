import React from 'react';
import clsx from 'clsx';

export interface Props {
  onClick?: () => void;
  variant?: 'sm' | 'md' | 'lg';
  color: string;
  name: string;
}

// eslint-disable-next-line object-curly-newline
const Avatar = ({ name, color, variant }: Props) => {
  return (
    <div
      className={clsx(
        'cursor-pointer flex justify-center items-center font-bold rounded-full text-white',
        {
          'h-12 w-12 text-2xl': variant === 'sm',
          'h-16 w-16 text-3xl': variant === 'md',
          'h-[88px] w-[88px] text-4xl': variant === 'lg',
        }
      )}
      style={{
        backgroundColor: color,
      }}
    >
      {name.charAt(0)}
    </div>
  );
};

Avatar.defaultProps = {
  variant: 'sm',
};

export default Avatar;
