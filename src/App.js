import React from "react";
import "./App.css";
import Saludo from "./components/saludo";
import Header from "./components/header";
import Contador from "./components/contador";
import Nombre from './components/nombre';

function App() {
  return (
    <div className="App">
      <Header />
      <Saludo />
      <Contador />
      <Nombre />
    </div>
  );
}

export default App;
