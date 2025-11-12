/* JavaScript user input under her*/
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
  }

/* If statement Under her */
let age = 25;
if(age <= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}
/* annet eksempel under her */

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");


