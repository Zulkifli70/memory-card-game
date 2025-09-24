import { useState, useEffect } from "react";
import { fetchRandomPokemon } from "../services/pokemonApi";
import {
  shuffleArray,
  isPokemonClicked,
  checkWinCondition,
  updateBestScore,
  getInitialGameState,
} from "../utils/gameUtils";

export const usePokemonGame = (pokemonCount = 10) => {
  const [pokemon, setPokemon] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [showWinModal, setShowWinModal] = useState(false);

  const fetchNewPokemon = async () => {
    try {
      setDataIsLoaded(false);
      const pokemonData = await fetchRandomPokemon(pokemonCount);
      setPokemon(pokemonData);
      setDataIsLoaded(true);
    } catch (error) {
      console.error("Error loading Pokemon:", error);
      setDataIsLoaded(true); // Set true even on error to show error state
    }
  };

  const shufflePokemon = () => {
    setPokemon((prevPokemon) => shuffleArray(prevPokemon));
  };

  const resetGame = async () => {
    setBestScore((prevBest) => updateBestScore(score, prevBest));

    const initialState = getInitialGameState();
    setScore(initialState.score);
    setClickedPokemon(initialState.clickedPokemon);
    setShowWinModal(initialState.showWinModal);

    await fetchNewPokemon();
  };

  const handleCardClick = (clickedPokemonData) => {
    console.log(`Clicked on: ${clickedPokemonData.name}`);

    if (isPokemonClicked(clickedPokemonData.id, clickedPokemon)) {
      console.log("Game reset - Pokemon already clicked");
      resetGame();
      return;
    }

    console.log("Valid click - increase score");
    const newClickedPokemon = [...clickedPokemon, clickedPokemonData.id];
    const newScore = score + 1;

    setClickedPokemon(newClickedPokemon);
    setScore(newScore);

    shufflePokemon();

    if (checkWinCondition(newClickedPokemon.length, pokemon.length)) {
      console.log("Player wins!");
      setShowWinModal(true);
    }
  };

  const closeWinModal = () => {
    setShowWinModal(false);
  };

  useEffect(() => {
    fetchNewPokemon();
  }, []);

  return {
    pokemon,
    dataIsLoaded,
    score,
    bestScore,
    clickedPokemon,
    showWinModal,

    handleCardClick,
    resetGame,
    closeWinModal,
    fetchNewPokemon,
  };
};
