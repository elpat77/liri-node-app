var fs = require('fs');
dotenv = require("dotenv").config();
const axios = require("axios");
var functionCalled = process.argv[2];
var moment = require('moment');


function concertSearch() {
    var concertTitle = require("./concertFunct");
    // var concertURL =  'https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp';
    var concertURL = `https://rest.bandsintown.com/artists/${concertTitle()}/events?app_id=codingbootcamp`;
    axios.get(concertURL).then(res => {
        // console.log(res);
        var artistName = (res.data[0].artist.name);
        var venueName = (res.data[0].venue.name);
        var venueLocation = (res.data[0].venue.country + ", " + res.data[0].venue.city + " " + res.data[0].venue.region);
        var eventDate = (res.data[0].datetime);
        var eventSearchResult = ('\nArtist: ' + artistName + '\nVenue: ' + venueName + '\nLocation: ' + venueLocation + '\nDate: ' + moment(eventDate).format('MMMM Do YYYY') + `\n`);
        console.log(eventSearchResult);
        fs.appendFile('log.txt', eventSearchResult, function (err) {
            if (err) {
                return console.log(error);
            }
        })
    });
}

function movieSearch() {
    var movieTitle = require("./movieFunct");
    var movieUrl =
        `http://www.omdbapi.com/?t=${movieTitle()}&y=&plot=short&apikey=trilogy`;

    axios.get(movieUrl).then(res => {
        var movieTitle = (res.data.Title);
        var movieYear = (res.data.Year);
        var movieIMDBRating = (res.data.Ratings[0].Value);
        var movieRottenRating = (res.data.Ratings[1].Value);
        var movieCountry = (res.data.Country);
        var movieLanguage = (res.data.Language);
        var moviePlot = (res.data.Plot);
        var movieActors = (res.data.Actors);

        var movieSearchResult = ('\nMovie Title: ' + movieTitle + '\nRelease Year: ' + movieYear + '\nIMDB Rating: ' + movieIMDBRating + '\nRotten Tomatoes Rating: ' + movieRottenRating + '\nCountry of Origin: ' + movieCountry + '\nLanguage(s): ' + movieLanguage + '\nPlot: ' + moviePlot + '\nCast: ' + movieActors + '\n');
        console.log(movieSearchResult);
        fs.appendFile('log.txt', movieSearchResult, function (err) {
            if (err) {
                return console.log(error);
            }
        })
    });
}

function doWhatItSays() {
    fs.readFile('random.txt', 'utf8', (err, data) => {
        if (err) throw (err);
        console.log(data);
        var dataInput = data;
        var DWIS = dataInput.split(',');
        // console.log(DWIS[1]);
        var songInput = DWIS[1];
        console.log(songInput);

    })
};

function spotifySearch() {
    var Spotify = require('node-spotify-api');
    var keys = require("./keys");
    var spotify = new Spotify(keys.spotify);
    var songInput = '';
    doWhatItSays()

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
        var song = (songDetails.name);
        var artist = (songDetails.artists[0].name);
        var album = (songDetails.album.name);
        var previewLink = (songDetails.preview_url);
        var songLink = (songDetails.external_urls.spotify)
        var songSearchResult = ('\nSong Name: ' + song + '\nArtist Name: ' + artist + '\nAlbum Name: ' + album + '\nSong Preview: ' + previewLink + '\nLink to the song: ' + songLink + '\n');
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
else if (functionCalled === 'do-what-it-says') {
    doWhatItSays();
}