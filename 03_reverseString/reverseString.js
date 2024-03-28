const reverseString = function(string) {
    let output = "";
    for(let i = string.length-1; i > -1; i--){
        output = output + string.charAt(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
