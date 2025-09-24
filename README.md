# Pokemon Memory Card Game

A fun and interactive memory game built with React where players need to click on Pokemon cards without clicking the same Pokemon twice. Test your memory skills and try to click all Pokemon to win!

Demo Link : https://zulkmemorycard.netlify.app/

## 🎮 How to Play

1. **Objective**: Click on each Pokemon card only once
2. **Scoring**: Each successful click increases your score by 1
3. **Memory Challenge**: Cards shuffle after each click to test your memory
4. **Win Condition**: Click all Pokemon without repeating any to win
5. **Game Over**: Clicking a Pokemon you've already clicked resets the game

## ✨ Features

- **Dynamic Pokemon Loading**: Fetches random Pokemon from the PokeAPI
- **Score Tracking**: Keeps track of current score and best score
- **Memory Challenge**: Cards shuffle positions after each click
- **Win Modal**: Celebration modal when you complete the game
- **Responsive Design**: Works on different screen sizes
- **Visual Feedback**: Hover effects and smooth animations
- **Game Reset**: Start a new game anytime with the "New Game" button

## 🛠️ Technologies Used

- **React 18** - Frontend framework with hooks
- **Tailwind CSS** - Utility-first CSS framework for styling
- **PokeAPI** - RESTful Pokemon API for fetching Pokemon data
- **JavaScript ES6+** - Modern JavaScript features
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── card.jsx         # Main game component with Pokemon cards
│   └── navbar.jsx       # Navigation header component
├── hooks/               # Custom React hooks
│   └── usePokemonGame.js # Game logic and state management
├── services/            # API service functions
│   └── pokemonApi.js    # PokeAPI integration
├── utils/               # Utility functions
│   └── gameUtils.js     # Game helper functions
├── App.jsx              # Main App component
├── App.css              # Tailwind CSS import
└── main.jsx             # React app entry point
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/pokemon-memory-card-game.git
   cd pokemon-memory-card-game
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎯 Game Logic Explanation

### Core Components

1. **usePokemonGame Hook**: Manages all game state and logic

   - Fetches Pokemon data from API
   - Handles click events and scoring
   - Manages win/lose conditions
   - Controls card shuffling

2. **Card Component**: Main game interface

   - Displays Pokemon cards in a grid
   - Shows current and best scores
   - Renders win modal when game is completed

3. **API Service**: Handles Pokemon data fetching
   - Fetches random Pokemon from PokeAPI
   - Manages API error handling
   - Returns Pokemon with images and names

### Game Flow

1. Game loads 10 random Pokemon from the first 151 Pokemon
2. Player clicks on a Pokemon card
3. If Pokemon hasn't been clicked before:
   - Score increases by 1
   - Pokemon ID is added to clicked list
   - Cards shuffle to new positions
4. If Pokemon was already clicked:
   - Game resets with new Pokemon
   - Best score is updated if current score is higher
5. If all Pokemon are clicked without repeating:
   - Win modal appears
   - Player can start a new game

## 🔧 Key Features Implementation

### Memory Game Logic

- **Clicked Tracking**: Uses an array to store IDs of clicked Pokemon
- **Duplicate Detection**: Checks if Pokemon was previously clicked
- **Score Management**: Tracks current score and maintains best score

### Card Shuffling

```javascript
// Fisher-Yates shuffle algorithm for fair randomization
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
```

### API Integration

- Fetches Pokemon list from PokeAPI
- Gets detailed information for each Pokemon
- Handles loading states and error cases
- Implements random selection for variety

## 🎨 Styling Features

- **Responsive Grid**: Cards adapt to different screen sizes
- **Hover Effects**: Interactive feedback on card hover
- **Smooth Animations**: CSS transitions for better UX
- **Color-coded Scores**: Visual distinction between current and best scores
- **Modern Design**: Clean, card-based layout with gradients

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **PokeAPI** - Free and open Pokemon API
- **Pokemon Company** - For creating the amazing Pokemon universe
- **React Team** - For the excellent React framework
- **Tailwind CSS** - For the utility-first CSS framework

_Built with ❤️ using React and PokeAPI_
