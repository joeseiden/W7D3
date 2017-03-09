export const fetchAllPokemon = () => (
  $.ajax({
    url: "/api/pokemon"
  })
);

export const fetchOnePokemon = (pokemon) => (
  $.ajax({
    url: `/api/pokemon/${pokemon.id}`
  })
);
