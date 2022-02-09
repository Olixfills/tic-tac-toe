// Access to all HTML elements happen in here, including execution of all code

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

const players = [{
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const configErrorsOutput = document.getElementById('config-errors');
const requestPlayerName = document.getElementById('player-name-error');
const gameFieldElements = document.querySelectorAll('#game-board li');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');


//Buttons
const editPlayer1NameBtn = document.getElementById('edit-player1-name-btn');
const editPlayer2NameBtn = document.getElementById('edit-player2-name-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const startNewGameBtn = document.getElementById('start-game-btn');
const newGameSection = document.getElementById('active-game');
const closePlayerNameReq = document.getElementById('request-player-name-btn');



//Executors and listeners

editPlayer1NameBtn.addEventListener('click', openPlayerConfig);
editPlayer2NameBtn.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);
closePlayerNameReq.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);


for (const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', selectGameField);
}

