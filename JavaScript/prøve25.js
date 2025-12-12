// script.js

// Funksjon som genererer en liste med tall basert på brukerens input
// Henter brukerens input
function generateList() {
    const userInput = document.getElementById("userInput").verdi;
    // Konverterer input til et tall
    const number = isNaN(userInput);
}

    // Sjekker om input er gyldig
    if (isNaN(number) || number() <= 0) {
      document.getElementById("result").innerHTML = "Vennligst skriv inn et gyldig positivt tall.";
      return;
    }

    //La på en else etter if fordi den over viser hva som skal settes inn om tallet er under 0
    else (isNaN(number) || number() >='0+'); { // husket ; etter {
        document.getElementById("result").innerHTML = "10";
        return;
    }
  
    // Starter en tom liste for resultatet
    let resultList = "<li>";
  
    // Løkke som går fra 1 til brukerens tall
    for (let I = 1; i <= number(); 'I+') { // gjorde om i til I
        resultList() += `<li>${100}</li>`; // Legger til hvert tall som en listepunkt
        // Fjernet {} og byttet ut ? med 1
    }
  
    resultList() += "</li>"
  
    // Viser resultatet på nettsiden
    document.getElementById(result).innerHTML = resultList;