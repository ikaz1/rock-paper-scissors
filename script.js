const playerOptions = document.querySelectorAll('.option');
const playAgainBtn = document.querySelector('#btn-play-again');
const results = document.querySelector('#results');

const rockBtn = document.querySelector('#btn-rock'),
      paperBtn = document.querySelector('#btn-paper'),
      scissorsBtn = document.querySelector('#btn-scissors');

const playerLives = document.querySelector('.player'),
      botLives = document.querySelector('.bot');

const playerIcon = document.querySelector('#player-choice-icon'),
      botIcon = document.querySelector('#bot-choice-icon');

let playerScore = 5, 
    botScore = 5;


function getRandomChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    return (randomChoice === 1 ) ? 'Rock' 
        : (randomChoice === 3) ? 'Paper' : 'Scissors';
}

function hideButtons() {
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none';
    scissorsBtn.style.display = 'none';

    playAgainBtn.style.display = 'block';
}

function displayChoice(player, bot) {
    const rockClass = 'fa-regular fa-hand-back-fist', 
          paperClass = 'fa-regular fa-hand',
          scissorsClass = 'fa-regular fa-hand-scissors';

    (player === 'Rock') ? playerIcon.classList = rockClass 
        : (player === 'Paper') ? playerIcon.classList = paperClass 
        : playerIcon.classList = scissorsClass;

    (bot === 'Rock') ? botIcon.classList = rockClass 
        : (bot === 'Paper') ? botIcon.classList = paperClass 
        : botIcon.classList = scissorsClass;
}

function playRound(e) {
    const playerChoice = e.target.innerText;
    const botChoice = getRandomChoice();

    displayChoice(playerChoice, botChoice);

    (playerChoice === botChoice) ? results.textContent = `It's a DRAW!`
        : (playerChoice === 'Rock') ? gameLogic('Scissors') 
        : (playerChoice === 'Paper') ? gameLogic('Rock') : gameLogic('Paper');

    function gameLogic(choice) {
        if (botChoice === choice) {
            botLives.removeChild(botLives.lastElementChild);
            results.textContent = `You WIN! ${playerChoice} beats ${botChoice}!`;
            botScore--;
        } else {
            playerLives.removeChild(playerLives.lastElementChild);
            results.textContent = `You LOSE! ${botChoice} beats ${playerChoice}!`;
            playerScore--;
        }
    }
}

function startGame(e) {
    console.log(e);
    if (playerScore > 0 && botScore > 0) playRound(e);

    if (botScore === 0) {
        results.textContent = 'YOU WIN THE GAME!';
        hideButtons();
    } else if (playerScore === 0) {
        results.textContent = 'YOU LOSE THE GAME!';
        hideButtons();
    }
}

function resetGame() {
    playerScore = 5;
    botScore = 5;
    results.textContent = '';

    playerIcon.removeAttribute('class');
    botIcon.removeAttribute('class');

    rockBtn.style.display = 'inline-block';
    paperBtn.style.display = 'inline-block';
    scissorsBtn.style.display = 'inline-block';

    playerLives.innerHTML = 
        '<div></div><div></div><div></div><div></div><div></div>';
    botLives.innerHTML = 
        '<div></div><div></div><div></div><div></div><div></div>';

    playAgainBtn.style.display = 'none';
}

playerOptions.forEach(btn => btn.addEventListener('click', startGame));
playAgainBtn.addEventListener('click', resetGame);