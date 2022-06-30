// Create random input for computer for rock paper or scissors 
let computerDecisions = ["Rock","Paper","Scissors"]


function computerPlay(){
    const computerDecision = computerDecisions[Math.floor(Math.random() * computerDecisions.length)];
    return computerDecision.toLowerCase()


}
// let playerSelection = prompt("What is your choice?").toLowerCase()
// let computerSelection = computerPlay()
let computerWinCount = 0
let userWinCount = 0
function playGame(){
    let computerSelection = computerPlay()
    let playerSelection = prompt("What is your choice?").toLowerCase();
    if(playerSelection === computerSelection.toLowerCase()){
        console.log("You tied!")
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Paper covers rock, you lose!")
        computerWinCount = computerWinCount + 1
        console.log("Computer has won " + computerWinCount + " games!")
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Rock crushes scissors, you lose!")
        computerWinCount = computerWinCount + 1
        console.log("Computer has won " + computerWinCount + " games!")
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Scissors cut paper, you lose!")
        computerWinCount = computerWinCount + 1
        console.log("Computer has won " + computerWinCount + " games!")
    }else if(playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper"){
        console.log("Please enter a valid choice")
    }
    
    else{
        console.log(playerSelection + " beats " + computerSelection + "! You win")
        userWinCount = userWinCount + 1
        console.log("User has won " + userWinCount + " games!")
    }
    
}
// playGame(playerSelection,computerSelection)

function game(){
    for(let i = 0; i < 5; i++){
        // playGame()
        if(i >= 5){
            console.log("Game over")
        }else{
            playGame()
        }
    }
    
}
game()
console.log("Game over!")