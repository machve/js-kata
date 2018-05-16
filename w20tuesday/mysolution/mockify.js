"use strict";
//     let text = document.querySelector('h1').textContent;
// const letter = Array.from(text);
// console.log(letter)
// letter.forEach(mockify);

// function mockify (l){
// document.querySelector("#mocking").innerHTML =letter.map(l=>Math.round(Math.random()) ? l.toUpperCase() : l.toLowerCase()).join("");
// }

//  mockify();



function mockify (text) {
if (typeof text === 'string'){
    console.log("yep")
    let arrayText = Array.from(text);
    document.querySelector("#mocking").innerHTML =arrayText.map(l=>Math.round(Math.random()) ? l.toUpperCase() : l.toLowerCase()).join("");
}
else {
    console.log('nope')

}
}
mockify();
// document.querySelector("#mocking").innerHTML =letter.map(l=>Math.round(Math.random()) ? l.toUpperCase() : l.toLowerCase()).join("");
// }
