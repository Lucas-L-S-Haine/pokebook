export async function catchPokemon(speciesName: string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${speciesName}`;
  const pokemon = await fetch(url)
    .then((binData) => binData.json())
    .then((jsonData) => jsonData);
  return pokemon;
}
