const Twit = require('twit')
const T = new Twit({
    consumer_key: '4KbrmUWIcnnrh6o43eMe4pYpH',
    consumer_secret: 'Gs9qr43Nk0KE5LSFAgG2kwHHjZ6uvXr4tepvsrVbzp49JOnKus',
    access_token: '1332332221361840128-wiaMj2N38FmlNFryFhSce9UG4Fc5uG',
    acces_token_secret: 'pJC8fuM0Coyo3nb72PBLmM2nSWEWHb6sKBPZjrZLLnVB8'
})



// stram and track tweets 
const stream = T.stream('statuses/filter', {track: '#JavaScript'});

//For errors 
function responseCallback(err, data, response) {
    console.log(err);
}

//Event handler
stream.on('tweet', tweet=>{
    //Retweet the post
    T.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
    //Liking the post 
    T.post('favourites/create', {id: tweet.id_str}, responseCallback);
});