// Exercise 22: Booleans
var iAmAStarWarsFan = false;
var theLastTrilogyRuinedEverything = true;
var jarJarBinksIsTheBestCharacterEver = true;


// Exercise 23: Comparison operators
var speed = 90;
var busExplodes = speed < 80;

console.log(busExplodes);


// Exercise 24: Booleans with logical operators - And, Or, Not
var you = true;
var batman = true;
var superman = true;
var kryptonite = false;

var winRound1 = you && batman;
console.log(winRound1);

var winRound2 = batman || superman;
console.log(winRound2);

var winRound3 = superman && kryptonite;
console.log(winRound3);


// Exercise 25: Logical and comparison operators
var chocolate;
var strawberry;
var stracciatella;
var caramel;

var iceCream = (strawberry && chocolate || strawberry && stracciatella) || !caramel;
console.log(iceCream);


// Exercise 26: Ternary operator
const luck = parseInt(Math.floor(Math.random() * 100));

const alias = (luck > 90) ? 'Mr. Purple':'Mr. Pink';
console.log(alias);


// Exercise 27: if Conditional statements
var weather = 'rainy';
var isHappy = true;

if (weather === 'rainy' && isHappy === true) {
    console.log('I am singing in the rain, just singing in the rain!');
}


// Exercise 28: If else statements
var weather = 'rainy';
var isHappy = true;

if (weather === 'rainy' && isHappy === true) {
    console.log('I am singing in the rain, just singing in the rain!');
} else {
    console.log('I don\'t want to sing today!');
}


// Exercise 29: Else-if statement
var charmanderLevel = Math.ceil(Math.random() * 100);

if (charmanderLevel >= 0 && charmanderLevel <= 15) {
    console.log('Charmander');
} else if (charmanderLevel >= 16 && charmanderLevel <= 35){
    console.log('Charmeleon');
} else if (charmanderLevel >= 36 && charmanderLevel <= 100) {
    console.log('Charizard');
} else {
    console.log('Charizard is as good as it gets');
}


// Exercise 30: Switch statement
var dieRoll = Math.ceil(Math.random() * 6);

switch (dieRoll) {
    case 1:
    	console.log('You roll a 1.');
        break;
    case 2:
    	console.log('You roll a 2.');
        break;
    case 3:
        console.log('You roll a 3.');
        break;
    case 4:
    	console.log('You roll a 4.');
        break;
    case 5:
        console.log('You roll a 5.');
        break;
    case 6:
		console.log('You roll a 6.');
        break;
    default:
    	console.log('This die only has 6 sides man...');
        break;
}

