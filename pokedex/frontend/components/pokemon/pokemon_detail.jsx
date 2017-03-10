import React from 'react';
import PokemonDetailContainer from './pokemon_detail_container';
import ItemDetail from './item_detail';
import { Link } from 'react-router';

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
    let items;
    if (pokemon.items) {
      items = pokemon.items.map((item, idx) => (
        <li key={idx}>
          <Link to={`/pokemon/${pokemon.id}/item/${item.id}`}>
            <img src={item.image_url}/>
            <ItemDetail key={item.id} item={item}/>
          </Link>
        </li>
      ));
    }

    let moves;
    if (pokemon.moves) {
      moves = pokemon.moves.map((move, idx) => (
        <li key={idx}>{ move }</li>
      ));
    }

    let itemDetail = () => {
      <ItemDetail item={this.props.params.id}/>;
    };

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
          <li>Items: <ul>{ items }</ul></li>
          { this.props.children }
        </ul>
      </div>
    );
  }

}


export default PokemonDetail;


// <ul>{ pokemon.moves.map (move => <li>{move}</li>)}</ul>
