let winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 5, 8], [0, 4, 8], [6, 4, 2]];
let xLog = [];
let oLog = [];
let gameStatus = document.getElementById('game-status');
let startButton = document.getElementById('start');
let playerO = false;
let moveCount = [];
let count = 0;


startButton.addEventListener('click', () => {
  startButton.disabled = true;
  start();
  timer();
}); 

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

function winChecker () {
  for (let subCombo of winCombo) {
    let xCount = 0;
    let oCount = 0;
    for (let num of subCombo) {
      if (xLog.includes(num)) {
        xCount = xCount + 1;
      } else if (oLog.includes(num)){
        oCount = oCount + 1; 
      }
    }
    if (xCount == 3) {
      gameStatus.textContent = "Player X wins!";
      showWin(xLog);
      setTimeout(() => {location.reload(); }, 1000)
    } else if (oCount == 3) {
      gameStatus.textContent = "Player O wins!";
      setTimeout(() => {location.reload(); }, 1000);
      showWin(oLog);
    } else if (moveCount.length === 9) {
      gameStatus.textContent = "It's a draw";
      setTimeout(() => {location.reload(); }, 1000);
    }
  }
}

function showWin (winningArray) {
  for (let i = 0; i < winningArray.length; i++) {
    document.getElementById('cell-' + winningArray[i]).style.background = "red"
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
  }
  else if (playerO === false) {
    document.getElementById('cell-' + numCell).textContent = "X";
    xLog.push(numCell);
    console.log(xLog)
    xLog.sort();
    moveCount.push(numCell);
    playerO = true;
    gameStatus.textContent = "Player O's turn";
  }
}

function timer() {
  setInterval(() => {countUp();}, 1000);
}

function countUp() {
  count = count + 1;
  document.getElementById('timer').textContent = count + " seconds have elapsed in play"
}

/*function counter() {
  while (count <= 59) {
  count = count + 1;
  document.getElementById('timer').textContent = count + " seconds have elapsed in play"
  }
}



//let board = Array.from(document.getElementsByClassName('board')) -- > for later
//let eventListeners = () => board.forEach(childNodes => childNodes.addEventListener('click', placeMark) --> for later */