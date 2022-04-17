// Exercise 37: Arrays
const vesperMartini = ['Gordon\'s', 'vodka', 'Kina Lillet', 'ice', 'lemon peel'];

console.log(vesperMartini);


// Exercise 38: Array index
var vesperMartini = ['Gordons', 'vodka', 'Kina Lillet', 'ice', 'lemon peel'];

console.log('The first ingredient is: ' + vesperMartini[0]);


// Exercise 39: Replacing values in Arrays
var cakeIngredients = ['flour', 'baking powder', 'sugar', 'eggs', 'butter', 'chocolate'];

cakeIngredients[5] = 'lemon';

console.log(cakeIngredients);


// Exercise 40: Arrays length
const movieList = ['Rei Leão', 'Madagascar', 'Marley e eu', 'Rio', 'A idade do gelo'];

console.log(movieList.length);


// Exercise 41: Loop inside Arrays
var powerRangers = ['Red', 'Black', 'Yellow', 'Pink', 'Blue'];

for (let i = 0; i < powerRangers.length; i++){
    console.log(i + ': ' + powerRangers[i]);
}


// Exercise 42: Array methods
var xMen = ['Professor X', 'Cyclops', 'Beast', 'Iron-Man', 'Hobgoblin'];
var freelancers = ['Legion', 'Magneto'];

xMen.pop();
xMen.pop();

for (let i = 0; i < xMen.length; i++) {
    freelancers.push(xMen[i]);
}
//console.log(freelancers);


// Exercise 43: Data types
let soTypical = 1980;

console.log(typeof soTypical);


// Exercise 44: Turn Strings into Arrays
var jediCouncil = 'Yoda,Mace Windu,Plo Koon,Obi-Wan Kenobi,Anakin Skywalker';

var jediNames = jediCouncil.split(',');

console.log(jediNames[2]);


// Exercise 45: Turn Arrays into Strings
var randomWords = ['There', 'must', 'be', 'a', 'better', 'way'];

var newString = randomWords.join(' ');

console.log(newString);