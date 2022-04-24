// Event listeners
let input; // Allows player make a choice with buttons
let button = document.getElementsByClassName("btn");
    for (let i = 0; i < button.length; i++) {
        input = button[i].textContent
        button[i].addEventListener("click", playRound);
    }

let displayDiv = document.getElementById("display-div");
let winDiv = document.getElementById("winning-div");

let rockChoice = document.getElementById("#rock");
let paperChoice = document.getElementById("#paper");
let scissorChoice = document.getElementById("#scissors");


// Variable declarations
let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

let count = 0 // Takes note of the game round.

const myArray = ["rock", "paper", "scissors"];

// Allows the computer make a random choice
function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}


// Check if the game is over
function checkWinner() {
    count ++
    if(count === 5){
        if(playerScore > computerScore){
        winDiv.textContent = "Game over, you win , Please refresh your page";
        }
        else if (computerScore > playerScore){
        winDiv.textContent = "Na wa oooh, Computer wins, Please refresh your page";
        }
        else{
        winDiv.textContent = "It's a general draw, Please refresh your page";
        }
    }
}

// Plays a round
function playRound() {
  playerSelection = input//playerPlay();
  computerSelection = computerPlay();

  // check winner
  checkWinner();

  //Check game conditions
  if (playerSelection === "rock" && computerSelection === "paper") {
    playerScore++;
    display();
    return console.log("Player wins");
  } else if (playerSelection === computerSelection) {
    display();
    return console.log("It is a draw! play again");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    computerScore++;
    display();
    return console.log("Computer wins");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    display();
    return console.log("Player wins");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    display();
    return console.log("Computer wins");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    display();
    return console.log("Player wins");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    display();
    return console.log("Computer wins");
  } else {
    return playerPlay();
  }
}

// Displays the result based on choice
function display(){
  if (playerSelection === "rock" && computerSelection === "paper") {
    displayDiv.textContent = `Player wins. Player score is ${playerScore} and Computer score is ${computerScore}`
  } else if (playerSelection === computerSelection) {
    displayDiv.textContent = `It is a draw. Player score is ${playerScore} and Computer score is ${computerScore}`
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    displayDiv.textContent = `Player wins. Player score is ${playerScore} and Computer score is ${computerScore}`
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    displayDiv.textContent = `Player wins. Player score is ${playerScore} and Computer score is ${computerScore}`
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    displayDiv.textContent = `Computer wins. Player score is ${playerScore} and Computer score is ${computerScore}`
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    displayDiv.textContent = `Computer wins. Player score is ${playerScore} and Computer score is ${computerScore}`
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    displayDiv.textContent = `Computer wins. Player score is ${playerScore} and Computer score is ${computerScore}`
  }
}