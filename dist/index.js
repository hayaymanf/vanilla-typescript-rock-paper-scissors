"use strict";
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let resultDiv = document.getElementById('result');
// computer choices
const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "a tie";
    }
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        return "You win !!!! 🎉";
    }
    return "You loose!";
}
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    resultDiv.textContent = `You chose ${playerChoice} : computer chose ${computerChoice} . ${result}`;
}
rockButton.addEventListener("click", () => { playGame('rock'); });
paperButton.addEventListener('click', () => { playGame('paper'); });
scissorsButton.addEventListener('click', () => { playGame('scissors'); });
