const fs = require("fs");

const contestantsJson = fs.readFileSync("./data/contestants.json");
const contestants = JSON.parse(contestantsJson);

const parameters = process.argv[2];
console.log(parameters);

const [ key, value ] = parameters.split("=");

console.log(key);
console.log(value);

const matchingContestants = contestants.filter((contestant) => {
    return contestant[key] === value;
})

console.log(matchingContestants);