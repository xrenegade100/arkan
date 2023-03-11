import React from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  action: 'singin' | 'login';
  className?: string;
}

const GoogleButton: React.FC<Props> = ({ action, className }: Props) => {
  const logIn = () => {};
  const singIn = () => {};

  return (
    <button
      type="button"
      className={`flex justify-center items-center p-2 border border-slate-300 rounded-lg ${className}`}
    >
      <img src="/google-icon.svg" alt="google" className="w-5 h-5" />
      <span className="text-gray-500 text-lg font-body px-4">
        {action === 'singin' ? 'Sing in with Google' : 'Login with Google'}
      </span>
    </button>
  );
};

export default GoogleButton;
