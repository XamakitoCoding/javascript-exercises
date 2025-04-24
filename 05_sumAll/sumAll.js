const sumAll = function(int1, int2) {

    let sum = 0;

    if (int1 > -1 && int2 > -1 && Number.isInteger(int1) == true && Number.isInteger(int2) == true) {
        if (int1 < int2) {
            for (let i = int1; i <= int2; i++) {
                sum += i; 
            }
        } else {
            for (let i = int2; i <= int1; i++) {
                sum += i; 
            }
        }
    return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
