const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    const totalMoves = 10;

    const playerOptions = document.querySelectorAll('.choice');
    const computerOptions = ['rock', 'paper', 'scissor'];

    
    const movesLeft = document.querySelector('.movesleft');
    const resultText = document.querySelector('.result');
    const movePrompt = document.querySelector('.move');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    const reloadBtn = document.querySelector('.reload');

    // Play game
    playerOptions.forEach(option => {
        option.addEventListener('click', function() {
            const playerChoice = this.classList[1];
            const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

            moves++;
            movesLeft.innerText = `Moves Left: ${totalMoves - moves}`;

            // Determine winner
            winner(playerChoice, computerChoice);

            if (moves === totalMoves) {
                gameOver();
            }
        });
    });

    // Determine winner
    const winner = (player, computer) => {
        if (player === computer) {
            resultText.textContent = 'Tie';
            return;
        }

        const win = 
            (player === 'rock' && computer === 'scissor') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissor' && computer === 'paper');

        if (win) {
            resultText.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } else {
            resultText.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    };

    // Game over
    const gameOver = () => {
        movePrompt.innerText = 'Game Over!!';
        movesLeft.style.display = 'none';
        playerOptions.forEach(option => option.style.display = 'none');

        if (playerScore > computerScore) {
            resultText.style.fontSize = '2rem';
            resultText.innerText = 'You Won The Game!';
            resultText.style.color = '#308D46';
        } else if (playerScore < computerScore) {
            resultText.style.fontSize = '2rem';
            resultText.innerText = 'You Lost The Game!';
            resultText.style.color = 'red';
        } else {
            resultText.style.fontSize = '2rem';
            resultText.innerText = 'It\'s a Tie!';
            resultText.style.color = 'grey';
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => window.location.reload());
    };
};

game();