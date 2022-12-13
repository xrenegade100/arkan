import React from 'react';

interface Props {
  isVisible?: boolean;
  onClick: () => void;
  className?: string;
}

const Eye: React.FC<Props> = ({ isVisible, onClick, className }: Props) => (
  <button
    type="button"
    className={`material-symbols-rounded text-gray-500 md-18 hover:cursor-pointer px-2 ${className}`}
    onClick={onClick}
  >
    {isVisible ? 'visibility' : 'visibility_off'}
  </button>
);

Eye.defaultProps = {
  isVisible: false,
  className: '',
};

export default Eye;
