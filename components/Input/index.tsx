import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import Eye from './eye';

interface Props {
  type?: 'text' | 'email' | 'password';
  hint: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isInvalid?: boolean;
  className?: string;
}

const Input: React.FC<Props> = ({
  type,
  hint,
  value,
  onChange,
  disabled,
  isInvalid,
  className,
}: Props) => {
  const [visibility, setVisibility] = useState({
    isPasswordVisible: false,
    isInputFocused: false,
  });

  const input = useRef<HTMLInputElement>(null);

  const onFocusChange = (focus: boolean) => {
    setVisibility({
      isPasswordVisible: visibility.isPasswordVisible,
      isInputFocused: focus,
    });
  };

  return (
    <div
      className={clsx(
        `${className} w-full flex justify-around items-center rounded-md border-2 transition-colors`,
        {
          'border-primary-main': visibility.isInputFocused === true,
          'border-gray-300': visibility.isInputFocused === false,
          'cursor-not-allowed': disabled,
          'border-red-500': isInvalid,
        },
      )}
    >
      <input
        onFocus={() => {
          onFocusChange(true);
        }}
        onBlur={() => {
          onFocusChange(false);
        }}
        disabled={disabled}
        ref={input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={hint}
        className={clsx(
          'w-full font-body px-2 py-1 rounded-md outline-none bg-transparent',
          {
            'cursor-not-allowed': disabled,
          },
        )}
      />
      {type === 'password' && (
        <Eye
          className={clsx({
            'hover:cursor-not-allowed': disabled,
          })}
          isVisible={visibility.isPasswordVisible}
          onClick={() => {
            if (disabled) {
              return;
            }
            if (input.current) {
              input.current.type = visibility.isPasswordVisible
                ? 'password'
                : 'text';
            }

            setVisibility({
              isPasswordVisible: !visibility.isPasswordVisible,
              isInputFocused: visibility.isInputFocused,
            });
          }}
        />
      )}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  disabled: false,
  isInvalid: false,
};

export default Input;
