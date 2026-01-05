import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";
import DifficultySelector from "./components/DifficultySelector";
import { Footer } from "./components/Footer";

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
      <div className="flex flex-col justify-around h-screen">
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
        <Footer />
      </div>
    </>
  );
}

export default App;
