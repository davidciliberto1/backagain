import React from "react";
import "./App.css";
import Saludo from "./components/saludo";
import Header from "./components/header";
import Contador from "./components/contador";
import Nombre from './components/nombre';
import Edad from './components/edad';

function App() {
  return (
    <div className="App">
      <Header />
      <Saludo />
      <Contador />
      <Nombre />
      <Edad />
    </div>
  );
}

export default App;
