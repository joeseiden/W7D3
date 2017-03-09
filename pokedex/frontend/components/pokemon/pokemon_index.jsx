import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonIndex extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    const pokemonList = pokemon.map( poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));

    return (
      <section>
        <ul className="poke-list">
          { pokemonList }
        </ul>
        { this.props.children }
      </section>
    );
  }
}

export default PokemonIndex;
