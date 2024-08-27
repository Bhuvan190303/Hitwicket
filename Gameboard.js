import React from 'react';

const GameBoard = ({ grid, currentPlayer, selectedCharacter, onSelectMove }) => {
  return (
    <div className="game-board">
      <h2>Current Player: {currentPlayer}</h2>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, cellIndex) => (
              <div 
                key={cellIndex} 
                className={`grid-cell ${selectedCharacter === cell ? 'selected' : ''}`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div className="move-options">
          <h3>Selected: {selectedCharacter}</h3>
          <button onClick={() => onSelectMove('F')}>F</button>
          <button onClick={() => onSelectMove('FL')}>FL</button>
          <button onClick={() => onSelectMove('FR')}>FR</button>
          <button onClick={() => onSelectMove('BL')}>BL</button>
          <button onClick={() => onSelectMove('BR')}>BR</button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
