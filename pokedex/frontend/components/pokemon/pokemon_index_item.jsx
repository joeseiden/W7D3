import React from 'react';
import { Link } from 'react-router';


export const PokemonIndexItem = ({ pokemon }) => {
  return (
    <li className="pokemon">
      <Link to="/pokemon/:pokemonId">
        <img className="poke-thumb" src={pokemon.image_url} />
        <br />
        {pokemon.name}
      </Link>
    </li>
  );
};
