"use strict";



function mockify(text) {
    if (typeof text === 'string') {
        console.log("yep")
        let arrayText = Array.from(text);
        document.querySelector("#mocking").innerHTML = arrayText.map(l => Math.round(Math.random()) ? l.toUpperCase() : l.toLowerCase()).join("");
    } else {
        console.log('nope')

    }
}
mockify();