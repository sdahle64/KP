// Skriv inn navn når du kommer inn på nettsiden 
const input = document.getElementById("username");
const button = document.getElementById("submitName");
const greeting = document.getElementById("greeting");

// Funksjon som kjører når man klikker på submit
button.addEventListener("click", function() {
  const name = input.value.trim(); // Fjern mellomrom
  if(name) {
    greeting.textContent = `Hei, ${name}! Velkommen til nettsiden!`; 
    greeting.style.color = "#7d5ba6";
    greeting.style.fontWeight = "bold";
  } 
  else {
    greeting.textContent = "Vennligst skriv inn et navn.";
    greeting.style.color = "red";
  }
});

const toggle = document.getElementById('toggleButton');
const table = document.getElementById('logTable');

button.addEventListener('click', () => {
  table.classList.toggle('shrink');
});


// GJØR TABELLEN MINDRE MED KNAPP
function visKunEnRad() {
  const tabell = document.getElementById("minTabell");
  const rader = tabell.querySelectorAll("tr");

  // Skjul alle rader unntatt header (rader[0]) og første data-rad (rader[1])
  rader.forEach((rad, index) => {
    if (index === 0 || index === 1) {
      rad.style.display = "";
    } else {
      rad.style.display = "none";
    }
  });
}

function visHeleTabellen() {
  const tabell = document.getElementById("minTabell");
  const rader = tabell.querySelectorAll("tr");

  // Vis alle rader
  rader.forEach(rad => {
    rad.style.display = "";
  });
}

// Kjør funksjonen når siden lastes
window.onload = visKunEnRad;


// RANDOM NUMBER
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 10;
let randomNum;

myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  myLabel.textContent = randomNum;
};
