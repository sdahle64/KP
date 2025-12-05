const EMOJIS = ["🐶","🐱","🦊","🐼","🦁","🐸","🐵","🐙","🦄","🐯","🐷","🐝"];

const board = document.getElementById('board');
const pairsSelect = document.getElementById('pairs');
const restartBtn = document.getElementById('restart');
const movesEl = document.getElementById('moves');
const timerEl = document.getElementById('timer');
const matchesEl = document.getElementById('matches');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;
let totalPairs = parseInt(pairsSelect.value,10);
let timer = null;
let seconds = 0;

function shuffle(array){
  for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
  return array;
}

function startTimer(){
  clearInterval(timer);
  seconds = 0;
  timerEl.textContent = seconds + 's';
  timer = setInterval(()=>{
    seconds++;
    timerEl.textContent = seconds + 's';
  },1000);
}

function stopTimer(){
  clearInterval(timer);
}

function createDeck(pairsCount){
  totalPairs = pairsCount;
  const chosen = EMOJIS.slice(0,pairsCount);
  return shuffle([...chosen, ...chosen]);
}

function buildBoard(){
  board.innerHTML='';
  firstCard = null; secondCard = null; lockBoard=false;
  moves = 0; matches = 0;
  movesEl.textContent = moves;
  matchesEl.textContent = matches + '/' + totalPairs;
  startTimer();

  const deck = createDeck(totalPairs);
  board.className = deck.length <= 8 ? 'grid cols-4' : 'grid cols-4';

  deck.forEach((icon, idx) =>{
    const card = document.createElement('button');
    card.className = 'card';
    card.type = 'button';
    card.dataset.icon = icon;
    card.dataset.index = idx;
    card.innerHTML = `
      <div class="inner">
        <div class="face front">${icon}</div>
        <div class="face back">?</div>
      </div>`;
    card.addEventListener('click', onCardClick);
    board.appendChild(card);
  });
}

function onCardClick(e){
  const clicked = e.currentTarget;
  if(lockBoard || clicked === firstCard) return;
  clicked.classList.add('flipped');

  if(!firstCard){
    firstCard = clicked;
    return;
  }

  secondCard = clicked;
  lockBoard = true;
  moves++;
  movesEl.textContent = moves;

  if(firstCard.dataset.icon === secondCard.dataset.icon){
    firstCard.removeEventListener('click', onCardClick);
    secondCard.removeEventListener('click', onCardClick);
    matches++;
    matchesEl.textContent = matches + '/' + totalPairs;
    resetTurn();
    if(matches === totalPairs){
      setTimeout(()=>{
        stopTimer();
        alert(`Gratulerer — du fant alle parene på ${moves} trykk og ${seconds} sekunder!`);
      },300);
    }
  } else {
    setTimeout(()=>{
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetTurn();
    }, 700);
  }
}

function resetTurn(){
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

restartBtn.addEventListener('click', ()=>{
  totalPairs = parseInt(pairsSelect.value,10);
  buildBoard();
});

pairsSelect.addEventListener('change', ()=>{
  totalPairs = parseInt(pairsSelect.value,10);
  buildBoard();
});

buildBoard();