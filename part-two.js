// Exercise 11: Declare variables
var myYearOfBirth = 1990;
var studyingCodeHours = 2;


//  Exercise 12: Assigning values to var
var price = 100;
console.log(price);

price = 150;
console.log(price);


// Execise 13: Incrementing variables
var seconds = 7200;
var jackpot = 10000;

seconds += 60;
console.log(seconds);

jackpot *= 2;
console.log(jackpot);


// Exercise 14: Decrementing variables
var counter = 10;
console.log(counter);
counter--;
counter--;
counter--;
console.log(counter);


// Exercise 15: Math.random
var randomNumber1 = Math.random();
console.log(randomNumber1);

var randomNumber2 = Math.random();
console.log(randomNumber2);

var randomNumber3 = Math.random();
console.log(randomNumber3);

var randomNumber4 = Math.random();
console.log(randomNumber4);

var randomNumber5 = Math.random();
console.log(randomNumber5);


// Exercise 16: Math.random and Math.ceil
//var randomIntegerNumber = Math.random() * 42;

console.log(Math.ceil(Math.random() * 42));


// Exercise 17: Strings in var
var myFirstName = 'Mariana';
console.log(myFirstName);


// Exercise 18: Adding two different strings
var sentence1 = 'to be';
var sentence2 = 'or not';
console.log(sentence1 + ' ' + sentence2 + ' ' + sentence1);


// Exercise 19: Strings and numbers
var javaScriptBirthYear = 1995;
var sentence = 'JavaScript has been rocking for this many years: ';

console.log(sentence + (2022 - javaScriptBirthYear));


// Exercise 20: String method .trim()
var quote = '          OH capTAIN, mY cApTaIn.         ';

var trimmedQuote = quote.trim();
console.log(trimmedQuote.toLowerCase());


// Exercise 21: String method - slice and charAt
var bigWord = 'supercalifragilisticexpialidocious';

var firstWord = bigWord.slice(27);
var secondWord = bigWord.slice(24, 27);
var thirdWord = bigWord.slice(20, 24);
var fourthWord = bigWord.slice(15, 20);
var fifthWord = bigWord.slice(9, 15);
var sixthWord = bigWord.slice(5, 9);
var seventhWord = bigWord.charAt(4) + bigWord.slice(1, 3) + bigWord.slice(32);

console.log(firstWord + '-' + secondWord + '-' + thirdWord + '-' + fourthWord + '-' + fifthWord + '-' + sixthWord + '-' + seventhWord);

