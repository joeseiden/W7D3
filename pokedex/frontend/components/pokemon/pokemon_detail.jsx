import React from 'react';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOnePokemon(this.props.params.pokemon.id);
  }

  render() {
    const pokemon = this.props.pokemonDetail;

    return (
      <div>
        <ul>
          <li>{ pokemon.name }</li>
          <li>{ pokemon.id }</li>
        </ul>
      </div>
    );
  }

}

export default PokemonDetail;
