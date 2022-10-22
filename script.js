const buttonChoice = document.querySelectorAll('.player-choice');
const buttonPlayAgain = document.querySelector('#btn-play-again');
const playerResult = document.querySelector('#player-score');
const computerResult = document.querySelector('#computer-score');
const results = document.querySelector('.results');
const choiceDisplay = document.querySelector('#choice-display');
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

    choiceDisplay.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}!`;

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

function startGame(e) {
    if (playerScore < 5 && computerScore < 5) playRound(e);
    if (playerScore === 5) {
        results.textContent = 'YOU WIN THE GAME!';
        buttonPlayAgain.style.display = 'block';
    } else if (computerScore === 5) {
        results.textContent = 'YOU LOSE THE GAME!';
        buttonPlayAgain.style.display = 'block';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerResult.textContent = 0;
    computerResult.textContent = 0;
    results.textContent = '';
    choiceDisplay.textContent = '';

    buttonPlayAgain.style.display = 'none';
}

buttonChoice.forEach(btn => btn.addEventListener('click', startGame));
buttonPlayAgain.addEventListener('click', resetGame)
