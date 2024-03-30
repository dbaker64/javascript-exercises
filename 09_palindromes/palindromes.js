const palindromes = function (string) {
    string = string.trim();
    string = string.toLowerCase();
    let newString;
    let newNewString;
    let reversedString;
    let numReplaceRan = false;
    let puncReplaceRan = false;
    let regex = /^[a-zA-Z]+$/;
    let removedSpacesString = string
        .split(" ")
        .join("");
    for (let i = 0; i < removedSpacesString.length; i++) {
        if (typeof removedSpacesString.charAt(i) === 'number') {
            newString = removedSpacesString.replace(string.charAt(i), "");
            numReplaceRan = true;
        }
    }
    if (!numReplaceRan) {
        newString = removedSpacesString;
    }
    for (let i = 0; i < newString.length; i++) {
        if (!regex.test(newString.charAt(i))) {
            newNewString = newString.substring(0, i) + newString.substring(i + 1);
            puncReplaceRan = true;
        }
    }
    if (!puncReplaceRan) {
        newNewString = newString;
    }
    for (let i = newNewString.length - 1; i > -1; i--) {
        reversedString = reversedString + newNewString.charAt(i);
    }
    console.log(reversedString);
    if (reversedString === newNewString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
