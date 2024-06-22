//1) Define the required variables used to track the state of the game.
/*-------------------------------- Constants --------------------------------*/
const messageEl = document.querySelector ('#message')
const squareEls = document.querySelectorAll('.sqr')
const choice = ['X', 'O']

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
/*---------------------------- Variables (state) ----------------------------*/


let board, winner, tie, turn;

 

  

  
/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.

const resetBtnEl = document.getElementById('resetBtn');
// const boards = document.querySelectorAll('board');
 

/*-------------------------------- Functions --------------------------------*/


const render = () => {
  updateBoard();
  updateMessage();
  
}

function init() {
  console.log('Initializing game state...');
  board = [
    '', '', '', 
    '', '', '',
    '', '', ''
    ];
  turn = 'X';
  winner = false;
  tie = false;
  render();
}


function updateBoard() {
  board.forEach((cell, index) => {
    const square = squareEls[index];
    square.textContent = cell;
  });
}


function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn}'s turn`;
  } else if (!winner && tie) {
    messageEl.textContent = 'It\'s a tie!';
  } else {
    messageEl.textContent = `Congratulations, ${turn} wins!`;
  }
}

function handleClick(event) {
  // console.log(event.target.id)
  const squareIndex = (event.target.id);
  if (board[squareIndex] !== '' || winner) return;
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;
  // console.log(board);
}

function checkForWinner() {
  winningCombos.forEach((combo) => {
    if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
      winner = true;
      // console.log(winner);
    }
  });
}

function checkForTie() {
  if (winner) return;
  if (board.includes('')) return;
  tie = true;
  // console.log(tie);
}

function switchPlayerTurn() {
  if (winner) return;
  turn = turn === 'X' ? 'O' : 'X';
  // console.log(turn);
}

init();
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
  square.addEventListener('click', handleClick)
});
// gameBoardEl.addEventListener('click', handleClick);

resetBtnEl.addEventListener('click', init);


//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
