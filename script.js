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

function playRound(playerSelection, computerSelection) {
    const computerString = `Computer chooses ${computerSelection}!\n`;

    playerSelection = capitalize(playerSelection);

    if (playerSelection === computerSelection) {
        return `${computerString}It's a draw!\nYour Score: ${playerScore}  Computer's Score: ${computerScore}`;
    } else if (playerSelection === "Rock") {

        if (computerSelection === "Scissors") {
            playerScore++;
            console.log(playerScore + " " + computerScore);
            return `${computerString}You WIN! Rock beats Scissors!\nYour Score: ${playerScore}  Computer's Score: ${computerScore}`;
        } else {
            computerScore++;
            console.log(playerScore + " " + computerScore);
            return `${computerString}You LOSE! Paper beats Rock!\nYour Score: ${playerScore}  Computer's Score: ${computerScore}`;
        }

    } else if (playerSelection === "Paper") {

        if (computerSelection === "Rock") {
            playerScore++;
            return `${computerString}You WIN! Paper beats Rock!\nYour Score: ${playerScore}  Computer's Score: ${computerScore}`
        } else {
            computerScore++;
            return `${computerString}You LOSE! Scissors beats Paper!\nYour Score: ${playerScore}  Computer's Score: ${computerScore}`;
        }

    } else if (playerSelection === "Scissors") {

        if (computerSelection === "Rock") {
            computerScore++;
            return `${computerString}You LOSE! Rock beats Scissors!\nYour Score: ${playerScore}  Computer's Score: ${computerScore}`;
        } else {
            playerScore++;
            return `${computerString}You WIN! Scissors beats Paper!\nYour Score: ${playerScore}  Computer's Score: ${computerScore}`;
        }

    } else {
        return "I don't recognize that choice";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("There are 5 rounds! Choose either Rock, Paper, or Scissors!");
        const computerChoice = getComputerChoice();

        alert(playRound(playerChoice, computerChoice));
    }

    if (playerScore > computerScore) {
        alert("You WIN the game!");
    } else if (playerScore < computerScore) {
        alert("You LOSE the game!")
    } else {
        alert("The game is TIED!");
    }
}

game();