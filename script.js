const playerOptions = document.querySelectorAll('.option');
const buttonPlayAgain = document.querySelector('#btn-play-again');
const results = document.querySelector('#results');

const playerLives = document.querySelector('.player');
const botLives = document.querySelector('.bot');

const playerResult = document.querySelector('#player-score');
const botResult = document.querySelector('#bot-score');

const playerIcon = document.querySelector('#player-choice-icon');
const botIcon = document.querySelector('#bot-choice-icon');

let playerScore = 5;
let botScore = 5;


function getRandomChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    return (randomChoice === 1) ? 'Rock' 
        : (randomChoice === 2) ? 'Paper' : 'Scissors';
}

function removeLife(user, score) {
    user.removeChild(user.lastElementChild);
    score -= 1;
}

function displayChoice(player, bot) {
    const rockClass = 'fa-regular fa-hand-back-fist';
    const paperClass = 'fa-regular fa-hand';
    const scissorsClass = 'fa-regular fa-hand-scissors';

    (player === "Rock") ? playerIcon.classList = rockClass 
        : (player === "Paper") ? playerIcon.classList = paperClass 
        : playerIcon.classList = scissorsClass;

    (bot === "Rock") ? botIcon.classList = rockClass 
        : (bot === "Paper") ? botIcon.classList = paperClass 
        : botIcon.classList = scissorsClass;
}

function playRound(e) {
    const botChoice = getRandomChoice();
    const playerChoice = e.target.innerText;

    displayChoice(playerChoice, botChoice);

    if (playerChoice === botChoice) {
        results.textContent = `It's a DRAW!`; 
    } else if (playerChoice === "Rock") {
        if (botChoice === "Scissors") { // WIN rock beats scissors
            botLives.removeChild(botLives.lastElementChild);
            botScore--;
            results.textContent = 'You WIN! Rock beats Scissors!';
        } else { // LOSE paper beats rock
            playerLives.removeChild(playerLives.lastElementChild);
            playerScore--;
            results.textContent = 'You LOSE! Paper beats Rock!';
        }
    } else if (playerChoice === "Paper") {
        if (botChoice === "Rock") { // WIN paper beats rock
            botLives.removeChild(botLives.lastElementChild);
            botScore--;
            results.textContent = 'You WIN! Paper beats Rock!';
        } else { // LOSE scissors beats paper
            playerLives.removeChild(playerLives.lastElementChild);
            playerScore--;
            results.textContent = 'You LOSE! Scissors beats Paper!';
        }
    } else {
        if (botChoice === "Rock") { // LOSE rock beats scissors
            playerLives.removeChild(playerLives.lastElementChild);
            playerScore--;
            console.log(playerScore);
            results.textContent = 'You LOSE! Rock beats Scissors!'
        } else { // WIN scissors beats paper
            botLives.removeChild(botLives.lastElementChild);
            botScore--;
            results.textContent = 'You WIN! Scissors beats Paper!';
        }
    }

    playerResult.textContent = playerScore;
    botResult.textContent = botScore;
}

function startGame(e) {
    console.log(e);
    if (playerScore > 0 && botScore > 0) playRound(e);

    if (botScore === 0) {
        results.textContent = 'YOU WIN THE GAME!';
        buttonPlayAgain.style.visibility = 'visible';
    } else if (playerScore === 0) {
        results.textContent = 'YOU LOSE THE GAME!';
        buttonPlayAgain.style.visibility = 'visible';
    }
}

function resetGame() {
    playerScore = 0;
    botScore = 0;
    playerResult.textContent = 0;
    botResult.textContent = 0;
    results.textContent = '';

    playerIcon.removeAttribute('class');
    botIcon.removeAttribute('class');

    buttonPlayAgain.style.visibility = 'hidden';
}

playerOptions.forEach(btn => btn.addEventListener('click', startGame));
buttonPlayAgain.addEventListener('click', resetGame)
