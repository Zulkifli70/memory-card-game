import React from "react";
import "../App.css";

export default function DifficultySelector({ onSelectDifficulty }) {
  const difficulties = [
    {
      level: "Easy",
      count: 5,
      color: "from-green-400 to-green-600",
      hoverColor: "hover:from-green-500 hover:to-green-700",
      description: "Perfect for beginners",
      icon: "🌱",
    },
    {
      level: "Normal",
      count: 10,
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      description: "Standard challenge",
      icon: "⚡",
    },
    {
      level: "Hard",
      count: 15,
      color: "from-orange-400 to-orange-600",
      hoverColor: "hover:from-orange-500 hover:to-orange-700",
      description: "For experienced players",
      icon: "🔥",
    },
    {
      level: "Extreme",
      count: 20,
      color: "from-red-500 to-purple-600",
      hoverColor: "hover:from-red-600 hover:to-purple-700",
      description: "Ultimate test",
      icon: "💀",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800 font-bubble">
          Choose Your Difficulty
        </h2>
        <p className="text-xl text-gray-600 font-bubble">
          Select how many Pokemon you want to remember
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {difficulties.map((diff) => (
          <button
            key={diff.level}
            onClick={() => onSelectDifficulty(diff.level, diff.count)}
            className={`bg-gradient-to-br ${diff.color} ${diff.hoverColor} 
              text-white rounded-xl p-8 shadow-lg transform transition-all 
              duration-300 hover:scale-105 hover:shadow-2xl 
              flex flex-col items-center justify-center gap-4 min-h-[280px]`}
          >
            <div className="mb-2 text-6xl">{diff.icon}</div>
            <h3 className="text-3xl font-bold font-pokemon">{diff.level}</h3>
            <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm">
              <p className="text-2xl font-bold font-bubble">
                {diff.count} Pokemon
              </p>
            </div>
            <p className="text-sm font-medium opacity-90 font-bubble">
              {diff.description}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 font-bubble">
        <p className="text-lg">
          💡 Tip: Start with Easy if you're new to the game!
        </p>
      </div>
    </div>
  );
}
