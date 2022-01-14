const leapYears = function(year) {
    let leap = year / 4;
    let leapYear = true;
    if (leap % 1 === 0){
        if ((year/400) % 1 === 0) {
            return leapYear;
        }
        else if ((year/100) % 1 === 0) {
            return !leapYear;
        }
        return leapYear;
    }
    return !leapYear;
};

// Do not edit below this line
module.exports = leapYears;
