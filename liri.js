var fs = require('fs');
dotenv = require("dotenv").config();
const axios = require("axios");


function movieSearch() {
    var movieTitle = require("./functions")
    var movieUrl =
        `http://www.omdbapi.com/?t=${movieTitle()}&y=&plot=short&apikey=trilogy`;

    axios.get(movieUrl).then(res => {
        var movieTitle = res.data.Title;
        var movieYear = res.data.Year;
        var movieIMDBRating = ("IMDB rating" + " " + res.data.Ratings[0].Value);
        var movieCountry = (res.data.Country);
        var movieLanguage = (res.data.Language);
        var moviePlot = (res.data.Plot);
        var movieActors = (res.data.Actors);

        var movieSearchResult = (movieTitle + '\n' + movieYear + '\n' + movieIMDBRating + '\n' + movieCountry + '\n' + movieLanguage + '\n' + moviePlot + '\n' + movieActors + '\n');
        console.log(movieSearchResult);
        fs.appendFile('log.txt', movieSearchResult, function (err) {
            if (err) {
                return console.log(error);
            }
        })
        // console.log(res.data);
        // console.log(movieTitle);
        // console.log(movieYear);
        // console.log(movieIMDBRating);
        // console.log(movieCountry);
        // console.log(movieLanguage);
        // console.log(moviePlot);
        // console.log(movieActors);
    });
}
movieSearch()



function spotifySearch() {
    var Spotify = require('node-spotify-api');
    var keys = require("./keys");
    var spotify = new Spotify(keys.spotify);


    var Spotify = require('node-spotify-api');
    var songInput = '';
    // search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

    //conditional to check if I have some parameters (process.argv[2] .....)
    if (process.argv.length > 2) {
        var songName = []

        for (let i = 2; i < process.argv.length; i++) {
            songName.push(process.argv[i])
        }
        songInput = (songName.join('+'));
        console.log(songInput);

    } else {
        songInput = 'the+sign';
    }
    spotify.search({ type: 'track', query: songInput, limit: 7 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songDetails = data.tracks.items[0];
        // console.log("I am looking for", songInput);

        var artist = (songDetails.artists[0].name);
        // console.log("The Artist name is", artist);

        var album = (songDetails.album.name);
        // console.log("The album name is", album);

        var song = (songDetails.name);
        // console.log("The songs name is", song);

        var previewLink = (songDetails.preview_url);
        console.log("If a songs preview is available, it can be found here: ", previewLink);

        var songLink = (songDetails.external_urls.spotify)
        console.log("If a songs preview is available, it can be found here: ", songLink);

        var songSearchResult = (songInput + '\n' + artist + '\n' + album + '\n' + song + '\n' + previewLink + '\n' + songLink + '\n');
        console.log(songSearchResult);

        fs.appendFile('log.txt', songSearchResult, function (err) {
            if (err) {
                return console.log(error);
            }
        })

    });
}
spotifySearch()