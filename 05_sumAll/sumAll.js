const sumAll = function(min, max) {
    //check to make sure parameters are positive integers, return error if not
    //loop between both numbers, += to sum variable
    //return sum variable
    if(min < 0 || max < 0){
        return "ERROR";
    }else if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }
    if(min > max){
        let minTransfer = min;
        let maxTransfer = max;
        min = maxTransfer;
        max = minTransfer;
    }
    let sum = 0;
    for(let i = min; i <= max; i++){
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
