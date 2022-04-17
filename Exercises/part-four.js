// Exercise 32: While Loop
var target = Math.floor(Math.random() * 11);
var guess = Math.floor(Math.random() * 11);

console.log(target);

while (guess !== target) {
    guess = Math.floor(Math.random() * 11);
    console.log(guess);
}


// Exercise 33: While Loop (countdown)
let countdown = 10;

while (countdown > 0) {
    countdown--;
    console.log(countdown);
}

console.log('Blastoff');


// Exercise 34: Break statement
var target = Math.ceil(Math.random() * 10);
var guess = Math.ceil(Math.random() * 10);
var tries = 5;

console.log(target);

while (tries > 0){
    guess = Math.ceil(Math.random() * 10);
    tries--;
    console.log(guess);
    if (guess == target) {
        console.log(guess);
        break;
    }
}


// Exercise 35: for loop
var number = 42; 

for (let number = 42; number <= 50; number++){
    if (number % 3 === 0){
        console.log(number);
    }
}
