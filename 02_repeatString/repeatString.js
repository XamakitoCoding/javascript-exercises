const repeatString = function(string, num) {
    const stringArray = [];

    for (i = 0; i < num; i++) {
        stringArray.push(string);
    }

    return stringArray.join('');
};

// Do not edit below this line
module.exports = repeatString;
