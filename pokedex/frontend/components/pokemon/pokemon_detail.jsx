import React from 'react';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOnePokemon({ id: this.props.params.pokemonId });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.pokemonId !== this.props.params.pokemonId) {
      this.props.requestOnePokemon({ id: newProps.params.pokemonId });
    }
  }

  render() {
    const pokemon = this.props.pokemonDetail;
    const items = pokemon.items;
    let moves;
    if (pokemon.moves) {
      moves = pokemon.moves.map((move, idx) => (
        <li key={idx}>{ move }</li>
      ));
    }

    return (
      <div className="pokemon-detail">
        <ul className="poke-attributes">
          <li><img src={ pokemon.image_url } /></li>
          <li>Name: { pokemon.name }</li>
          <li>Number: { pokemon.id }</li>
          <li>Attack: { pokemon.attack }</li>
          <li>Defense: { pokemon.defense }</li>
          <li>Type: { pokemon.poke_type }</li>
          <li>Moves: <ul>{ moves }</ul></li>
        </ul>
      </div>
    );
  }

}


export default PokemonDetail;


// <ul>{ pokemon.moves.map (move => <li>{move}</li>)}</ul>
