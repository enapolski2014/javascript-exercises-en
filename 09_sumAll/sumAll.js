/*
item.isInteger() to filter out strings
if (item > 0) to filter out negative number
sort into new arr
    arr.sort((a, b) => a - b);
for loop to add values to array
    var list = [];
    for (var i = lowEnd; i <= highEnd; i++) {
        list.push(i);
    }
reduce array with addition
    list.reduce((sum, current) => sum =current);

*/

const sumAll = function(a, b) {
    let arr = [a, b];
    if (!Number.isInteger(arr[0]) || !Number.isInteger(arr[1])) {
        return 'ERROR';
    } else if (arr[0] < 0 || arr[1] < 0) {
        return 'ERROR';
    } else {
        // console.log(arr);
        let sorted = arr.sort((a, b) => a - b);
        // console.log(sorted);
        let list = [];
        for (var i = sorted[0]; i <= sorted[1]; i++) {
            list.push(i);
        }
        // console.log(list);
        let total = list.reduce((sum, current) => sum + current);
        // console.log(total);
        return total;
    }
};

// could have used addition assignment operator (+=) in the loop instead of reduce for shorter code

// Do not edit below this line
module.exports = sumAll;
