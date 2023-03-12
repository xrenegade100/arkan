import React from 'react';

interface Props {
  action: 'signin' | 'login';
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
        {action === 'signin' ? 'Sign in with Google' : 'Login with Google'}
      </span>
    </button>
  );
};

export default GoogleButton;
