import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <SearchBar
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onClick={() => {
          console.log('searching...');
        }}
      />
    </div>
  );
};

export default App;
