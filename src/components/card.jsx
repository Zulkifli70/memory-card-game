import React from "react";
import { usePokemonGame } from "../hooks/usePokemonGame";
import "../App.css";

export default function Card() {
  const {
    pokemon,
    dataIsLoaded,
    score,
    bestScore,
    clickedPokemon,
    showWinModal,
    handleCardClick,
    resetGame,
    closeWinModal,
  } = usePokemonGame(10);

  if (!dataIsLoaded) {
    return (
      <div className="flex justify-center items-center h-64">
        <h1 className="text-xl">Please wait some time....</h1>
      </div>
    );
  }

  return (
    <>
      {/* Win Modal */}
      {showWinModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xs">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Congrats!
              </h2>
              <p className="text-gray-600">You conquered it!</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-lg font-semibold text-gray-800">
                Final Score: <span className="text-blue-600">{score}</span>
              </p>
              {score === bestScore && (
                <p className="text-sm text-green-600 font-medium mt-1">
                  🏆 New Best Score!
                </p>
              )}
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Play Again
              </button>
              <button
                onClick={closeWinModal}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        {/* Score Display */}
        <div className="mb-6 text-center">
          <div className="flex gap-8 justify-center items-center">
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-600">Current Score</p>
              <p className="text-2xl font-bold text-blue-600">{score}</p>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-600">Best Score</p>
              <p className="text-2xl font-bold text-green-600">{bestScore}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Click Pokemon that you didn't click before!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            If you lose, the pokemon will be randomized
          </p>
        </div>

        {/* Pokemon Cards Grid */}
        <div className="grid grid-cols-5 gap-4 items-center mb-6">
          {pokemon.map((pokemonData) => (
            <div
              key={pokemonData.id}
              className="border-2 w-40 h-52 flex flex-col cursor-pointer hover:shadow-lg transition-all duration-200"
              onClick={() => handleCardClick(pokemonData)}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex justify-center items-center flex-1">
                <img
                  src={pokemonData.sprites.front_default}
                  alt={pokemonData.name}
                  className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="text-center p-2 bg-white">
                <p className="text-sm font-medium capitalize">
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
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            New Game
          </button>
        </div>

        {/* Game Stats */}
        <div className="mt-4 text-center text-sm text-gray-600 mb-10">
          <p>
            Clicked Pokemon: {clickedPokemon.length} / {pokemon.length}
          </p>
        </div>
        <h1>Code By Zulkifli Firdausi</h1>
      </div>
    </>
  );
}
