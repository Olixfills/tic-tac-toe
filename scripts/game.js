function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        backdrop.style.display = 'block';
        requestPlayerName.style.display = 'block';

        return;
    }

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
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
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
        retrn - 1;
    }


    return 0;
}

function endGame(winnerId) {

    const winnerName = players[winnerId - 1].name;
    gameOverElement.style.display = 'block';

    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;

}