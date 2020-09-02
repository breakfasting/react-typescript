import React from 'react';
import logo from './logo.svg';
import TextField from './TextField';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      {/* Alt + Esc for intellisense */}
      <TextField text="hello" person={{ name: 'Wayne' }} handleChange={(e) => e.target.value} />
    </div>
  );
};

export default App;
