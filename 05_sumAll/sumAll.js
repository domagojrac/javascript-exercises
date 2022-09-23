const sumAll = function() {
    let sum = 0
    if (typeof(arguments[0]) === "number" && typeof(arguments[1]) ==="number" && arguments[0] >= 0 && arguments[1] >= 0) {
        if (arguments[1] < arguments[0]) {
            for (let i = arguments[1]; i <= arguments[0]; i++) {
                sum = sum + i;
            }
            return sum;
        }
        else {
            for (let i = arguments[0]; i <= arguments[1]; i++) {
                sum = sum + i;
            }
            return sum;
        }
    }

    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
