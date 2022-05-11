import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import PokemonDetails from './pages/PokemonDetails';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className="App-pokemon">
          <Routes>
            <Route path="/" element={ <FrontPage /> } />
            <Route path="/pokemon/:id" element={ <PokemonDetails pokemonId={25} /> } />
          </Routes>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
