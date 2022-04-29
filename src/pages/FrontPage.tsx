import { Component } from 'react';
import PokemonCard from '../components/PokemonCard';
import './FrontPage.css';

class FrontPage extends Component {
  render() {
    const indexList = Array(12).fill(0).map((_, index) => index + 1);
    return(
      <main className="FrontPage">
        {
          indexList.map((dexId) => (
            <PokemonCard key={ dexId } pokemonId={ dexId } />
          ))
        }
      </main>
    )
  }
}

export default FrontPage;
