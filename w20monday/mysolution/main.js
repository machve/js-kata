"use strict";
// on window load move div çsup
const div = document.querySelector("div");
window.addEventListener("load",function movediv (){
console.log("hi mom")


div.style.transform = "translateY(-100px)";

})

// button on click close div
const button = document.querySelector("button");
button.addEventListener('click',function(){

    div.style.transform = "translateY(100px)";
})