import React from "react";
import { usePokemonGame } from "../hooks/usePokemonGame";
import "../App.css";

export default function Card({ pokemonCount, difficulty, onBackToMenu }) {
  const {
    pokemon,
    dataIsLoaded,
    score,
    bestScore,
    clickedPokemon,
    showWinModal,
    showLoseModal,
    handleCardClick,
    resetGame,
  } = usePokemonGame(pokemonCount);

  if (!dataIsLoaded) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center h-5/6">
          <h1 className="text-2xl mb-7 font-pokemonsolid">
            Catching some pokemons....
          </h1>
          <img className="rounded-2xl" src="/pokemons.gif" alt="pokemon" />
        </div>
      </div>
    );
  }

  // Menentukan jumlah kolom berdasarkan jumlah pokemon
  const getGridCols = () => {
    if (pokemonCount <= 5) return "grid-cols-5";
    if (pokemonCount <= 10) return "grid-cols-5";
    if (pokemonCount <= 15) return "grid-cols-8";
    return "grid-cols-10"; // untuk 20 pokemon
  };

  return (
    <>
      {/* Win Modal */}
      {showWinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="max-w-md p-8 mx-4 text-center border-4 border-yellow-400 shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
            <div className="mb-4">
              <h2 className="mb-2 text-4xl font-bold text-yellow-600 font-pokemon">
                You Win!
              </h2>
              <p className="text-lg text-gray-700 font-bubble">
                You conquered {difficulty} mode!
              </p>
            </div>

            <div className="p-5 mb-6 shadow-inner rounded-xl bg-white/80 backdrop-blur-sm">
              <p className="text-xl font-semibold text-gray-800 font-bubble">
                Final Score:{" "}
                <span className="text-2xl text-blue-600">{score}</span>
              </p>
              {score === bestScore && (
                <p className="mt-2 text-base font-medium text-yellow-600 font-bubble">
                  🏆 New Best Score!
                </p>
              )}
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={resetGame}
                className="px-6 py-3 font-medium text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg font-bubble"
              >
                Play Again
              </button>
              <button
                onClick={onBackToMenu}
                className="px-6 py-3 font-medium text-gray-700 transition-all bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg font-bubble"
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Over Modal */}
      {showLoseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
          <div className="max-w-md p-8 mx-4 text-center bg-white rounded-lg shadow-2xl">
            <div className="mb-4">
              <h2 className="mb-2 text-3xl font-bold text-red-600 font-pokemon">
                Game Over!
              </h2>
              <p className="text-gray-600 font-bubble">
                You clicked the same Pokemon twice!
              </p>
            </div>

            <div className="p-4 mb-6 rounded-lg bg-gray-50">
              <p className="text-lg font-semibold text-gray-800 font-bubble">
                Your Score: <span className="text-blue-600">{score}</span>
              </p>
              <p className="mt-1 text-sm text-gray-600 font-bubble">
                Best Score:{" "}
                <span className="font-medium text-green-600">{bestScore}</span>
              </p>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={resetGame}
                className="px-6 py-2 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600 font-bubble"
              >
                New Game
              </button>
              <button
                onClick={onBackToMenu}
                className="px-6 py-2 font-medium text-white transition-colors bg-purple-500 rounded-lg hover:bg-purple-600 font-bubble"
              >
                Change Difficulty
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        {/* Difficulty Badge & Back Button */}
        <div className="bg-[rgba(0,0,0,0.32)] rounded-2xl p-8 flex flex-col items-center min-w-10/12">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={onBackToMenu}
                className="px-4 py-2 text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-600 font-bubble"
              >
                ← Back to Menu
              </button>
              <div className="px-6 py-2 bg-purple-100 border-2 border-purple-300 rounded-lg">
                <p className="text-lg font-bold text-purple-700 font-bubble">
                  Difficulty: {difficulty}
                </p>
              </div>
            </div>
            {/* Score Display */}
            <div className="flex justify-center mb-6 text-center">
              <div className="flex items-center justify-center gap-8 mb-5">
                <div className="px-4 py-2 bg-blue-100 rounded-lg">
                  <p className="text-2xl text-gray-800 font-extrabold tracking-[.3em] font-bubble mb-4">
                    Score
                  </p>
                  <p className="text-4xl font-bold text-blue-600 font-bubble">
                    {score}
                  </p>
                </div>
                <div className="px-4 py-2 bg-green-100 rounded-lg">
                  <p className="text-2xl text-gray-800 font-extrabold tracking-[.3em] font-bubble mb-4">
                    Best Score
                  </p>
                  <p className="text-4xl font-bold text-green-600 font-bubble">
                    {bestScore}
                  </p>
                </div>
              </div>
            </div>
            {/* Clicked Pokemon */}
            <div className="py-4 mt-4 mb-10 text-lg text-center text-gray-800 bg-white rounded-xs px-7 font-bubble">
              <p>
                Clicked unique pokemon: {clickedPokemon.length} /{" "}
                {pokemon.length}
              </p>
            </div>
          </div>
          <div className="mb-5 text-center">
            <p className="mt-2 text-lg text-white font-bubble">
              Click Pokemon that you didn't click before!
            </p>
            <p className="mt-2 text-lg text-white font-bubble">
              If you lose, the pokemon will be randomized automatically
            </p>
          </div>
          {/* Pokemon Cards Grid */}
          <div
            className={`grid ${getGridCols()} gap-4 justify-items-center items-center mb-6`}
          >
            {pokemon.map((pokemonData) => (
              <div
                key={pokemonData.id}
                className="flex flex-col w-40 overflow-hidden transition-all duration-200 border-2 rounded-md cursor-pointer h-52 hover:shadow-lg"
                onClick={() => handleCardClick(pokemonData)}
              >
                <div className="flex items-center justify-center flex-1 p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
                  <img
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                    className="object-contain w-24 h-24 transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <div className="p-2 text-center bg-white">
                  <p className="text-lg font-medium capitalize font-bubble">
                    {pokemonData.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Control Buttons */}
          <div className="flex gap-4">
            <button
              onClick={resetGame}
              className="px-4 py-2 text-2xl transition-colors bg-yellow-500 rounded text-zinc-900 hover:bg-yellow-600 font-bubble"
            >
              New Game
            </button>
          </div>
          {/* Game Stats */}
        </div>
      </div>
    </>
  );
}
