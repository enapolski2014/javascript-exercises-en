const leapYears = function(year) {
    if (Number.isInteger(year/100) && !Number.isInteger(year/400)) {
        // alert('1');
        return false;
    } else if (Number.isInteger(year/100) && Number.isInteger(year/400)) {
        // alert('2');
        return true;
    } else if (!Number.isInteger(year/4)) {
        // alert ('3')
        return false;
    } else if (Number.isInteger(year/4)) {
        // alert('4');
        return true;
    }

};


console.log(leapYears(1996))

// Do not edit below this line
module.exports = leapYears;
