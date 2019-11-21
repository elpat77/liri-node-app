var fs = require('fs');
dotenv = require("dotenv").config();
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
        // console.log(songDetails);
        // var songSearched = (songInput);
        console.log("I am looking for", songInput);

        var artist = (songDetails.artists[0].name);
        console.log("The Artist name is", artist);

        var album = (songDetails.album.name);
        console.log("The album name is", album);

        var song = (songDetails.name);
        console.log("The songs name is", song);

        var previewLink = (songDetails.preview_url);
        console.log("If a songs preview is available, it can be found here: ", previewLink);

        var songLink = (songDetails.external_urls.spotify)
        console.log("If a songs preview is available, it can be found here: ", songLink);

        var searchResult = (songInput + '\n' + artist + '\n' + album + '\n' + song + '\n' + previewLink + '\n' + songLink + '\n')
        console.log(searchResult);

        fs.appendFile('log.txt', searchResult, function (err) {
            if (err) {
                return console.log(error);
            }
        })

    });
}
spotifySearch()