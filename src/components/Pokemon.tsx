import React from 'react';
import { catchPokemon } from '../services/pokemon';

class Pokemon extends React.Component<{ species: string | undefined }, { pokemon: any }> {
  constructor(props: { species: string | undefined }) {
    super(props);
    this.state = {
      pokemon: {},
    };
  }

  componentDidMount() {
    const { species } = this.props;
    this.getPokemonBySpecies(species);
  }

  async getPokemonBySpecies(species: string = 'ditto') {
    const pokemon = await catchPokemon(species);
    this.setState({ pokemon });
  }

  render() {
    const { pokemon } = this.state;
    return(<span>{ pokemon.name }</span>);
  }
}

export default Pokemon;
