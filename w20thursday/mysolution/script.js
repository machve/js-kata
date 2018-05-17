"use strict";

// listen for clicks on the color-selectors
const colorSelectors =document.querySelector("#colorselector").children;
console.log(colorSelectors)
for (let i = 0 ; i < colorSelectors.length; i++) {
    colorSelectors[i].addEventListener('click' , clicked ) ; 
 }


// when one is clicked:
function clicked(event) {
    console.log(event);
    // find the element that was clicked
    const target = event.target;
    // find the color from that element
    let colorLi = target.dataset.color;
    console.log(colorLi)
    // set the css variable --basecolor 
    document.documentElement.style.setProperty('--basecolor', colorLi);
}