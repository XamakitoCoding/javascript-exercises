const reverseString = function(input) {
    let inputLength = input.length;
    let reversedInput = '';

    for (i = (inputLength - 1); i >= 0; i--) {
        reversedInput += input.charAt(i);
    }
    return reversedInput;
};

// Do not edit below this line
module.exports = reverseString;
