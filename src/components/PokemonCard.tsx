import { Component } from 'react';
import { catchPokemon } from '../services/pokemon';
import './PokemonCard.css';

// pokemon data fetched from https://pokeapi.co/

export interface PokemonCardProps {
  pokemonId: number | string;
}

export interface PokemonCardState {
  pokemon: any;
  loading: boolean;
}

export interface Stat {
  base_stat: number;
  effort: 0;
  stat: {
    name: string;
    url: string;
  }
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

class PokemonCard extends Component<PokemonCardProps, PokemonCardState> {
  constructor(props: PokemonCardProps) {
    super(props);
    this.state = {
      pokemon: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { pokemonId } = this.props;
    this.getPokemonBySpecies(pokemonId);
  }

  async getPokemonBySpecies(pokemonId: number | string) {
    this.setState({ loading: true });
    await catchPokemon(pokemonId)
      .then((pokemon) => this.setState({ pokemon, loading: false }));
  }

  render() {
    const { pokemon, loading } = this.state;
    if (loading) return 'loading...'
    return(
      <div className="pokemon-card">
        <div>
          <div id="pokemon-card-id">{ pokemon.id }</div>
          <div id="pokemon-card-name">{ pokemon.name }</div>
        </div>
        <div id="pokemon-card-image">
          <img
            width="96px"
            height="96px"
            src={ pokemon.sprites.front_default }
            alt={ pokemon.name }
          />
        </div>
        <div id="pokemon-card-type">
          <div id="pokemon-card-type-label">Type</div>
          {
            pokemon.types.map(
              ({ slot, type }: PokemonType) =>
                <div className="pokemon-card-type-value" key={ slot }>{ type.name }</div>
            )
          }
        </div>
        <div>
          {
            pokemon.stats.map(({ stat, base_stat }: Stat) => (
              <div key={ stat.name }>
                <span>{ stat.name }</span>
                <span>{ base_stat }</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default PokemonCard;
