import React from 'react';

interface Props {
  dangerLevel: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DangerLevelBar: React.FC<Props> = ({ dangerLevel, onChange }: Props) => (
  <div className="w-full flex flex-col justify-center items-center">
    <div className="w-full flex justify-between items-center mb-1">
      <span className="font-body text-base text-gray-500 font-semibold ml-2">
        1
      </span>
      <span className="font-body text-base text-gray-500 font-semibold">2</span>
      <span className="font-body text-base text-gray-500 font-semibold">3</span>
      <span className="font-body text-base text-gray-500 font-semibold">4</span>
      <span className="font-body text-base text-gray-500 font-semibold mr-2">
        5
      </span>
    </div>
    <input
      id="steps-range"
      type="range"
      min="1"
      max="5"
      step="1"
      value={dangerLevel}
      onChange={onChange}
      className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer after:w-36"
    ></input>
  </div>
);

export default DangerLevelBar;
