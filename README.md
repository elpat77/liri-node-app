# liri-node-app

Welcome to Liri-Bot!

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

in order for the app to work, please install please install npm, by entering the following command in Terminal:  "npm install"

You can use it to search for the following information:
1) Song information
2) Movie information
3) Concert information

1) Song Search - Search through the Spotify Database for a specific song. The information you will get back is:
     * Artist(s) name
     * The song's name
     * The album that the song is from
     * A preview link of the song from Spotify
     * A Spotify link to the song

In order to perform this search simply type:
    `node liri.js spotify-this-song '<song name here>'`

2) Movie Search - Search through the OMDB database for information regarding any movie. The informatiomn you will get back is:

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

In order to perform this e=Search ch, simply type:
    `node liri.js movie-this '<movie name here>'`


3) Concert Search - Search through the Bands in Town Artist Events database for information regarding futiure events of your favorite artists. The information you will get is:
     * Name of the artist
     * Name of the venue
     * Venue location
     * Date of the Event

In order to perform this search simply type:
    `node liri.js concert-this <artist/band name here>`

