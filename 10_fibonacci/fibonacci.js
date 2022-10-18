const fibonacci = function(num) {
    num = parseInt(num);
    
    if (num < 0) {
        return "OOPS";
    };

    fibonacciSequence = [1, 1];

    for (let i = 2; i < num; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1]);
    };

    return fibonacciSequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
