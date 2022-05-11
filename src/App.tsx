import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import PokemonDetails from './pages/PokemonDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-pokemon">
        <Routes>
          <Route path="/" element={ <FrontPage /> } />
          <Route path="/pokemon/:id" element={ <PokemonDetails pokemonId={25} /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
