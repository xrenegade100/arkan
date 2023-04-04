import React from 'react';

interface Props {
  label: string;
  onClick: (() => {}) | (() => void);
}

const OverlayItem: React.FC<Props> = ({ label, onClick }: Props) => (
  <button
    className="w-full py-1 flex justify-start items-start hover:bg-secondary-main"
    onClick={onClick}
  >
    <span className="mx-3 font-body text-sm">{label}</span>
  </button>
);

export default OverlayItem;
