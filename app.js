const { changeCase } = require("./utils/string-utils");
const fs = require('fs');
const { v4: uuid } = require('uuid');

// uppercase or lowercase a string
// node app.js "Example String" upper => EXAMPLE STRING
// node app.js "Example String" lower => example string
const stringToModify = process.argv[2];
const casing = process.argv[3];

const modifiedString = changeCase(stringToModify, casing)
console.log(modifiedString);

// Read from file to get existing history
// PARSE to javascript the existing history
let history = JSON.parse(fs.readFileSync("./data/casing-history.json"));

// Create the new object
let newHistory = {
    id: uuid(),
    string: stringToModify,
    casing: casing,
    modifiedString: modifiedString
};

// push it onto existing history
history.push(newHistory);

// STRINGIFY array, write back to file!
fs.writeFileSync(
    "./data/casing-history.json",
    JSON.stringify(history)
);