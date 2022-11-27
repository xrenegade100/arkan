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
      />
    </div>
  );
};

export default App;
