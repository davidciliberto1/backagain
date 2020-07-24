import React from 'react';
import './App.css';
import Saludo from './components/saludo';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
     <h1>Holaaa</h1>
      <Saludo />
    </div>
  );
}

export default App;
