var fs = require('fs');
dotenv = require("dotenv").config();
const axios = require("axios");
console.log(process.argv[2]);
var functionCalled = process.argv[2];


function movieSearch() {
    var movieTitle = require("./functions")
    var movieUrl =
        `http://www.omdbapi.com/?t=${movieTitle()}&y=&plot=short&apikey=trilogy`;

    axios.get(movieUrl).then(res => {
        var movieTitle = ("Movie Title -" + " " + res.data.Title);
        var movieYear = ("Release Year -" + " " + res.data.Year);
        var movieIMDBRating = ("IMDB Rating -" + " " + res.data.Ratings[0].Value);
        var movieRottenRating = ("Rotten Tomatoes Rating -" + " " + res.data.Ratings[1].Value);
        var movieCountry = ("Country of Origin -" + " " + res.data.Country);
        var movieLanguage = ("Language(s) -" + " " + res.data.Language);
        var moviePlot = ("Plot -" + " " + res.data.Plot);
        var movieActors = ("Cast -" + " " + res.data.Actors);

        var movieSearchResult = (movieTitle + '\n' + movieYear + '\n' + movieIMDBRating + '\n' + movieRottenRating + '\n' + movieCountry + '\n' + movieLanguage + '\n' + moviePlot + '\n' + movieActors + '\n');
        console.log(movieSearchResult);
        fs.appendFile('log.txt', movieSearchResult, function (err) {
            if (err) {
                return console.log(error);
            }
        })
    });
}

function spotifySearch() {
    var Spotify = require('node-spotify-api');
    var keys = require("./keys");
    var spotify = new Spotify(keys.spotify);
    var songInput = '';

    if (process.argv.length > 2) {
        var songName = []

        for (let i = 2; i < process.argv.length; i++) {
            songName.push(process.argv[i])
        }
        songInput = (songName.join('+'));
        // console.log(songInput);

    } else {
        songInput = 'the+sign';
    }
    spotify.search({ type: 'track', query: songInput, limit: 7 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songDetails = data.tracks.items[0];

        var artist = (songDetails.artists[0].name);

        var album = (songDetails.album.name);

        var song = (songDetails.name);


        var previewLink = (songDetails.preview_url);
        console.log("If a songs preview is available, it can be found here: ", previewLink);

        var songLink = (songDetails.external_urls.spotify)
        console.log("If a songs preview is available, it can be found here: ", songLink);

        var songSearchResult = (songInput + '\n' + artist + '\n' + album + '\n' + song + '\n' + previewLink + '\n' + songLink + '\n');
        // console.log(songSearchResult);

        fs.appendFile('log.txt', songSearchResult, function (err) {
            if (err) {
                return console.log(error);
            }
        })

    });
}


if (functionCalled === 'movie-this') {
    movieSearch();
}
else if (functionCalled === 'spotify-this-song') {
    spotifySearch();
}