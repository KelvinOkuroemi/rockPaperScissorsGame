// let playerSelection;
// let computerSelection;

// let playerScore = 0;
// let computerScore = 0;

// const myArray = ["rock", "paper", "scissors"];

// function game(){

//     checkWinner();
//     for(let i = 0; i < 5; i++){
//         return playGame();
//     }

//     //Check if the winner has reached three.
// }

// function checkWinner(){
//     if(playerScore == 3){
//         alert("Game over, you win");
//     }
//     else if (computerScore == 3){
//         alert("Na wa oooh");
//     }    
// };


// function computerPlay() {
//   return myArray[~~(Math.random() * myArray.length)];
// }

// function playerPlay(){
//     let input = prompt("rock,paper or scissors").toLowerCase();
//     return input;
// }


// function playGame(){
    
//     playerSelection = playerPlay();
//     computerSelection = computerPlay();

//     //Check game conditions
//     if(playerSelection ==="rock" && computerSelection ==="paper"){
//         playerScore++;
//         return "Player wins"
        
//     }
//     else if (playerSelection === computerSelection){
//         return "It is a draw! play again";
//     }
//     else if(playerSelection ==="paper" && computerSelection ==="rock"){
//         computerScore ++;
//         return "Computer wins"
//     }
//     else if(playerSelection==="rock" && computerSelection==="scissors"){
//         playerScore ++;
//         return "Player wins"
//     }

//     else if(playerSelection==="scissors" && computerSelection==="rock"){
//         computerScore ++;
//         return "Computer wins"
//     }
//     else if(playerSelection==="scissors" && computerSelection==="paper"){
//         playerScore ++;
//         return "Player wins"
//     }
//     else if(playerSelection==="paper" && computerSelection==="scissors"){
//         computerScore ++;
//         return "Computer wins"
//     }
//     else{
//         return playerPlay();
//     }

// }
