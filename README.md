🎮 React 2048 Game
A modern implementation of the classic 2048 game, built with React and Vite. This project was developed as a technical assessment to demonstrate core principles of modern web development, including state management, component-based architecture, and functional programming.

🚀 Live Demo
🎮 Play the Game Here! 🎮
https://two048-game-4wjg.onrender.com/

🎯 Gameplay
The objective of the game is to combine numbered tiles on a 4×4 grid to create a tile with the number 2048.
How to Play:

🎹 Use the Arrow Keys (↑, ↓, ←, →) on your keyboard to move the tiles
🔢 When two tiles with the same number touch, they merge into one tile with their sum
✨ After each move, a new tile (either a 2 or a 4) will appear in a random empty spot
🏁 The game ends when the board is full and no more moves are possible
🔄 You can start a new game at any time by clicking the New Game button


✅ Features Checklist
This project successfully implements all the core requirements outlined in the assessment:
🎲 Board & Initialization

✅ Default 4×4 board
✅ Starts with two random tiles (values of 2 or 4)

🕹️ Game Mechanics

✅ Player can slide tiles in all four directions using keyboard controls
✅ Tiles with the same number correctly merge and sum up
✅ A new tile (2 or 4) appears randomly after each valid move
✅ Game ends when no more moves are possible

💻 Technical Specifications

✅ Modular & Reusable Code: Achieved through a React component-based architecture
✅ Functional Programming Principles: Built with React's functional components and hooks, with game logic separated into pure functions
✅ Dynamic GUI Updates: UI reflects application state automatically and efficiently on every state change
✅ Score Tracking: Score is updated and displayed based on the value of merged tiles
✅ Game Restart: "New Game" button allows users to reset the game state from the GUI


🛠️ Tech Stack

⚛️ React - UI library for building interactive interfaces
⚡ Vite - Next-generation frontend tooling for fast development
🎨 CSS3 - Modern styling and animations
📦 JavaScript (ES6+) - Core game logic and functionality


🚀 Getting Started
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository

git clone <your-repo-url>

Install dependencies

npm install

Run the development server

npm run dev

Open your browser
Navigate to http://localhost:5173 to play the game!