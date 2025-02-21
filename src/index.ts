let rockButton = document.getElementById("rock") as HTMLButtonElement
let paperButton = document.getElementById("paper") as HTMLButtonElement
let scissorsButton = document.getElementById("scissors") as HTMLButtonElement
let resultDiv = document.getElementById('result') as HTMLDivElement

// computer choices
const choices = ['rock' , 'paper' , 'scissors']

function getComputerChoice ():string{
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex] 
}

function getResult (playerChoice:string , computerChoice:string):string{
    if(playerChoice === computerChoice){
        return "a tie"
    }
    if(
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ){
        return "You win !!!! 🎉"
    }
    return "You loose!"
}

function playGame (playerChoice:string):void {
    const computerChoice = getComputerChoice()
    const result = getResult(playerChoice , computerChoice)
    resultDiv.textContent = `You chose ${playerChoice} : computer chose ${computerChoice} . ${result}`
}

rockButton.addEventListener("click",()=>{playGame('rock')})
paperButton.addEventListener('click' , ()=>{playGame('paper')})
scissorsButton.addEventListener('click' , ()=>{playGame('scissors')})