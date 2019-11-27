var fs = require('fs');
dotenv = require("dotenv").config();
const axios = require("axios");
var functionCalled = process.argv[2];


function concertSearch() {
    // var concertURL =  'https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp';
    var concertURL = `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`;
    axios.get(concertURL).then(res => {
        // console.log(res.data)
        // console.log(res.data[0])
        console.log(res.data[0].artist.name);
        var artistName = ("Artist -" + " " + res.data[0].artist.name);
        console.log(artistName);
        var venueName = ("Venue(s) -" + " " + res.data[0].venue.name);
        console.log(venueName);
        var venueLocation = ("Location -" + " " + res.data[0].venue.country + ", " + res.data[0].venue.city + ", " + res.data[0].venue.region);
        console.log(venueLocation);
        var eventdate = ("Date -" + " " + res.data[0].datetime);
        console.log(eventdate);
    });
}
// concertSearch()


function movieSearch() {
    var movieTitle = require("./movieFunct");
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

        var movieSearchResult = ('\n' + movieTitle + '\n' + movieYear + '\n' + movieIMDBRating + '\n' + movieRottenRating + '\n' + movieCountry + '\n' + movieLanguage + '\n' + moviePlot + '\n' + movieActors + '\n');
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

    if (process.argv.length > 3) {
        var songName = [];
        for (let i = 3; i < process.argv.length; i++) {
            songName.push(process.argv[i])
        }
        songInput = (songName.join('+'));
        // console.log(songInput);

    } else {
        songInput = 'The Sign';
        console.log("SI", songInput);
    }

    spotify.search({ type: 'track', query: songInput, limit: 7 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songDetails = data.tracks.items[0];
        // console.log(songDetails);
        var song = ("Song Name - " + " " + songDetails.name);
        var artist = ("Artist Name - " + " " + songDetails.artists[0].name);
        var album = ("Album Name - " + " " + songDetails.album.name);
        var previewLink = ("If a songs preview is available, it can be found here: " + " " + songDetails.preview_url);
        var songLink = ("A link to the song can be found here:" + " " + songDetails.external_urls.spotify)
        var songSearchResult = ('\n' + song + '\n' + artist + '\n' + album + '\n' + previewLink + '\n' + songLink + '\n');
        console.log(songSearchResult);

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
else if (functionCalled === 'concert-this') {
    concertSearch();
}