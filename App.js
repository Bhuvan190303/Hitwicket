import React, { useState } from 'react';
import GameBoard from './Gameboard';
import MoveHistory from './MoveHistory';
import Win from './Win';

const App = () => {
  const [grid, setGrid] = useState(initializeGrid());
  const [currentPlayer, setCurrentPlayer] = useState('A');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState(null);
  function initializeGrid() {
    return [
      ['A-P1', 'A-H1', null, null, null],
      ['A-P2', 'A-H2', null, null, null],
      [null, null, null, null, null],
      [null, null, 'B-P1', 'B-H1', 'B-P2'],
      [null, null, 'B-H2', null, null],
    ];
  }
  function isValidMove(character, startPos, endPos) {

    return true;
  }
  function checkWinner(grid) {
    const playerACharacters = grid.flat().filter(cell => cell && cell.startsWith('A'));
    const playerBCharacters = grid.flat().filter(cell => cell && cell.startsWith('B'));

    if (playerACharacters.length === 0) return 'B';
    if (playerBCharacters.length === 0) return 'A';

    return null;
  }
  const handleSelectMove = (move) => {
    if (winner) return;

    const { startPos, endPos } = move;
    const character = grid[startPos.row][startPos.col];

    if (!character || !character.startsWith(currentPlayer)) {
      alert('Invalid move. It\'s not your turn.');
      return;
    }

    if (!isValidMove(character, startPos, endPos)) {
      alert('Invalid move. Try again.');
      return;
    }

    const newGrid = grid.map(row => [...row]);
    newGrid[endPos.row][endPos.col] = character;
    newGrid[startPos.row][startPos.col] = null;
    setGrid(newGrid);
    const newHistory = [...history, `${character}: ${move.direction}`];
    setHistory(newHistory);

    const newWinner = checkWinner(newGrid);
    if (newWinner) {
      setWinner(newWinner);
      return;
    }

    setCurrentPlayer(currentPlayer === 'A' ? 'B' : 'A');
  };

  return (
    <div className="app">
      <Win winner={winner} />
      <GameBoard 
        grid={grid} 
        currentPlayer={currentPlayer} 
        selectedCharacter={selectedCharacter} 
        onSelectMove={handleSelectMove} 
      />
      <MoveHistory history={history} />
    </div>
  );
};

export default App;

