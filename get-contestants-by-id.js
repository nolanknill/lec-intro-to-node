// New to node, similar to window object in that it is global
// to a running node script
// console.log(process.argv);
const fs = require("fs");

const contestantsJson = fs.readFileSync("./data/contestants.json");
const contestants = JSON.parse(contestantsJson);

const contestantId = Number(process.argv[2]);

const foundContestant = contestants.find((contestant) => {
    return contestant.id === contestantId;
})

console.log(foundContestant);