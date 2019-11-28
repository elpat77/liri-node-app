const concertTitle = () => {

    const arguements = process.argv;
    let argArr = [];

    for (let i = 3; i < arguements.length; i++) {
        argArr.push(arguements[i]);
    }
    return argArr.join("+");

};
module.exports = concertTitle