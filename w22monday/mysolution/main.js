"use strict"

let template = document.querySelector(".link-template").content;
let section = document.querySelector('section');

function getTweets() {


    fetch("http://kea-alt-del.dk/twitter/api/?count=50/?hashtag=word").then(res => res.json())
        .then(showData);
}

function showData(json) {
    let tweet = json.statuses;

    console.log(tweet);


    tweet.forEach(status => {

        let text = status.text;
        let user = status.user.name;
        let language = status.lang;
        console.log(user);


        let clone = template.cloneNode(true);



     if (status.lang === "en"){
        clone.querySelector(".tweet-text").textContent= text;
        clone.querySelector(".user-name").textContent =user;
      }
        //     // json.forEach(function(tweet){

        //     // console.log("hi")
        //     // })
        section.appendChild(clone);
    });
}
getTweets()