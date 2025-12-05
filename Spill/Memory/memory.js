const EMOJIS = ["🐶","🐱","🦊","🐼","🦁","🐸"]; // 6 par = 12 kort

const board = document.getElementById('board');
const restartBtn = document.getElementById('restart');
const message = document.getElementById('message');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;

function shuffle(array){
  for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildBoard(){
  board.innerHTML = '';
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  matches = 0;
  message.textContent = '';

  const deck = shuffle([...EMOJIS, ...EMOJIS]); // par

  deck.forEach((icon)=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.icon = icon;
    card.innerHTML = `
      <div class="inner">
        <div class="face front">${icon}</div>
        <div class="face back"></div>
      </div>`;
    card.addEventListener('click', onCardClick);
    board.appendChild(card);
  });
}

function onCardClick(e){
  const clicked = e.currentTarget;
  if(lockBoard || clicked.classList.contains('flipped')) return;

  clicked.classList.add('flipped');

  if(!firstCard){
    firstCard = clicked;
    return;
  }

  secondCard = clicked;
  lockBoard = true;

  if(firstCard.dataset.icon === secondCard.dataset.icon){
    matches++;
    resetTurn();
    if(matches === EMOJIS.length){
      message.textContent = 'Gratulerer! Du fant alle parene!';
    }
  } else {
    setTimeout(()=>{
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetTurn();
    }, 800);
  }
}

function resetTurn(){
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

restartBtn.addEventListener('click', buildBoard);

buildBoard();
