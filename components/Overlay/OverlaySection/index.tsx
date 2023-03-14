import React from 'react';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const OverlaySection: React.FC<Props> = ({ children }: Props) => (
  <>
    <hr className="w-full border-gray-300" />
    <div className="flex flex-col justify-start items-start w-full my-2">
      {children}
    </div>
  </>
);

export default OverlaySection;
