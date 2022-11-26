import React from 'react';
import Toast from './components/Toast';

const App: React.FC = () => (
  <div>
    <Toast text="ciao" onClick={() => console.log('ciao')} />
  </div>
);

export default App;
