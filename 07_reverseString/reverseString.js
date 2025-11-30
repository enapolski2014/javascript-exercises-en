const reverseString = function(reverse) {
    return reverse
        .split("")
        .reverse()
        .join("");

};
console.log(reverseString('boop'))
// Do not edit below this line
module.exports = reverseString;
