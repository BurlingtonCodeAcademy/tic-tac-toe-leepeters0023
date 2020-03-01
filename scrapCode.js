function winChecker (oLog, xLog) {
  winCombo.forEach(element => {
    let counter = 0;
    element.forEach(innerElement => {
      if (oLog.icludes(innerElement)) {
        counter = counter + 1; 
      }
      else if (counter == 3) {
      gameStatus.textContent = "Player O wins!";
      setTimeout(gameReset(), 2000);
      } 
      else if (xLog.includes(innerElement)) {
        counter = counter + 1; 
      }
      else if (counter == 3) {
        gameStatus.textContent = "Player X wins!";
        setTimeout(gameReset(), 2000);
      }
    })
  }  
} 

for (let i = 0; i < 9; i++) {
  document.getElementById('cell-' + i).textContent = "";
  startButton.disabled = false;