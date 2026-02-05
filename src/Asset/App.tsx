import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Pokemons,Pokemon,Items } from '../pages'; 


const NotFound = () => <div>Página no encontrada</div>; 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/pokemons" element={<Pokemons/>} />
          <Route path="/pokemon/:name" element={<Pokemon/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;