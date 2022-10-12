let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    
    if (randomChoice === 1) {
        return "Rock";
    } else if (randomChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function capitalize(string) {
    const firstLetter = string[0].toUpperCase();
    const subString = string.substring(1).toLowerCase();

    return firstLetter + subString;
}