function checkAnswer(answer) {
    const result = document.getElementById('quiz-result');
    if(answer === 'A') {
        result.textContent = "Riktig! 🎉";
        result.style.color = "green";
    } else {
        result.textContent = "Feil, prøv igjen!";
        result.style.color = "red";
    }
}