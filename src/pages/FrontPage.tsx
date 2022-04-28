import { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import './FrontPage.css';

class FrontPage extends Component {
  render() {
    const indexList = Array(12).fill(0).map((_, index) => index + 1);
    return(
      <main className="FrontPage">
        <Routes>
          {
            indexList.map((dexId) => (
              <Route key={ dexId } path="/pokemon:dexId">
                <PokemonCard pokemonId={ dexId } />
              </Route>
            ))
          }
        </Routes>
      </main>
    )
  }
}

export default FrontPage;
