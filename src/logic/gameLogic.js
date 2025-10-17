import { BOARD_SIZE, WIN_TILE } from '../constants/constants';

const createEmptyBoard = () => Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0));

const getRandomEmptyCell = (board) => {
  const emptyCells = [];
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (board[r][c] === 0) {
        emptyCells.push([r, c]);
      }
    }
  }
  if (emptyCells.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};

export const addNewTile = (board) => {
  const newBoard = board.map(row => [...row]);
  const cell = getRandomEmptyCell(newBoard);
  if (cell) {
    newBoard[cell[0]][cell[1]] = Math.random() < 0.9 ? 2 : 4;
  }
  return newBoard;
};

export const initializeBoard = () => {
  let board = createEmptyBoard();
  board = addNewTile(board);
  board = addNewTile(board);
  return board;
};

const slideAndMergeRow = (row) => {
  const filteredRow = row.filter(val => val !== 0);
  let newRow = [];
  let score = 0;
  for (let i = 0; i < filteredRow.length; i++) {
    if (i + 1 < filteredRow.length && filteredRow[i] === filteredRow[i + 1]) {
      const mergedValue = filteredRow[i] * 2;
      newRow.push(mergedValue);
      score += mergedValue;
      i++;
    } else {
      newRow.push(filteredRow[i]);
    }
  }
  while (newRow.length < BOARD_SIZE) {
    newRow.push(0);
  }
  return { newRow, score };
};

const rotateBoard = (board) => {
  const newBoard = createEmptyBoard();
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      newBoard[c][BOARD_SIZE - 1 - r] = board[r][c];
    }
  }
  return newBoard;
};

export const move = (board, direction) => {
  let currentBoard = board.map(row => [...row]);
  let totalScore = 0;
  let rotations = 0;

  if (direction === 'up') { rotations = 3; }  
  if (direction === 'right') { rotations = 2; }
  if (direction === 'down') { rotations = 1; }  

  for (let i = 0; i < rotations; i++) {
    currentBoard = rotateBoard(currentBoard);
  }

  for (let r = 0; r < BOARD_SIZE; r++) {
    const { newRow, score } = slideAndMergeRow(currentBoard[r]);
    totalScore += score;
    currentBoard[r] = newRow;
  }

  for (let i = 0; i < (4 - rotations) % 4; i++) {
    currentBoard = rotateBoard(currentBoard);
  }
  
  const moved = JSON.stringify(board) !== JSON.stringify(currentBoard);
  return { board: currentBoard, score: totalScore, moved };
};

const canMove = (board) => {
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            if (board[r][c] === 0) return true; 
            if (r + 1 < BOARD_SIZE && board[r][c] === board[r+1][c]) return true;
            if (c + 1 < BOARD_SIZE && board[r][c] === board[r][c+1]) return true;
        }
    }
    return false;
}

export const checkGameEnd = (board) => {
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            if (board[r][c] === WIN_TILE) {
                return 'win';
            }
        }
    }
    if (!canMove(board)) {
        return 'loss';
    }
    return null;
}
