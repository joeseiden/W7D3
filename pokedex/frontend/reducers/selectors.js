import * as Lodash from 'lodash';

export const selectAllPokemon = state => {
  return Lodash.values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  return state.pokemonDetail.items[itemId];
};
