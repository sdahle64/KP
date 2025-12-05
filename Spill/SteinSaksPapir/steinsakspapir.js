const buttons = document.querySelectorAll('button[data-choice]');
const playerChoiceEl = document.getElementById('playerChoice');
const computerChoiceEl = document.getElementById('computerChoice');
const roundResultEl = document.getElementById('roundResult');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resetBtn = document.getElementById('reset');


let playerScore = 0;
let computerScore = 0;


function computerPick(){
const choices = ['rock','scissors','paper'];
return choices[Math.floor(Math.random()*3)];
}


function decide(p, c){
if(p===c) return 'tie';
if((p==='rock' && c==='scissors') || (p==='scissors' && c==='paper') || (p==='paper' && c==='rock'))
return 'win';
return 'lose';
}


buttons.forEach(btn =>{
btn.addEventListener('click', ()=>{
const player = btn.dataset.choice;
const comp = computerPick();
const outcome = decide(player, comp);


playerChoiceEl.textContent = player;
computerChoiceEl.textContent = comp;


if(outcome==='win'){
playerScore++;
roundResultEl.textContent = 'Du vant!';
} else if(outcome==='lose'){
computerScore++;
roundResultEl.textContent = 'Du tapte!';
} else {
roundResultEl.textContent = 'Uavgjort';
}


playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;
});
});


resetBtn.addEventListener('click', ()=>{
playerScore = 0;
computerScore = 0;
playerScoreEl.textContent = 0;
computerScoreEl.textContent = 0;
playerChoiceEl.textContent = '–';
computerChoiceEl.textContent = '–';
roundResultEl.textContent = 'Klar';
});