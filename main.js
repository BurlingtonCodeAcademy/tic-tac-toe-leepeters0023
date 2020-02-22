let winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 5, 8], [0, 4, 8], [6, 4, 2]];
let xLog = [];
let oLog = [];
let gameStatus = document.getElementById('game-status');
let startButton = document.getElementById('start');
let playerO = false;
let moveCount = []
//let board = Array.from(document.getElementsByClassName('board')) -- > for later

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  start();
  setTimeout(() => {
    counter();
  }, 1000);
});

//let eventListeners = () => board.forEach(childNodes => childNodes.addEventListener('click', placeMark) --> for later

function start() {
  document.getElementById('cell-0').addEventListener('click', () => {
    placeMark(0);
    once = true;
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-1').addEventListener('click', () => {
    placeMark(1);
    once = true; 
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-2').addEventListener('click', () => {
    placeMark(2);
    once = true; 
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-3').addEventListener('click', () => {
    placeMark(3);
    once = true; 
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-4').addEventListener('click', () => {
    placeMark(4);
    once = true; 
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-5').addEventListener('click', () => {
    placeMark(5);
    once = true; 
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-6').addEventListener('click', () => {
    placeMark(6);
    once = true; 
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-7').addEventListener('click', () => {
    placeMark(7);
    once = true; 
    winChecker(oLog, xLog);
  });
  document.getElementById('cell-8').addEventListener('click', () => {
    placeMark(8);
    once = true; 
    winChecker(oLog, xLog);
  });
}

function gameReset() {
  for (let i = 0; i < 9; i++) {
    document.getElementById('cell-' + i).textContent = "";
    startButton.disabled = false;
  }
}

function winChecker (xLog, oLog) {
  for (let i = 0; i < winCombo.length; i++) {
    let winTest = winCombo[i];
    console.log(i);
    console.log(winTest);
    if (xLog.includes(winTest)) {
      gameStatus.textContent = "Player X wins!";
      setTimeout(gameReset(), 2000);
    }
    else if (oLog.includes(winTest)) {
      gameStatus.textContent = "Player O wins!";
      setTimeout(gameReset(), 2000);
    } else if (moveCount.length === 9) {
      gameStatus.textContent = "It's a draw";
      setTimeout(gameReset(), 2000);
    }
  }
}

function placeMark(numCell) {
  if (playerO) {
    document.getElementById('cell-' + numCell).textContent = "0";
    oLog.push(numCell);
    oLog.sort();
    moveCount.push(numCell);
    console.log(oLog)
    playerO = false;
    gameStatus.textContent = "Player X's turn";
    document.getElementById('cell-' + numCell).removeEventListener('click', () => {});
  }
  else if (playerO === false) {
    document.getElementById('cell-' + numCell).textContent = "X";
    xLog.push(numCell);
    console.log(xLog)
    xLog.sort();
    moveCount.push(numCell);
    playerO = true;
    gameStatus.textContent = "Player O's turn";
    document.getElementById('cell-' + numCell).removeEventListener('click', () => {});
  }
}

function counter () {
  for (let i = 0; i < 3000; i++) {
    let display = i.toString;
    document.getElementById('timer').textContent = display; 
  }
}


// setInterval() // fires every specified number of milliseconds so may be preferable for a timer 