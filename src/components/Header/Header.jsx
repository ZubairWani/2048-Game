import React from 'react';
import './Header.css';

const Header = ({ score, onReset }) => {
  return (
    <header className="header">
      <h1 className="title">2048</h1>
      <div className="controls-container">
        <div className="score-box">
          Score
          <span className="score-value">{score}</span>
        </div>
        <button className="reset-button" onClick={onReset}>New Game</button>
      </div>
    </header>
  );
};
export default Header;
