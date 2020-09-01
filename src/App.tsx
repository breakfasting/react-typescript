import React from 'react';
import logo from './logo.svg';
import TextField from './TextField';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <TextField text="hello" person={{ name: 'Wayne', age: 28 }} />
    </div>
  );
};

export default App;
