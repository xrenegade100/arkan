import React, { useState } from 'react';

interface Props {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange, onClick }: Props) => {
  const [searchBarWidth, setSearchBarWidth] = useState({
    componentWidth: 'w-fit',
    inputWidth: 'w-0',
    buttonMargin: 'mx-0',
    inputMargin: 'mx-0',
  });

  return (
    <div
      className={`${searchBarWidth.componentWidth} p-1 rounded-full bg-gradient-to-r from-primary-main to-secondary-main shadow-lg transition-width duration-1000`}
    >
      <div className="w-full h-auto p-1 rounded-full bg-white flex justify-between items-center transition-width duration-1000">
        <input
          type="text"
          placeholder="Cerca.."
          value={value}
          onChange={onChange}
          className={`${searchBarWidth.inputWidth} ${searchBarWidth.inputMargin} outline-none font-body text-lg`}
        />
        <button
          type="button"
          className={`${searchBarWidth.buttonMargin} hover:cursor-pointer material-symbols-rounded md-48 text-secondary-main`}
          onClick={() => {
            if (searchBarWidth.inputWidth === 'w-0') {
              setSearchBarWidth({
                componentWidth: 'w-4/5 md:w-3/4 lg:w-2/3 xl:w-2/4',
                inputWidth: 'w-full',
                buttonMargin: 'mr-3',
                inputMargin: 'ml-3',
              });
            } else if (value === '') {
              setSearchBarWidth({
                componentWidth: 'w-fit',
                inputWidth: 'w-0',
                buttonMargin: 'mr-0',
                inputMargin: 'ml-0',
              });
            } else {
              onClick();
            }
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
