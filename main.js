let winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 5, 8], [0, 4, 8], [6, 4, 2]];
let xLog = [];
let oLog = [];
let moveCount = []; 
let gameStatus = document.getElementById('game-status');
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
    
// | - - - add player names - - - |
singlePlayerButton.addEventListener('click', () => {
  multiPlayerButton.disabled = true;
  //random num generator
})
multiPlayerButton.addEventListener('click', () => {
  singlePlayerButton.disabled = true;
  playerNameInput.style.visibility = "visible"
})

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
      gameStatus.textContent = playerNameX + " wins!";
      showWin(xLog);
      setTimeout(() => {location.reload(); }, 1000)
    } else if (oCount == 3) {
      gameStatus.textContent = playerNameO+ " wins!";
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
// | - - - place mark on board & change player - - - |
function placeMark(numCell) {
  if (playerO) {
    document.getElementById('cell-' + numCell).textContent = "0";
    oLog.push(numCell);
    oLog.sort();
    moveCount.push(numCell);
    playerO = false;
    gameStatus.textContent = "Player X's turn";
  }
  else if (playerO === false) {
    document.getElementById('cell-' + numCell).textContent = "X";
    xLog.push(numCell);
    xLog.sort();
    moveCount.push(numCell);
    playerO = true;
    gameStatus.textContent = "Player O's turn";
  }
}
// | - - - game timer - - - |
function timer() {
  setInterval(() => {countUp();}, 1000);
}
function countUp() {
  count = count + 1;
  document.getElementById('timer').textContent = count + " seconds have elapsed in play"
}




