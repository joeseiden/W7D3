export function fetchAllPokemon() {
  return $.ajax({
    url: "/api/pokemon"
  });
}
