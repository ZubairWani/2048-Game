import React from 'react';
import './Controls.css';

const Controls = ({ onMove }) => {
  return (
    <div className="gui-controls">
      <button onClick={() => onMove('up')}>↑</button>
      <div>
        <button onClick={() => onMove('left')}>←</button>
        <button onClick={() => onMove('down')}>↓</button>
        <button onClick={() => onMove('right')}>→</button>
      </div>
    </div>
  );
};
export default Controls;
