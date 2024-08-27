const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let gameState = {
  board: Array(5).fill(null).map(() => Array(5).fill(null)),
  currentPlayer: 'A', // Start with player A
  players: {
    A: [
      { name: 'P1', type: 'Pawn', position: { x: 0, y: 0 } },
      { name: 'P2', type: 'Pawn', position: { x: 0, y: 1 } },
      { name: 'H1', type: 'Hero1', position: { x: 0, y: 2 } },
      { name: 'H2', type: 'Hero2', position: { x: 0, y: 3 } },
      { name: 'P3', type: 'Pawn', position: { x: 0, y: 4 } }
    ],
    B: [
      { name: 'P1', type: 'Pawn', position: { x: 4, y: 0 } },
      { name: 'P2', type: 'Pawn', position: { x: 4, y: 1 } },
      { name: 'H1', type: 'Hero1', position: { x: 4, y: 2 } },
      { name: 'H2', type: 'Hero2', position: { x: 4, y: 3 } },
      { name: 'P3', type: 'Pawn', position: { x: 4, y: 4 } }
    ]
  }
};
gameState.players.A.forEach((character) => {
  gameState.board[character.position.x][character.position.y] = 'A-' + character.name;
});
