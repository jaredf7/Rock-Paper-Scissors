const ROCKSTRING = "ROCK";
const PAPERSTRING = "PAPER";
const SCISSORSTRING = "SCISSORS";

const ROCKICON = "images/andrsrxn--hand-punch.png";
const PAPERICON = "images/andrsrxn--hand.png";
const SCISSORSICON = "images/andrsrxn--hand-peace.png";
const HANDDEFAULT = "images/andrsrxn--hand-grabbing.png";

let playerScoreText = document.querySelector("#playerScore");
let computerScoreText = document.querySelector("#computerScore");

let roundResultText = document.querySelector("#round-result");

let pImg = document.getElementById("img-p");
let cImg = document.getElementById("img-c");

let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;

let playerSelection = "";

document.querySelector("#rock-button").addEventListener("click", (event) => {
    event.preventDefault();
    setPlayerChoice(ROCKSTRING);
    displayPlayerChoice(ROCKICON);
    playGame();
});


document.querySelector("#paper-button").addEventListener("click", (event) => {
    event.preventDefault();
    setPlayerChoice(PAPERSTRING);
    displayPlayerChoice(PAPERICON);
    playGame();
});

document.querySelector("#scissors-button").addEventListener("click", (event) => {
    event.preventDefault();
    setPlayerChoice(SCISSORSTRING);
    displayPlayerChoice(SCISSORSICON);
    playGame();
});

document.querySelector("#btn-reset").addEventListener("click", (event) => {
    event.preventDefault();
    resetGame();
})

let selectedChoice;
function getComputerChoice() {
    let computerRand = Math.floor(Math.random() * 3);
    switch (computerRand) {
        case 0:
            selectedChoice = ROCKSTRING;
            displayComputerChoice(ROCKICON);
            break;
        case 1:
            selectedChoice = PAPERSTRING;
            displayComputerChoice(PAPERICON);
            break;
        case 2:
            selectedChoice = SCISSORSTRING;
            displayComputerChoice(SCISSORSICON);
            break;
        default:
            break;
    }
    console.log("C: " + selectedChoice);
}

function setPlayerChoice(answer) {
    playerSelection = answer;
}


function playRound() {
    getComputerChoice();
    if (playerSelection == selectedChoice) {
    } else if (playerSelection == ROCKSTRING) {
        if (selectedChoice == PAPERSTRING) {
            computerScore++;
            updateScore();
            // console.log("Computer wins!\n");
        } else {
            playerScore++;
            updateScore();
            // console.log("Player wins!\n");
        }
    } else if (playerSelection == PAPERSTRING) {
        if (selectedChoice == SCISSORSTRING) {
            computerScore++;
            updateScore();
            // console.log("Computer wins!\n");
        } else {
            playerScore++;
            updateScore();
            // console.log("Player wins!\n");
        }
    } else if (playerSelection == SCISSORSTRING) {
        if (selectedChoice == ROCKSTRING
        ) {
            computerScore++;
            updateScore();
            // console.log("Computer wins!\n");
        } else {
            playerScore++;
            updateScore();
            // console.log("Player wins!\n");
        }
    }
}

function updateScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function displayPlayerChoice(pImgSrc) {
    pImg.src = pImgSrc;
    pImg.alt = "player choice";
    pImg.width = '160';
}

function displayComputerChoice(cImgSrc) {
    cImg.src = cImgSrc;
    cImg.alt = "computer choice";
    cImg.width = '160';
}

function playGame() {
    playRound();
    if(playerScore >= 5) {
        displayResults("YOU");
    } else if (computerScore >= 5) {
        displayResults("Computer");
    }
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    roundResultText.textContent = "";
    pImg.src = HANDDEFAULT;
    cImg.src = HANDDEFAULT;
    disablePlayButtons(false);
}

function displayResults(winner) {
    roundResultText.textContent = "THE WINNER IS " + winner;
    disablePlayButtons(true);
}

function disablePlayButtons(btnState) {
    document.querySelector("#rock-button").disabled = btnState;
    document.querySelector("#paper-button").disabled = btnState;
    document.querySelector("#scissors-button").disabled = btnState;
}

//playGame();
