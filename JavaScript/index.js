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