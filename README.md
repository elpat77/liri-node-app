# Welcome to Liri-Bot!

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, *LIRI is a Language Interpretation and Recognition Interfaces* . LIRI will be a command line node app that takes in parameters and gives you back data.

In order for the app to work, clone this repo. Then install npm with it's dependencies by entering the following commands in Terminal:  
- **npm install** <br>
- **npm init -y** <br>
- **npm install --save node-spotify-api** <br>
- **npm install omdb**


After installing all of the above, you are set to go.

1. __Song Search__ :musical_note: - Search through the ***Spotify Database*** for a specific song. The information you will get back is:
     * Artist(s) name
     * The song's name
     * The album that the song is from
     * A preview link of the song from Spotify
     * A Spotify link to the song

In order to perform this search simply launch your Terminal or Command Line and type :
    `node liri.js spotify-this-song '<song name here>'`

2. __Movie Search__ :movie_camera: - Search through the ***OMDB Database*** for information regarding any movie. The information you will get back is:

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

In order to perform this search simply launch your Terminal or Command Line and type :
    `node liri.js movie-this '<movie name here>'`


3. __Concert Search__ :microphone: - Search through the ***Bands in Town Artist Events Database*** for information regarding futiure events of your favorite artists. The information you will get is:
     * Name of the artist
     * Name of the venue
     * Venue location
     * Date of the Event

In order to perform this search simply launch your Terminal or Command Line and type :
    `node liri.js concert-this <artist/band name here>`


[A preview of the program can be seen here:](./Preview.webm)



