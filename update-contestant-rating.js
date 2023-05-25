const fs = require("fs");

const contestantsJson = fs.readFileSync("./data/contestants.json");
const contestants = JSON.parse(contestantsJson);

const contestantId = Number(process.argv[2]);
const newRating = Number(process.argv[3]);

const updatedContestants = contestants.map(contestant => {
    if (contestant.id === contestantId) {
        contestant.rating = newRating;
    }

    return contestant;
})

fs.writeFileSync("./data/contestants.json", JSON.stringify(updatedContestants));