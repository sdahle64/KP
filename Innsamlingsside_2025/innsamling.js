const startBtn = document.getElementById('start-memory');
const board = document.getElementById('memory-board');
const result = document.getElementById('memory-result');

const cardsData = [
    { id: 1, content: '🇺🇬' },
    { id: 2, content: '🌳' },
    { id: 3, content: '🦒' },
    { id: 4, content: '🏫'}
];

let cards = [];
let flippedCards = [];
let matchedCount = 0;
let busy = false;

startBtn.addEventListener('click', startGame);

function startGame() {
    board.innerHTML = '';
    result.textContent = '';
    flippedCards = [];
    matchedCount = 0;
    busy = false;

    cards = [...cardsData, ...cardsData].sort(() => Math.random() - 0.5);

    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('memory-card');
        cardEl.dataset.id = card.id;

        const inner = document.createElement('div');
        inner.classList.add('memory-card-inner');

        const front = document.createElement('div');
        front.classList.add('memory-card-front');

        const back = document.createElement('div');
        back.classList.add('memory-card-back');
        back.textContent = card.content;

        inner.appendChild(front);
        inner.appendChild(back);
        cardEl.appendChild(inner);
        board.appendChild(cardEl);

        cardEl.addEventListener('click', () => flipCard(cardEl));
    });
}

function flipCard(cardEl) {
    if (busy || flippedCards.includes(cardEl) || cardEl.classList.contains('flipped')) return;

    cardEl.classList.add('flipped');
    flippedCards.push(cardEl);

    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;

        if (card1.dataset.id === card2.dataset.id) {
            matchedCount++;
            flippedCards = [];
            if (matchedCount === cardsData.length) {
                result.textContent = 'Gratulerer! Du har fullført memory! 🎉';
            }
        } else {
            busy = true;
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
                busy = false;
            }, 1000);
        }
    }
}


