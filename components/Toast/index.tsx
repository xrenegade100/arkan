import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const Toast: React.FC<Props> = ({ text, onClick, className }: Props) => (
  // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
  <span
    className={`${className} rounded-md py-1 px-2 bg-secondary-main hover:cursor-pointer text-white font-body text-xs font-bold hover:bg-secondary-accent transition-colors`}
    onClick={onClick}
  >
    {text}
  </span>
);

export default Toast;
