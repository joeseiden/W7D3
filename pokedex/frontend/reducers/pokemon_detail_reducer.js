import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';


const pokemonDetailReducer = (state = {}, action) => {
  let nextState = {};
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return merge(nextState, action.pokemon);
    default:
      return state;
  }
};


export default pokemonDetailReducer;
