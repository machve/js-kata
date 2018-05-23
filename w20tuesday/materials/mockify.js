"use strict";

// // create a function called `mockify` that receives a string, 
// const text = document.querySelector('h1').textContent;
// const letter = Array.from(text);
// letter.forEach(mockify);


//     function mockify(value, index, array){
//         // console.log(`${value} i: ${index}`)
//         let letter = array[index];
//         const rand = Math.random();
//         if (rand<0.5){
//             letter = letter.toUpperCase
//         }
//         else {
//             letter = letter.toLowerCase
//         }
      
//         array[index] = letter;
//         console.log(letter);
// } 
// letter.toString();
// document.querySelector("#mocking").innerHTML = letter.join(" ");

document.querySelector("#mocking").textContent=[...document.querySelector("h1").textContent].map(l=>Math.round(Math.random()) ? l.toUpperCase() : l.toLowerCase()).join("");