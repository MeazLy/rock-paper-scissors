

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
let tieCount = 0;

const buttons = document.querySelectorAll("button")


const onClick = (event) => {
    let thisChoice = (event.srcElement.id)
    let computerSelection = computerPlay()
    playGame(thisChoice, computerSelection)
}
buttons.forEach((button) => {
    button.addEventListener("click", onClick)
  
})


function playGame(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase()
    
    if(userWinCount >= 5 || computerWinCount >= 5){
        document.querySelector(".finalResult").innerHTML = "Game over!"
    }
    else if(playerSelection === computerSelection){
        document.querySelector(".tiedCount").innerHTML = "Tied count is " + (tieCount +=1)
        document.querySelector(".gameResult").innerHTML = `You both picked ${playerSelection}, it's a tie!`
    }else if(
        playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"
        ){
            document.querySelector(".userWins").innerHTML = "Your score is " + (userWinCount += 1)
            document.querySelector(".gameResult").innerHTML = playerSelection + " beats " + computerSelection + ". You win!"
      
        }else if(
            playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock"
            ){
                document.querySelector(".computerWins").innerHTML = "Computers score is " + (computerWinCount += 1)
             
                document.querySelector(".gameResult").innerHTML = `${computerSelection} beats ${playerSelection}, you lose!`
                
            }else{
                console.log("Invalid selection")
            }
        }

        
        
        

// function fiveRounds(){
//     for(let i = 0; i < 5; i++){
//         playGame()
//         console.log(userName + "s " + `score is ${userWinCount}` + " to " + `${computerWinCount}`)
//     }
// }
// fiveRounds()