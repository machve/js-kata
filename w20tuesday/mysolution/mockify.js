"use strict";


let text = document.querySelector('h1').textContent;
const letter = Array.from(text);
console.log(letter)
let lettermock = letter.map(l=>Math.round(Math.random()) ? l.toUpperCase() : l.toLowerCase());
console.log(lettermock)
lettermock.toString();

document.querySelector("#mocking").innerHTML = lettermock.join("")

