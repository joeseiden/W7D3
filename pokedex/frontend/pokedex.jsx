import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';

import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';

window.store = configureStore();
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>I am Pokedex</h1>, root);
});
