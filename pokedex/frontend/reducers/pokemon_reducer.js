import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = {};
      Object.keys(action.pokemon).forEach(id => {
        nextState[id] = action.pokemon[id];
      });
      return nextState;
    default:
      return state;
  }
};


export default pokemonReducer;
