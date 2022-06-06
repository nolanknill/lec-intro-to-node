const changeCase = (stringToModify, casing) => {
    let modifiedString = "";
    if (casing === "upper") {
        modifiedString = stringToModify.toUpperCase();
    } else if (casing === "lower") {
        modifiedString = stringToModify.toLowerCase();
    } else {
        modifiedString = "Unable to handle casing. Expected 'upper' or 'lower', received " + casing;
    }

    return modifiedString;
} 

module.exports = {
    changeCase
}