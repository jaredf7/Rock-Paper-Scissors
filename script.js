// console.log("Hello World!");
let playerScore = 0;
let computerScore = 0;

const rockString = "ROCK";
const paperString = "PAPER";
const scissorsString = "SCISSORS";

function getComputerChoice() {
  let selectedChoice;
  const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            selectedChoice = rockString;
            break;
        case 1:
            selectedChoice = paperString;
            break;
        case 2:
            selectedChoice = scissorsString;
            break;
    
        default:
            break;
            return selectedChoice;
        }
    console.log("C: " + selectedChoice);
    return selectedChoice;
}

function getHumanChoice() {
    let answer = prompt("Please enter your choice: Rock, Paper, Scissors");
    if (answer !== "") {
        if(answer.toLowerCase() == rockString.toLowerCase())
            answer = rockString;
        else if(answer.toLowerCase() == paperString.toLowerCase()){
            answer = paperString;
        }
        else if(answer.toLowerCase() == scissorsString.toLowerCase()){
            answer = scissorsString;
        } else {
            alert("Invalid input!");
        }
    } else {
        console.log("STRING EMPTY");
    }
    console.log("P: " + answer);
    return answer;
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice == computerChoice) {
        console.log("Draw") 
    } else if (playerChoice == rockString) {
        if(computerChoice == paperString) {
            console.log("Computer wins!");
            computerScore++;
        } else {
            console.log("Player wins!");
            playerScore++;
        }
    } else if(playerChoice == paperString) {
        if(computerChoice == scissorsString) {
            console.log("Computer wins!");
            computerScore++;
        } else {
            console.log("Player wins!");
            playerScore++;
        }
    } else if(playerChoice == scissorsString) {
        if(computerChoice == rockString) {
            console.log("Computer wins!");
            computerScore++;
        } else {
            console.log("Player wins!");
            playerScore++;
        }
}   }

function playGame(){
    for(let i = 1; i < 6; i++) {
        let playerSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    alert("Results: \nPlayer: " + playerScore + "\nComputer: " + computerScore);
}

playGame();
