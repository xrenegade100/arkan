import React from 'react';

interface Props {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const SearchBar: React.FC<Props> = ({ value, onChange }: Props) => (
  <div className="w-full h-screen flex justify-center items-center">
    <div className="w-4/5 md:w-2/3 lg:w-2/4 xl:w-1/3 p-1 rounded-full bg-gradient-to-r from-primary-main  first-letter:   b to-secondary-main shadow-lg">
      <div className="w-full h-auto p-1 rounded-full bg-white flex justify-center items-center">
        <input
          type="text"
          placeholder="Cerca.."
          value={value}
          onChange={onChange}
          className="w-full outline-none font-body text-lg ml-3"
        />
        <button
          type="button"
          className="hover:cursor-pointer mx-3 material-symbols-rounded md-48 text-secondary-main"
        >
          search
        </button>
      </div>
    </div>
  </div>
);

export default SearchBar;
