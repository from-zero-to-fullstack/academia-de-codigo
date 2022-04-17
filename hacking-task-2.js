// Exercise 36 - Hacking task 2 - While loop

var correctGuesses = 0;
const passwordLength = 4;

while (correctGuesses < 4) {
    let randomNumber = Math.ceil(Math.random() * 3);
    
    if (randomNumber === 1){
        correctGuesses++;
        console.log('Found ' + correctGuesses + ' characters');
    } 
    else if (randomNumber === 2) {
        correctGuesses = 0;
        console.log('Starting over');
    } 
    else if (randomNumber === 3) {
        correctGuesses = correctGuesses;
    }
}
    
if (correctGuesses === passwordLength){
    console.log('Terminal hacked!');
}