import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <Input
      hint="nome"
      type="password"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export default App;
