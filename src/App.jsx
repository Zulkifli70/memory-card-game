import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";
import DifficultySelector from "./components/DifficultySelector";

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [pokemonCount, setPokemonCount] = useState(10);

  const handleDifficultySelect = (level, count) => {
    setDifficulty(level);
    setPokemonCount(count);
  };

  const handleBackToMenu = () => {
    setDifficulty(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Navbar />
        {!difficulty ? (
          <DifficultySelector onSelectDifficulty={handleDifficultySelect} />
        ) : (
          <Card
            pokemonCount={pokemonCount}
            difficulty={difficulty}
            onBackToMenu={handleBackToMenu}
          />
        )}
      </div>
    </>
  );
}

export default App;
