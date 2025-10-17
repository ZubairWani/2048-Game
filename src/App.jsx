import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Controls from './components/Controls/Controls';
import GameOverlay from './components/GameOverlay/GameOverlay';
import { initializeBoard, move, addNewTile, checkGameEnd } from './logic/gameLogic';
import { KEY_DIRECTIONS } from './constants/constants';
import './assets/global.css';

function App() {
  const [board, setBoard] = useState(() => initializeBoard());
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing'); // 'playing', 'win', 'loss'

  const handleReset = useCallback(() => {
    setBoard(initializeBoard());
    setScore(0);
    setGameState('playing');
  }, []);

  const handleMove = useCallback((direction) => {
    if (gameState !== 'playing') return;

    const { board: newBoard, score: moveScore, moved } = move(board, direction);

    if (moved) {
      const boardWithNewTile = addNewTile(newBoard);
      setBoard(boardWithNewTile);
      setScore(prevScore => prevScore + moveScore);
      
      const newGameState = checkGameEnd(boardWithNewTile);
      if (newGameState) {
        setGameState(newGameState);
      }
    }
  }, [board, gameState]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const direction = KEY_DIRECTIONS[event.key];
      if (direction) {
        event.preventDefault();
        handleMove(direction);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  return (
    <div className="game-container">
      <Header score={score} onReset={handleReset} />
      <main className="main-content">
        <Controls onMove={handleMove} />
        <div className="board-container">
          {gameState !== 'playing' && <GameOverlay gameState={gameState} onReset={handleReset} />}
          <Board board={board} />
        </div>
      </main>
    </div>
  );
}

export default App;
