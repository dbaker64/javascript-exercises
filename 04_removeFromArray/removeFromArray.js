const removeFromArray = function(main, ...args) {
    //loop through array to be deleted
    //within that loop loop through main array
    //find values that need to be removed
    //delete them
    //iterate through array again, and any elements that aren't strictly equal to undefined should be taken out
    //put those elements into a new array
    //return that new array

    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < main.length; j++){
            if(args[i] === main[j]){
                delete main[j];
            }
        }
    }

    let output = [];

    for(let i = 0; i < main.length; i++){
        if(main[i] !== undefined){
            output.push(main[i]);
        }
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
