// Exercise 53: Hacking task 4 - functions, loops and conditionals
// extract special characters from array


// code accepted in the Academia de códgio platform
function extractPassword(array) {
    var cleanArray = [];
    for (var i = 0; i < array.length; i++) {
        const item = array[i];
        
        if (isNumber(item) || isLetter(item)) {
            cleanArray.push(array[i]);
        }
    }
    return cleanArray.join('');
}

function isNumber(char) {
    return Number(char) == char;
}

function isLetter(char) {
    return ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'));
}

let array1 = extractPassword(['a', '-','~', '1', 'a', '/']);
console.log(array1);
let array2 = extractPassword(['~', 'A', '7', '/', 'C']);
console.log(array2);



// improved code not accepted, but with good output
var extractPassword = function(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() != array[i].toUpperCase() || array[i]/1 == array[i]){
            newArray.push(array[i]);
        }
    }
    return newArray.join('');
};

let array1 = extractPassword(['a', '-','~', '1', 'a', '/']);
console.log(array1);
let array2 = extractPassword(['~', 'A', '7', '/', 'C']);
console.log(array2);
