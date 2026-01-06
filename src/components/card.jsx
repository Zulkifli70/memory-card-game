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

  const getDifficultyColors = () => {
    switch (difficulty) {
      case "Easy":
        return {
          gradient: "from-green-400 to-green-600",
          border: "border-green-300",
          shadow: "shadow-green-500/50",
        };
      case "Normal":
        return {
          gradient: "from-blue-400 to-blue-600",
          border: "border-blue-300",
          shadow: "shadow-blue-500/50",
        };
      case "Hard":
        return {
          gradient: "from-orange-400 to-orange-600",
          border: "border-orange-300",
          shadow: "shadow-orange-500/50",
        };
      case "Extreme":
        return {
          gradient: "from-red-500 to-purple-600",
          border: "border-purple-300",
          shadow: "shadow-purple-500/50",
        };
      default:
        return {
          gradient: "from-purple-500 to-pink-500",
          border: "border-purple-300",
          shadow: "shadow-purple-500/50",
        };
    }
  };

  const difficultyColors = getDifficultyColors();

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
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="max-w-md p-8 mx-4 text-center border-4 border-red-300 shadow-2xl bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
            <div className="mb-4">
              <div className="mb-3 text-6xl">😢</div>
              <h2 className="mb-2 text-4xl font-bold text-red-500 font-pokemon">
                Game Over!
              </h2>
              <p className="text-lg text-gray-700 font-bubble">
                You clicked the same Pokemon twice!
              </p>
            </div>

            <div className="p-5 mb-6 shadow-inner rounded-xl bg-white/80 backdrop-blur-sm">
              <p className="text-xl font-semibold text-gray-800 font-bubble">
                Your Score:{" "}
                <span className="text-2xl text-blue-600">{score}</span>
              </p>
              <p className="mt-2 text-base text-gray-600 font-bubble">
                Best Score:{" "}
                <span className="text-lg font-medium text-green-600">
                  {bestScore}
                </span>
              </p>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={resetGame}
                className="px-6 py-3 font-medium text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg font-bubble"
              >
                New Game
              </button>
              <button
                onClick={onBackToMenu}
                className="px-6 py-3 font-medium text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 hover:shadow-lg font-bubble"
              >
                Change Difficulty
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        {/* Difficulty Badge & Back Button */}
        <div className="flex flex-col items-center p-8 border shadow-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md rounded-3xl min-w-10/12 border-white/10">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={onBackToMenu}
                className="px-5 py-2.5 text-white transition-all bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl hover:from-slate-700 hover:to-slate-800 font-bubble shadow-lg hover:shadow-xl"
              >
                ← Back to Menu
              </button>
              <div
                className={`px-6 py-2.5 bg-gradient-to-r ${difficultyColors.gradient} rounded-xl shadow-lg ${difficultyColors.shadow} border-2 ${difficultyColors.border}`}
              >
                <p className="text-lg font-bold text-white font-bubble">
                  Difficulty: {difficulty}
                </p>
              </div>
            </div>
            {/* Score Display */}
            <div className="flex justify-center mb-6 text-center">
              <div className="flex items-center justify-center gap-6">
                <div className="px-6 py-4 border-2 border-blue-300 shadow-xl bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl">
                  <p className="mb-2 text-xl font-extrabold tracking-wider text-white font-bubble">
                    Score
                  </p>
                  <p className="text-5xl font-bold text-white font-bubble drop-shadow-lg">
                    {score}
                  </p>
                </div>
                <div className="px-6 py-4 border-2 border-green-300 shadow-xl bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl">
                  <p className="mb-2 text-xl font-extrabold tracking-wider text-white font-bubble">
                    Best Score
                  </p>
                  <p className="text-5xl font-bold text-white font-bubble drop-shadow-lg">
                    {bestScore}
                  </p>
                </div>
              </div>
            </div>
            {/* Clicked Pokemon */}
            <div className="px-6 py-3 mt-4 mb-10 text-lg text-center border-2 border-orange-300 shadow-lg bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl font-bubble">
              <p className="font-bold text-white">
                Clicked unique pokemon: {clickedPokemon.length} /{" "}
                {pokemon.length}
              </p>
            </div>
          </div>

          <div className="p-4 mb-6 text-center border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
            <p className="text-lg font-semibold text-white font-bubble">
              Click Pokemon that you didn't click before!
            </p>
            <p className="mt-1 text-base text-gray-200 font-bubble">
              If you lose, the pokemon will be randomized automatically
            </p>
          </div>

          {/* Pokemon Cards Grid */}
          <div
            className={`grid ${getGridCols()} gap-5 justify-items-center items-center mb-6`}
          >
            {pokemon.map((pokemonData) => (
              <div
                key={pokemonData.id}
                className="flex flex-col w-40 overflow-hidden transition-all duration-300 bg-white cursor-pointer border-3 border-white/30 rounded-2xl h-52 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
                onClick={() => handleCardClick(pokemonData)}
              >
                <div className="flex items-center justify-center flex-1 p-4 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
                  <img
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                    className="object-contain transition-transform duration-300 w-28 h-28 hover:scale-110 drop-shadow-lg"
                  />
                </div>
                <div className="p-3 text-center border-t-2 bg-gradient-to-r from-slate-700 to-slate-800 border-slate-600">
                  <p className="text-lg font-bold text-white capitalize font-bubble drop-shadow">
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
              className="px-8 py-3 text-xl font-bold transition-all border-2 border-yellow-300 shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-slate-900 hover:from-yellow-500 hover:to-orange-600 hover:shadow-2xl font-bubble hover:scale-105"
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
