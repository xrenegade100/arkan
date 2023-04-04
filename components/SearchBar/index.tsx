/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import clsx from 'clsx';
import React, { useState } from 'react';
import { validation } from '../../helpers/CredentialsValidation';

interface Props {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  isInvalid?: number;
  isLoading?: boolean;
  errorText?: string;
}

const SearchBar: React.FC<Props> = ({
  value,
  onChange,
  onClick,
  isInvalid,
  isLoading,
  errorText,
}: Props) => {
  const [searchBarWidth, setSearchBarWidth] = useState({
    componentWidth: 'w-fit',
    inputWidth: 'w-0',
    buttonMargin: 'mx-0',
    inputMargin: 'mx-0',
  });

  return (
    <div
      className={`flex flex-col justify-start items-start${searchBarWidth.componentWidth}`}
    >
      <div
        className={clsx(
          'w-full p-1 rounded-full shadow-lg transition-width duration-1000',
          {
            'bg-gradient-to-r from-primary-main to-secondary-main':
              isInvalid !== validation.INVALID,
            'bg-red-500': isInvalid === validation.INVALID,
          },
        )}
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
              } else if (!isLoading) {
                onClick();
              }
            }}
          >
            {isLoading ? (
              <div className="animate-spin h-12 w-12 rounded-full border-4 border-gray-300 border-t-4 border-t-primary-main" />
            ) : (
              'search'
            )}
          </button>
        </div>
      </div>
      {isInvalid === validation.INVALID && (
        <span className="ml-6 font-body text-red-500 font-bold">
          {errorText}
        </span>
      )}
    </div>
  );
};

SearchBar.defaultProps = {
  errorText: '',
  isInvalid: validation.VALID,
  isLoading: false,
};

export default SearchBar;
