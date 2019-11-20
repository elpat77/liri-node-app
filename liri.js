require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

// spotify
//     .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.error('Error occurred: ' + err);
//     });

// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
spotify.search({ type: 'track', query: 'All the Small Things', limit: 20 }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});