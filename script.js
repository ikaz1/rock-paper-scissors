const playerResult = document.querySelector('#player-score');
const computerResult = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
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

function playRound(e) {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.innerText;

    document.querySelector('#choices').textContent = 
        `You chose ${playerChoice} and the computer chose ${computerChoice}!`;

    if (playerChoice === computerChoice) {
        results.textContent = `It's a DRAW!`; 
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") { // WIN rock beats scissors
            playerScore++;
            results.textContent = 'You WIN! Rock beats Scissors!';
        } else { // LOSE paper beats rock
            computerScore++;
            results.textContent = 'You LOSE! Paper beats Rock!';
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") { // WIN paper beats rock
            playerScore++;
            results.textContent = 'You WIN! Paper beats Rock!';
        } else { // LOSE scissors beats paper
            computerScore++;
            results.textContent = 'You LOSE! Scissors beats Paper!';
        }
    } else {
        if (computerChoice === "Rock") { // LOSE rock beats scissors
            computerScore++;
            results.textContent = 'You LOSE! Rock beats Scissors!'
        } else { // WIN scissors beats paper
            playerScore++;
            results.textContent = 'You WIN! Scissors beats Paper!';
        }
    }

    playerResult.textContent = playerScore;
    computerResult.textContent = computerScore;
}

function game(e) {
    if (playerScore < 5 && computerScore < 5) playRound(e);
    if (playerScore === 5) results.textContent = 'YOU WIN THE GAME!';
    if (computerScore === 5) results.textContent = 'YOU LOSE THE GAME!';
}

buttons.forEach(btn => btn.addEventListener('click', game));