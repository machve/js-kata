"use strict"

function getTweets() {
   

    fetch("http://kea-alt-del.dk/twitter/api/?count=50/?hashtag=word").then(res => res.json())
    .then(showData);
}

function showData(json){
    let tweet = json.statuses;
    console.log(tweet);
tweet.forEach(status => {
    if (status.lang === "en"){
    console.log(status.text)}
})
    // json.forEach(function(tweet){
    
    // console.log("hi")
    // })
};

    getTweets();