const repeatString = function(string, num) {
    const stringArray = [];

    if (num >= 0) {
        for (i = 0; i < num; i++) {
            stringArray.push(string);
        }
    } else {
        stringArray.push('ERROR');
    }

    return stringArray.join('');
};

// Do not edit below this line
module.exports = repeatString;
