import React from 'react';
import './GameOverlay.css';

const GameOverlay = ({ gameState, onReset }) => {
  const message = gameState === 'win' ? 'You Win!' : 'Game Over!';
  return (
    <div className="game-overlay">
      <div className="overlay-content">
        <p>{message}</p>
        <button onClick={onReset}>Try Again</button>
      </div>
    </div>
  );
};
export default GameOverlay;
