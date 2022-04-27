import React from 'react';
import { catchPokemon } from '../services/pokemon';

class Pokemon extends React.Component<{ species: string }, { pokemon: any, loading: boolean }> {
  constructor(props: { species: string }) {
// pokemon data fetched from https://pokeapi.co/
    super(props);
    this.state = {
      pokemon: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { species } = this.props;
    this.getPokemonBySpecies(species);
  }

  async getPokemonBySpecies(species: string) {
    this.setState({ loading: true });
    await catchPokemon(species)
      .then((pokemon) => this.setState({ pokemon, loading: false }));
  }

  render() {
    const { pokemon, loading } = this.state;
    if (loading) return 'loading...'
    return(
      <div>
        <span>{ pokemon.name }</span>
        <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
      </div>
    );
  }
}

export default Pokemon;
