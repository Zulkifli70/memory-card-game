export const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const isPokemonClicked = (pokemonId, clickedPokemon) => {
  return clickedPokemon.includes(pokemonId);
};

export const checkWinCondition = (clickedCount, totalPokemon) => {
  return clickedCount === totalPokemon;
};

export const updateBestScore = (currentScore, bestScore) => {
  return Math.max(currentScore, bestScore);
};

export const getInitialGameState = () => ({
  score: 0,
  clickedPokemon: [],
  showWinModal: false,
});
