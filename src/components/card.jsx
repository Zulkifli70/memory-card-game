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
    showLoseModal,
    handleCardClick,
    resetGame,
    closeWinModal,
    closeLoseModal,
  } = usePokemonGame(10);

  if (!dataIsLoaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <h1 className="text-xl">Please wait some time....</h1>
      </div>
    );
  }

  return (
    <>
      {/* Win Modal */}
      {showWinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
          <div className="max-w-md p-8 mx-4 text-center bg-white rounded-lg shadow-2xl">
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-bold text-green-600">
                Congrats!
              </h2>
              <p className="text-gray-600">You conquered it!</p>
            </div>

            <div className="p-4 mb-6 rounded-lg bg-gray-50">
              <p className="text-lg font-semibold text-gray-800">
                Final Score: <span className="text-blue-600">{score}</span>
              </p>
              {score === bestScore && (
                <p className="mt-1 text-sm font-medium text-green-600">
                  🏆 New Best Score!
                </p>
              )}
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={resetGame}
                className="px-6 py-2 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Play Again
              </button>
              <button
                onClick={closeWinModal}
                className="px-6 py-2 font-medium text-gray-700 transition-colors bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Close
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
              <h2 className="mb-2 text-xl font-bold text-red-600">
                Game Over!
              </h2>
              <p className="text-gray-600">
                You clicked the same Pokemon twice!
              </p>
            </div>

            <div className="p-4 mb-6 rounded-lg bg-gray-50">
              <p className="text-lg font-semibold text-gray-800">
                Your Score: <span className="text-blue-600">{score}</span>
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Best Score:{" "}
                <span className="font-medium text-green-600">{bestScore}</span>
              </p>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={resetGame}
                className="px-6 py-2 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                New Game
              </button>
              <button
                onClick={closeLoseModal}
                className="px-6 py-2 font-medium text-gray-700 transition-colors bg-gray-300 rounded-lg hover:bg-gray-400"
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
          <div className="flex items-center justify-center gap-8 mb-5">
            <div className="px-4 py-2 bg-blue-100 rounded-lg">
              <p className="text-2xl text-gray-800 font-extrabold tracking-[.3em] font-bubble mb-4">
                Current Score
              </p>
              <p className="text-4xl font-bold text-blue-600 font-pokemon">
                {score}
              </p>
            </div>
            <div className="px-4 py-2 bg-green-100 rounded-lg">
              <p className="text-2xl text-gray-800 font-extrabold tracking-[.3em] font-bubble mb-4">
                Best Score
              </p>
              <p className="text-4xl font-bold text-green-600 font-pokemon">
                {bestScore}
              </p>
            </div>
          </div>
          <p className="mt-2 text-lg text-gray-500 font-bubble">
            Click Pokemon that you didn't click before!
          </p>
          <p className="mt-2 text-lg text-gray-500 font-bubble">
            If you lose, the pokemon will be randomized automatically
          </p>
        </div>

        {/* Pokemon Cards Grid */}
        <div className="grid items-center grid-cols-5 gap-4 mb-6">
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
        <div className="mt-4 mb-10 text-lg text-center text-gray-600 font-bubble">
          <p>
            Clicked unique pokemon: {clickedPokemon.length} / {pokemon.length}
          </p>
        </div>
        <h1 className="text-2xl font-bold font-pokemon">
          Code By Zulkifli Firdausi
        </h1>
      </div>
    </>
  );
}
