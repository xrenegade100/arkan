import React from 'react';
import clsx from 'clsx';

export interface Props {
  size?: 'sm' | 'md';
}

// eslint-disable-next-line object-curly-newline
const TextInput = ({ size }: Props) => (
  <input
    className={clsx(
      'outline-none font-form rounded-[20px] border-[1px] border-black focus:border-primary-main',
      {
        'px-4 py-3 text-base': size === 'md',
      }
    )}
    style={{
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}
  />
);

TextInput.defaultProps = {
  size: 'md',
};

export default TextInput;
