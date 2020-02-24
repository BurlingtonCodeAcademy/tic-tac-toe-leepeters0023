let winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 5, 8], [0, 4, 8], [6, 4, 2]];
let xLog = [];
let oLog = [];
let moveCount = []; // for tracking location and number of moves
let gameStatus = document.getElementById('game-status'); // display active player or win / draw
let startButton = document.getElementById('start');
let addPlayerOButton = document.getElementById('player-o-button')
let addPlayerXButton = document.getElementById('player-x-button')
let playerNameO = document.getElementById('player-o-name')
let playerNameX = document.getElementById('player-x-name')
let playerO = false;
let count = 0; // for game timer
let singlePlayer = null; 
let singlePlayerButton = document.getElementById('single-player')
let multiPlayerButton = document.getElementById('multi-player')
let playerNameInput = document.getElementById('add-player-input')
    playerNameInput.style.visibility = "hidden"

// | - - - choose single or multi player - - - |
singlePlayerButton.addEventListener('click', () => {
  multiPlayerButton.disabled = true;
  addPlayerOButton.style.visibility = "visible"
  playerNameO.style.visibility = "visible"
  activateComputer();
})
multiPlayerButton.addEventListener('click', () => {
  singlePlayerButton.disabled = true;
  playerNameInput.style.visibility = "visible"
})
// | - - - add player names - - - |
addPlayerOButton.addEventListener('click', () => {
  playerNameO =  playerNameO.value.trim(); 
  playerNameO.value = " ";
  addPlayerOButton.disabled = true;
})
addPlayerXButton.addEventListener('click', () => {
  playerNameX = playerNameX.value.trim(); 
  playerNameX.value = " ";
  addPlayerXButton.disabled = true;
})
// | - - - to start the game and timer - - - |
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  start();
  timer();
}); 
// | - - - game function / unique cell event listeners - - - |
function start() {
  document.getElementById('cell-0').addEventListener('click', () => {
    placeMark(0);
    winChecker();
  },
    {once : true}
  );
  document.getElementById('cell-1').addEventListener('click', () => {
    placeMark(1);
    winChecker();
  },
  {once : true}
  ); 
  document.getElementById('cell-2').addEventListener('click', () => {
    placeMark(2);
    winChecker();
  },
  {once : true}
  );
  document.getElementById('cell-3').addEventListener('click', () => {
    placeMark(3);
    winChecker();
  },
  {once : true}
  );
  document.getElementById('cell-4').addEventListener('click', () => {
    placeMark(4);
    winChecker();
  },
  {once : true}
  );
  document.getElementById('cell-5').addEventListener('click', () => {
    placeMark(5);
    winChecker();
  },
  {once : true}
  );
  document.getElementById('cell-6').addEventListener('click', () => {
    placeMark(6);
    winChecker();
  },
  {once : true}
  );
  document.getElementById('cell-7').addEventListener('click', () => {
    placeMark(7);
    winChecker();
  },
  {once : true}
  );
  document.getElementById('cell-8').addEventListener('click', () => {
    placeMark(8);
    winChecker();
  },
  {once : true}
  );
}
// | - - - win check functions - - - |
function winChecker () {
  for (let subCombo of winCombo) {
    let xCount = 0; // count of 3 signifies win 
    let oCount = 0;
    for (let num of subCombo) {
      if (xLog.includes(num)) {
        xCount = xCount + 1;
      } else if (oLog.includes(num)){
        oCount = oCount + 1; 
      }
    }
    if (xCount == 3) {
      gameStatus.textContent = playerNameX + " wins!";
      showWin(xLog);
      setTimeout(() => {location.reload(); }, 1500)
    } else if (oCount == 3) {
      gameStatus.textContent = playerNameO+ " wins!";
      setTimeout(() => {location.reload(); }, 1500);
      showWin(oLog);
    } else if (moveCount.length === 9) {
      gameStatus.textContent = "It's a draw";
      setTimeout(() => {location.reload(); }, 1500);
    }
  }
}
function showWin (winningArray) {
  for (let i = 0; i < winningArray.length; i++) {
    document.getElementById('cell-' + winningArray[i]).style.background = "red"
  }
}
// | - - - place mark on board & change player - - - |
function placeMark(numCell) {
  if (playerO) {
    document.getElementById('cell-' + numCell).textContent = "0";
    oLog.push(numCell);
    oLog.sort();
    moveCount.push(numCell);
    playerO = false; // switch players
    gameStatus.textContent = playerNameX + "'s turn";
  }
  else if (playerO === false) {
    document.getElementById('cell-' + numCell).textContent = "X";
    xLog.push(numCell);
    xLog.sort();
    moveCount.push(numCell);
    playerO = true; // switch players
    gameStatus.textContent = playerNameO + "'s turn";
  }
}
// | - - - computer player functionality - - - |
function activateComputer() {
  randNumGen(0, 9);
}
// func to return random integer (inclusive on both ends)
function randNumGen(min, max) { 
  let randNum =  Math.floor(Math.random() * (max - min + 1)) + min + 1
  return randNum;
}
// | - - - game timer - - - |
// displays unformatted incrementing count every second
function timer() {
  setInterval(() => {countUp();}, 1000);
}
function countUp() {
  count = count + 1;
  document.getElementById('timer').textContent = count + " seconds have elapsed in play"
}




