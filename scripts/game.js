
function resetGame() {
    activePlayer = 0;
    currentRound =  1;
    gameOverElement.firstElementChild.innerHTML = '<h3>You won <span id="winner-name">Player Name</span></h3>';
    gameOverElement.style.display = 'none';
    gameIsOver = false;


    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            gameFieldElements[gameBoardIndex].textContent = '';
            gameFieldElements[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;

        }
    }

}

function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        backdrop.style.display = 'block';
        requestPlayerName.style.display = 'block';

        return;
    }

    resetGame();

    activePlayerName.textContent = players[activePlayer].name;

    newGameSection.style.display = 'block';
    // startNewGameBtn.textContent = 'Reset Game';

}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;

}


function selectGameField(event) {
    const pickedField = event.target;
    if (gameIsOver){
        return;
    }
    if (pickedField.textContent !== '') {
        alert('Please select an empty field');
        return;
    }

    pickedField.textContent = players[activePlayer].symbol;
    pickedField.classList.add('disabled');

    const selectedCol = pickedField.dataset.col - 1;
    const selectedRow = pickedField.dataset.row - 1;

    gameData[selectedRow][selectedCol] = activePlayer + 1;
    // console.log(gameData);


    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId);

    }
    
    currentRound++;
    switchPlayer();




}



function checkForGameOver() {
    //Check for equality in rows
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }
    }

    //Check for equality in cols
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
          ) {
            return gameData[0][i];
          }
    }

    //check for equality in diagonal top left to bottom right

    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    //check for equality in diagonal bottom left to top right

    if (gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    }


    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = `${winnerName} wins`;

    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a Draw!!';

    }

}