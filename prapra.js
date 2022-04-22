// Take Name from the user 

// Show the user name and ask "Can you beat me in a game of rock paper scissors, Let me see your skills ans who the true master is"
//     if player chooses No, say "I thought as much"
//     if player chooses Yes
//         Animate two buttons and say choose your destiny

// Play Game
//     Grab buttons with DOM.
//     Create counter variable to check rounds
//         if counter variable is 5 show the results
//         if player is winner or computer is winner show "The true master is...."
//     Ouput results based on buttons choice
//         Show the choice : You chose this while computer chose this
//         Add one to winner
//         Update game round 

// let playerSelection;
// let computerSelection;

// let playerScore = 0;
// let computerScore = 0;

// const myArray = ["rock", "paper", "scissors"];

// function game(){
//     checkWinner();
//     return playGame();
//     // for(let i = 0; i < 5; i++){    
//     // }   
// }

// //Check if the winner has reached three.
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
