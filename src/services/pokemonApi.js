export const fetchPokemonList = async (limit = 151, offset = 0) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    throw error;
  }
};

export const fetchRandomPokemon = async (count = 10) => {
  try {
    const pokemonList = await fetchPokemonList();

    const pokemonDetails = await Promise.all(
      pokemonList.results.map((pokemon) => fetchPokemonDetails(pokemon.url))
    );

    const shuffled = pokemonDetails.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } catch (error) {
    console.error("Error fetching random Pokemon:", error);
    throw error;
  }
};
