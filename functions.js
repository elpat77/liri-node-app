const movieTitle = () => {

    const arguements = process.argv;
    let argArr = [];

    for (let i = 3; i < arguements.length; i++) {
        argArr.push(arguements[i]);
        console.log(process.argv[2]);

    }
    //will join the array by If inserting a + sign instead of the empty spaces
    return argArr.join("+");

};

module.exports = movieTitle