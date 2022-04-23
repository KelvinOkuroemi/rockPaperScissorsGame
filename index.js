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