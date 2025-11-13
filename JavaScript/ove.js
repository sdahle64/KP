// User input
const usernameInput = document.getElementById("username");
const submitName = document.getElementById("submitName");
const usernameResult = document.getElementById("usernameResult");
const heading = document.getElementById("myH1");

submitName.onclick = function() {
    const username = usernameInput.value;
    usernameResult.textContent = `Hello ${username}`;
};

// if statements
const ageInput = document.getElementById("age");
const submitAge = document.getElementById("submitAge");
const ageResult = document.getElementById("ageResult");

submitAge.onclick = function() {
    let age = Number(ageInput.value);

    if (age >= 100) {
        ageResult.textContent = `You are TOO OLD to enter this site`;
    } 
    else if (age === 0) {
        ageResult.textContent = `You can´t enter. You were just born`;
    } 
    else if (age >= 18) {
        ageResult.textContent = `You are old enough to enter this site`;
    } 
    else if (age > 0 && age < 18) {
        ageResult.textContent = `You must be 18+ to enter this site`;
    } 
    else {
        ageResult.textContent = `Invalid age`;
    }
};

// ARRAYS
let fruits = ["apple", "orange","banana", "coconut"];

for(let i = 1; i < fruits.length; i+= 2){
    console.log(fruits[i]);
}

// LOOPS

/*for(let i = 0; i <= 10; i++){
    console.log("i");
} */

// LOOPS WHILE

let username = "";

while(username === ""){
    username = window.prompt("Enter your name");
}
console.log("Hello ${username}");

