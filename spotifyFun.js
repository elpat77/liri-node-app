dotenv = require("dotenv").config();
function spotifySearch(searchedSong) {
    var Spotify = require('node-spotify-api');
    var keys = require("./keys");
    var spotify = new Spotify(keys.spotify);


    var Spotify = require('node-spotify-api');

    // search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
    var songName = process.argv[2];
    if (searchedSong) {
        songName = searchedSong;
    } else if (!songName) {
        songName = 'the sign';
    }
    spotify.search({ type: 'track', query: songName, limit: 7 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songDetails = data.tracks.items[0];
        // console.log(songDetails);
        var songSearched = (songName);
        console.log("I am looking for", songSearched)

        var artist = (songDetails.artists[0].name);
        console.log("The Artist name is", artist)

        var album = (songDetails.album.name);
        console.log("The album name is", album)

        var song = (songDetails.name);
        console.log("The songs name is", song)

        var previewLink = (songDetails.preview_url);
        console.log("If a songs preview is available, it can be found here: ", previewLink)

        var songLink = (songDetails.external_urls.spotify)
        console.log("If a songs preview is available, it can be found here: ", songLink)

        var searchResult = (songSearched + '\n' + artist + '\n' + album + '\n' + song + '\n' + previewLink + '\n' + songLink + '\n')
        console.log(searchResult)
    });
}
spotifySearch()