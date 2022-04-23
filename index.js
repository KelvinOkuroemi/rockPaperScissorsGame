// Event listeners
let button = document.getElementsByClassName("btn");
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", playRound);
    }

let displayDiv = document.getElementById("display-div");
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

//Allow the make an input
function playerPlay() {
  let input = prompt("rock,paper or scissors").toLowerCase();
  return input;
}

// Check if the game is over
// function checkWinner() {
//     count ++
//     if(count === 5){
//         if(playerScore > computerScore){
//         alert("Game over, you win");
//         }
//         else if (computerScore > playerScore){
//         alert("Na wa oooh");
//         }
//         else{
//         alert("It's a general draw")
//         }
//     }
// }

// Plays a round
function playRound() {
  playerSelection = playerPlay();
  computerSelection = computerPlay();

  // check winner
  //checkWinner();

  //Check game conditions
  if (playerSelection === "rock" && computerSelection === "paper") {
    playerScore++;
    return console.log("Player wins");
  } else if (playerSelection === computerSelection) {
    return console.log("It is a draw! play again");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    computerScore++;
    return console.log("Computer wins");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return console.log("Player wins");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return console.log("Computer wins");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return console.log("Player wins");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return console.log("Computer wins");
  } else {
    return playerPlay();
  }
}
