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
let computerPlayer = false; 
let randNum = NaN;
//let cells = Array.from(document.querySelectorAll("cell"));

// | - - - choose single or multi player - - - |
singlePlayerButton.addEventListener('click', () => {
  multiPlayerButton.disabled = true;
  addPlayerOButton.style.visibility = "visible"
  playerNameO.style.visibility = "visible"
  computerPlayer = true;
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
/* function start() {
 cells.forEach.addEventListener('click', () => {
    placeMark(this);
    winChecker();
  })
}*/
// | - - - game function / unique cell event listeners - - - |
function start() {
  document.getElementById('cell-0').addEventListener('click', () => {
    if (oLog.includes(0) === false && xLog.includes(0) === false) {
    placeMark(0);
    winChecker();
    } else {alert('Space taken')};
  },
    {once : true}
  );
  document.getElementById('cell-1').addEventListener('click', () => {
    if (oLog.includes(1) === false && xLog.includes(1) === false) {
    placeMark(1);
    winChecker();
    } else {alert('Space taken')};
  },
  {once : true}
  ); 
  document.getElementById('cell-2').addEventListener('click', () => {
    if (oLog.includes(2) === false && xLog.includes(2) === false) {
      placeMark(2);
      winChecker();
      } else {alert('Space taken')};
  },
  {once : true}
  );
  document.getElementById('cell-3').addEventListener('click', () => {
    if (oLog.includes(3) === false && xLog.includes(3) === false) {
      placeMark(3);
      winChecker();
      } else {alert('Space taken')};
  },
  {once : true}
  );
  document.getElementById('cell-4').addEventListener('click', () => {
    if (oLog.includes(4) === false && xLog.includes(4) === false) {
      placeMark(4);
      winChecker();
      } else {alert('Space taken')};
  },
  {once : true}
  );
  document.getElementById('cell-5').addEventListener('click', () => {
    if (oLog.includes(4) === false && xLog.includes(4) === false) {
      placeMark(4);
      winChecker();
      } else {alert('Space taken')};
  },
  {once : true}
  );
  document.getElementById('cell-6').addEventListener('click', () => {
    if (oLog.includes(6) === false && xLog.includes(6) === false) {
      placeMark(6);
      winChecker();
      } else {alert('Space taken')};
  },
  {once : true}
  );
  document.getElementById('cell-7').addEventListener('click', () => {
    if (oLog.includes(7) === false && xLog.includes(7) === false) {
      placeMark(7);
      winChecker();
      } else {alert('Space taken')};
  },
  {once : true}
  );
  document.getElementById('cell-8').addEventListener('click', () => {
    if (oLog.includes(9) === false && xLog.includes(9) === false) {
      placeMark(9);
      winChecker();
      } else {alert('Space taken')};
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
  } else if (playerO === false && computerPlayer === false) {
    document.getElementById('cell-' + numCell).textContent = "X";
    xLog.push(numCell);
    xLog.sort();
    moveCount.push(numCell);
    playerO = true; // switch players
    gameStatus.textContent = playerNameO + "'s turn";
  } else if (playerO === false && computerPlayer === true) {
    let randNum = randNumGen(); 
    while (oLog.includes(randNum) === false && xLog.includes(randNum) === false) {
    document.getElementById('cell-' + ranNum).textContent = "0";
    oLog.push(randNum);
    oLog.sort();
    moveCount.push(randNum);
    playerO = false; // switch players
    break; 
    }
    let randNum = randNumGen(); 
  }
}
// | - - - computer player functionality - - - |
// func to return random integer (inclusive on both ends)
function randNumGen() { 
  let randNum =  Math.floor(Math.random() * (0 - 9 + 1)) + min + 1
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

// make array of available cells and choose from that 



