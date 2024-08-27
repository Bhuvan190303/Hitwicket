import React from 'react';

const WinningMessage = ({ winner }) => {
  return winner ? (
    <div className="winning-message">
      <h2>{`Player ${winner} wins!`}</h2>
    </div>
  ) : null;
};

export default WinningMessage;
