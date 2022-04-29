import { Component } from 'react';
import { catchPokemonSpecies } from '../services/pokemon';
import './PokemonDetails.css';

export interface PokemonDetailsProps {
  pokemonId: number | string;
}

export interface PokemonDetailsState {
  pokemon: any;
  loading: boolean;
}

class PokemonDetails extends Component<PokemonDetailsProps, PokemonDetailsState> {
  constructor(props: PokemonDetailsProps) {
    super(props);
    this.state = {
      pokemon: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { pokemonId } = this.props;
    this.getPokemonSpecies(pokemonId);
  }

  async getPokemonSpecies(pokemonId: number | string) {
    this.setState({ loading: true });
    await catchPokemonSpecies(pokemonId)
      .then((pokemon) => this.setState({ pokemon, loading: false }));
  }

  render() {
    const { pokemon } = this.state;
    return(
      <div>
        <div>
          pokedex number
          { pokemon.id }
        </div>
        <div>
          name
          { pokemon.name }
        </div>
        <div>
          base happiness
          { pokemon.base_happiness }
        </div>
        <div>
          capture rate
          { pokemon.capture_rate }
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
