// Exercise 54: Hacking task 5 - Two dimensional arrays

function getValidPassword (array) {
    var passcode;
    
    for (let i = 0; i < array.length; i++){
        
        for (let j = 0; j < array[i].length; j++) {
            
            if (array[i][j] % 2 == 0){
                passcode = array[i];
            }
        }
    }
    return passcode;
}

// Improved code:

function getValidPassword (array) {
    var passcode;

    for (let i = 0; i < array.length; i++) {
        let arrayMother = array[i];

        for (let j = 0; j < arrayMother.length; j++){
            if (arrayMother[j] % 2 == 0){
                passcode = arrayMother;
            }
        }
    }
    return passcode;
}