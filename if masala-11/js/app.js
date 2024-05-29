"use strict"


let x = 5; 
let y = -3; 


let kvadrat;

if (x > 0 && y > 0) {
  kvadrat = "1-chorakda joylashgan";
} else if (x < 0 && y > 0) {
  kvadrat = "2-chorakda joylashgan";
} else if (x < 0 && y < 0) {
  kvadrat = "3-chorakda joylashgan";
} else if (x > 0 && y < 0) {
  kvadrat = "4-chorakda joylashgan";
} else {
  kvadrat = "O'rta nuqtada joylashgan";
}

console.log("Nuqta joylashgan koordinataning choragi: " + kvadrat);