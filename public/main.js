let winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 5, 8], [0, 4, 8], [6, 4, 2]];
let xLog = [];
let oLog = [];
let boardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // listing available spaces for AI 
let moveCount = []; // for tracking location and number of moves
let playerO = false;
let count = 0; // for game timer
let computerPlayer = null; 
let randNum = NaN;
// | - - - DOM vars - - - |
let gameStatus = document.getElementById('game-status'); // display active player or win / draw
let startButton = document.getElementById('start');
    startButton.disabled = true; 
let addPlayerOButton = document.getElementById('player-o-button')
    addPlayerOButton.style.visibility = "hidden"
let addPlayerXButton = document.getElementById('player-x-button')
    addPlayerXButton.style.visibility = "hidden"
let playerNameO = document.getElementById('player-o-name')
    playerNameO.style.visibility = "hidden"
let playerNameX = document.getElementById('player-x-name')
    playerNameX.style.visibility = "hidden" 
let singlePlayerButton = document.getElementById('single-player')
let multiPlayerButton = document.getElementById('multi-player')

// | - - - choose single or multi player - - - |
singlePlayerButton.addEventListener('click', () => {
  addPlayerOButton.style.visibility = "visible"
  playerNameO.style.visibility = "visible"
  computerPlayer = true;
  startButton.disabled = false; 
  playerNameX.textContent = "computer";
})
multiPlayerButton.addEventListener('click', () => {
  singlePlayerButton.style.visibility = "hidden"
  addPlayerOButton.style.visibility = "visible"
  addPlayerXButton.style.visibility = "visible"
  playerNameO.style.visibility = "visible"
  playerNameX.style.visibility = "visible"
  startButton.disabled = false; 
})
// | - - - add player names - - - |
addPlayerOButton.addEventListener('click', () => {
  playerNameO = playerNameO.value.trim(); 
  playerNameO.textContent = " ";
  addPlayerOButton.disabled = true;
})
addPlayerXButton.addEventListener('click', () => {
  playerNameX = playerNameX.value.trim(); 
  playerNameX.textContent = " ";
  addPlayerXButton.disabled = true;
})
// | - - - to start the game and timer - - - |
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  gameStatus.textContent = playerNameO + "'s turn";
  start();
  timer();
}); 

// | - - - game function / unique cell event listeners - - - |
function start() {
  document.getElementById('cell-0').addEventListener('click', () => {
    if (oLog.includes(0) === false && xLog.includes(0) === false) {
    placeMark(0);
    winChecker();
    } else {alert('Space taken')};
  });
  document.getElementById('cell-1').addEventListener('click', () => {
    if (oLog.includes(1) === false && xLog.includes(1) === false) {
    placeMark(1);
    winChecker();
    } else {alert('Space taken')};
  }); 
  document.getElementById('cell-2').addEventListener('click', () => {
    if (oLog.includes(2) === false && xLog.includes(2) === false) {
      placeMark(2);
      winChecker();
      } else {alert('Space taken')};
  });
  document.getElementById('cell-3').addEventListener('click', () => {
    if (oLog.includes(3) === false && xLog.includes(3) === false) {
      placeMark(3);
      winChecker();
      } else {alert('Space taken')};
  });
  document.getElementById('cell-4').addEventListener('click', () => {
    if (oLog.includes(4) === false && xLog.includes(4) === false) {
      placeMark(4);
      winChecker();
      } else {alert('Space taken')};
  });
  document.getElementById('cell-5').addEventListener('click', () => {
    if (oLog.includes(5) === false && xLog.includes(5) === false) {
      placeMark(5);
      winChecker();
      } else {alert('Space taken')};
  });
  document.getElementById('cell-6').addEventListener('click', () => {
    if (oLog.includes(6) === false && xLog.includes(6) === false) {
      placeMark(6);
      winChecker();
      } else {alert('Space taken')};
  });
  document.getElementById('cell-7').addEventListener('click', () => {
    if (oLog.includes(7) === false && xLog.includes(7) === false) {
      placeMark(7);
      winChecker();
      } else {alert('Space taken')};
  });
  document.getElementById('cell-8').addEventListener('click', () => {
    if (oLog.includes(8) === false && xLog.includes(8) === false) {
      placeMark(8);
      winChecker();
      } else {alert('Space taken')};
  });
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
      showWin(subCombo);
      setTimeout(() => {location.reload(); }, 1500)
    } else if (oCount == 3) {
      gameStatus.textContent = playerNameO + " wins!";
      setTimeout(() => {location.reload(); }, 1500);
      showWin(subCombo);
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
    boardArray.splice(boardArray[numCell], 1) 
    playerO = false; // switch players
    gameStatus.textContent = playerNameX + "'s turn";
  } else if (playerO === false && computerPlayer === false) {
    document.getElementById('cell-' + numCell).textContent = "X";
    xLog.push(numCell);
    xLog.sort();
    moveCount.push(numCell);
    playerO = true; // switch players
    gameStatus.textContent = playerNameO + "'s turn"; 
  } else if (playerO === false && computerPlayer === true) {
    randNum = randNumGen(boardArray.length); 
    console.log(randNum)
    setTimeout(() => {
      document.getElementById('cell-' + boardArray[randNum]).textContent = "X"; 
    }, 500);
    xLog.push(boardArray[randNum]);
    xLog.sort(); 
    console.log(xLog)
    winChecker();
    moveCount.push(boardArray[randNum]); 
    boardArray.splice(boardArray[randNum], 1) 
    playerO = true; 
    gameStatus.textContent = playerNameO + "'s turn";
    } 
  }

// func to return random integer (inclusive on both ends)
function randNumGen(max) { 
  let randNum =  Math.floor(Math.random() * max)
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





