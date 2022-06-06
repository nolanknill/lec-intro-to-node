const fs = require('fs');
const { v4: uuid } = require('uuid');

let history = JSON.parse(fs.readFileSync("./data/casing-history.json"));

// how can we update our objects, adding an id
// Loop through the object
for (const singleHistory of history) {
    if (!singleHistory.id) {
        // If there is NOT an ID key -> add a UUID!
        singleHistory.id = uuid();
    }
}

fs.writeFileSync(
    "./data/casing-history.json",
    JSON.stringify(history)
);