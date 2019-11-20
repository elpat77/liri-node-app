dotenv = require("dotenv").config();


function spotifySearch(searchedSong) {
    var Spotify = require('node-spotify-api');
    var keys = require("./keys");
    var spotify = new Spotify(keys.spotify);

    const url = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx';

    var songName = process.argv.slice(3).join('+');
    if (searchedSong) {
        songName = searchedSong;
    } else if (!songName) {
        songName = 'the sign';
    }

    spotify
        .request(url).
        then(result => {
            // console.log(process.argv);
            console.log("data", result);
            var artist = (result.artists[0].name);
            console.log("The Artist name is", artist)
            var album = (result.album.name);
            console.log("The album name is", album)
            var song = (result.name);
            console.log("The songs name is", song)
            var previewLink = (result.preview_url);
            console.log("If a songs preview is available, it can be found here: ", previewLink)
            var songLink = (result.external_urls.spotify)
            console.log("If a songs preview is available, it can be found here: ", songLink)
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
}
spotifySearch()


// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

// const Params = { type: 'track', query: process.argv[2], limit: 20 };

// spotify.search(Params, function (err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }

//     console.log(data);
// });

// console.log(process.argv);