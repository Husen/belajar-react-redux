import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <h1>Redux Calculator</h1>
      <Calculator />
      <History />
    </div>
  );
}

export default App;
