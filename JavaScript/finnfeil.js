// 1. En variabel
let navn = "Hei, jeg har klart det!";
 
// Viser variabelen på nettsiden
document.getElementById("variable").innerHTML += `<span class="result">${navn}</span>`;
 
// 2. En utregning av to tall
let tall1 = 10;
let tall2 = 20;
let sum = tall1 + tall2; // Legger sammen tallene
 
// Viser utregningen på nettsiden
document.getElementById("calculation").innerHTML += `<span class="result">${tall1} + ${tall2} = ${sum}</span>`;
 
// 3. En prompt
let brukerInput = prompt("Hva er favorittfargen din?");
 
// Viser brukerens input på nettsiden
document.getElementById("promptResult").innerHTML += `<span class="result">Favorittfargen din er: ${brukerInput}</span>`;
 
// 4. En funksjon
function multipliser(a, b) {
return a * b; // Multipliserer to tall
}
 
let produkt = multipliser(5, 3); // Kaller funksjonen med tallene 5 og 3
// Viser resultatet av funksjonen på nettsiden
 
document.getElementById("calculation").innerHTML += `<br>5 * 3 = <span
class="result">${produkt}</span>`;
 
// 5. Et array
let frukter = ["Eple", "Banan", "Appelsin", "Druer"];
 
// Viser arrayet på nettsiden
document.getElementById("array").innerHTML += `<span class="result">${frukter.join(", ")}</span>`;