import { Component } from 'react';
import PokemonCard from './PokemonCard';
import './FrontPage.css';

class FrontPage extends Component {
  render() {
    const indexList = Array(12).fill(0).map((_, index) => index + 1);
    return(
      <div className="FrontPage">
        {
          indexList.map((dexId) => <PokemonCard key={ dexId } pokemonId={ dexId } />)
        }
      </div>
    )
  }
}

export default FrontPage;
