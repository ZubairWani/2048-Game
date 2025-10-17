import React from 'react';
import './Tile.css';

const Tile = ({ value }) => {
  const className = `tile tile-${value}`;
  return (
    <div className={className}>
      {value > 0 ? value : ''}
    </div>
  );
};
export default Tile;
