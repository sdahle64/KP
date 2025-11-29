// Hent elementene
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

// En funsjon som gjør tabellen mindre :)
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
