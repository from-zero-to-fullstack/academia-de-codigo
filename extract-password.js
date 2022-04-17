
    let allCharacters = ['a', '-', '~', '1', 'a', '/'];
    let trashCharacters = ['-', '~', '/'];
    let cleanPassword = '';

function extractPassword(allCharacters){  

    for (let i = 0; i < allCharacters.length; i++) {
    
         if (!trashCharacters.includes(allCharacters[i])) {
           cleanPassword += allCharacters[i];           
        }
    }
   return cleanPassword; 
}
const abc = extractPassword(allCharacters);

console.log(abc);


function extractPassword2(array){
    var cleanPassword = [];
        for (let i = 0; i < array.length; i++) {
        var c = array[i];
        if (('a' <= c) && (c <= 'z') || ('A' <= c) && (c <= 'Z') || ('0' <= c) && (c <= '9')) {
            cleanPassword.push(c);
        }
     }
    return cleanPassword.join('');
}

let pw1 = extractPassword2(['a', '-', '~', '1', 'a', '/']);
console.log(pw1);
let pw2 = extractPassword2(['~', 'A', '7', '/', 'C']);
console.log(pw2);



//correto
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