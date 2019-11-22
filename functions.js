const movieTitle = () => {

    const arguements = process.argv;
    let argArr = [];

    for (let i = 2; i < arguements.length; i++) {
        argArr.push(arguements[i]);

    }
    //will join the array by If inserting a + sign instead of the empty spaces
    return argArr.join("+");

};

module.exports = movieTitle