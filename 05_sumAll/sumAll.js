const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) || num1 + 1 != Number(num1) + 1 || num2 + 1 != Number(num2) + 1) {
        return "ERROR";
    }
    else {
        if (num1 < num2){
            for (let i = num1; i <= num2; i++) {
                sum += i;
            }
        }
        else if (num2 < num1) {
            for (let i = num2; i <= num1; i++) {
                sum += i;
            }
        }
        else {
            sum = num1;
        }
        return sum; 
    }
};

// Do not edit below this line
module.exports = sumAll;
