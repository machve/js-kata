"use strict";

window.addEventListener("DOMContentLoaded", buildList);

const list_data = [
    {
      link: "http://javascript.info/",
      description: "The Modern JavaScript Tutorial"
    },
    {
        link: "https://docs.google.com/spreadsheets/d/1n98cUW2htrh8tCvciUuXcjl9B826TuwZ9KjACsmnOW0/edit?usp=sharing",
        description: "The weekplan"
    },
    {
        link: "https://www.codecademy.com/learn/learn-the-command-line",
        description: "Command-line tutorial"
    },
    {
        link: "https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70",
        description: "Modern JavaScript Explained For Dinosaurs"
    },
    {
        link: "https://nodejs.org/en/",
        description: "Node.js"
    },
    {
        link: "https://git-scm.com/downloads",
        description: "git"
    },
    {
        link: "https://github.com/jofhatkea/js-kata",
        description: "The Kata with exercises"
    },
    {
        link: "http://flukeout.github.io",
        description: "CSS Selector practice"
    },
    {
        link: "https://code.visualstudio.com/",
        description: "Visual Studio Code editor"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        description: "MDN Array"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        description: "MDN String"
    },
    {
        link: "https://www.ecma-international.org/publications/standards/Ecma-262.htm",
        description: "ECMAScript standard specification"
    },
    {
        link: "https://www.w3schools.com/js/default.asp",
        description: "W3Schools JavaScript tutorial"
    },
    {
        link: "https://www.w3schools.com/jsref/default.asp",
        description: "W3Schools JavaScript reference"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "MDN JavaScript reference and guides"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        description: "The DOM"
    }
];

const ul = document.getElementById("thelist")
function createLi(data){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", data.link);
    a.textContent= data.description;
    li.appendChild(a);
    ul.appendChild(li);
}





function buildList() {
list_data.forEach(data=>{createLi(data)})
  
}

