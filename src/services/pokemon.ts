export async function catchPokemon(pokemonId: number | string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const pokemon = await fetch(url)
    .then((binData) => binData.json())
    .then((jsonData) => jsonData);
  return pokemon;
}
