import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((value, colIndex) => (
            <Tile key={`${rowIndex}-${colIndex}`} value={value} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
export default Board;
