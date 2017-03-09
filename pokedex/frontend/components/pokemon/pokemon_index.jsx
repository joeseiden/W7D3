import React from 'react';

class PokemonIndex extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    const pokemonList = pokemon.map( (poke, idx) => (
      <li className="pokemon" key={idx}>
        <img className="poke-thumb" src={poke.image_url} />
        <br />
        {poke.name}
      </li>
    ));

    return (
      <div>
        <ul className="poke-list">
          { pokemonList }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
