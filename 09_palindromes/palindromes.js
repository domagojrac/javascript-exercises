const palindromes = function (userString) {
    palindromeString = "";
    userStringConverted = "";

    for (let i = userString.length - 1; i >= 0; i--) {
        if (userString.charAt(i).toLowerCase() == userString.charAt(i).toUpperCase()) {
            continue;
        } else {
            palindromeString += userString.charAt(i).toLowerCase();
        };
    };

    for (let i = 0; i < userString.length; i++) {
        if (userString.charAt(i).toLowerCase() == userString.charAt(i).toUpperCase()) {
            continue;
        } else {
            userStringConverted += userString.charAt(i).toLowerCase();
        };
    };


    if (palindromeString == userStringConverted) {
        return true;
    } else {
        return false;
    }; 
};

// Do not edit below this line
module.exports = palindromes;
