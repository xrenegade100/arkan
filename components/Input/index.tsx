/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import Eye from './eye';
import { validation } from '../../Helpers/CredentialsValidation';

interface Props {
  type?: 'text' | 'email' | 'password';
  hint: string;
  value: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isInvalid?: number;
  errorText?: string;
  className?: string;
}

const Input: React.FC<Props> = ({
  type,
  hint,
  value,
  onChange,
  disabled,
  isInvalid,
  errorText,
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
    <div className="w-full flex flex-col justify-start items-start">
      <div
        className={clsx(
          `${className} w-full flex justify-around items-center rounded-md border-2 transition-colors`,
          {
            'border-primary-main': visibility.isInputFocused === true,
            'border-gray-300': visibility.isInputFocused === false,
            'cursor-not-allowed': disabled,
            'border-red-500': isInvalid !== validation.VALID,
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
      {isInvalid === validation.INVALID && (
        <span className="font-body text-red-500 text-sm">{errorText}</span>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  disabled: false,
  errorText: '',
  isInvalid: validation.VALID,
};

export default Input;
