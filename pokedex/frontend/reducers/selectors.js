import * as Lodash from 'lodash';

export const selectAllPokemon = state => {
  return Lodash.values(state.pokemon);
};
