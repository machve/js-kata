"use strict"

function getTweets() {
    fetch("http://kea-alt-del.dk/twitter/api/?count=50/?hashtag=word").then(function (a) {
        return a.json()
    }).then(showTweets)
}

function showTweets(tweet) {
    console.log(tweet)


}

getTweets();