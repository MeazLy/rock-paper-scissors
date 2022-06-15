

function computerPlay(){
    let randomChoice = Math.floor(Math.random() * 3)
    switch(randomChoice){
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
        default:
            console.log("Failed")    
        
        }
    
   
}
let userWinCount = 0;
let computerWinCount = 0;
let userName = prompt("What is your name?")


function playGame(){
    let playerSelection = prompt("What is your choice?").toLowerCase()
    let computerSelection = computerPlay()
    if(playerSelection === computerSelection){
        console.log("You tied!")
    }else if(
        playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"
    ){
        userWinCount += 1
        console.log(playerSelection + " beats " + computerSelection + ". You win!")
    }else if(
        playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
    ){
        computerWinCount += 1
        console.log(computerSelection + " beats " + playerSelection + ". You lost!")

}else{
    console.log("Invalid selection")
}
}
function fiveRounds(){
    for(let i = 0; i < 5; i++){
        playGame()
        console.log(userName + "s " + `score is ${userWinCount}` + " to " + `${computerWinCount}`)
    }
}
fiveRounds()