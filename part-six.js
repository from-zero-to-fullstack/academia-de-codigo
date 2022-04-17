// Exercise 47: Nested Arrays
var filmCharacters = [
    ['Vito', 'Michael', 'Sonny', 'Freddo'],
    ['Mia', 'Vincent', 'Jules', 'Butch'],
    ['Bella', 'Edward', 'Jacob', 'Carlisle'],
    ['James', 'M', 'Moneypenny', 'Felix']
];

for (let i = 0; i < filmCharacters.length; i++) {
    // inside this loop we have access to each array, with filmCharacters[i], so let's iterate each one
    let innerArrayNames = filmCharacters[i];
    for (let j = 0; j < innerArrayNames.length; j++) { // notice how the i variable is already in use, so we'll use j
        if (innerArrayNames[j].startsWith('M'));
        console.log(innerArrayNames[j]);
    }
}


//aceite na plataforma
var filmCharacters = [
    ['Vito', 'Michael', 'Sonny', 'Freddo'],
    ['Mia', 'Vincent', 'Jules', 'Butch'],
    ['Bella', 'Edward', 'Jacob', 'Carlisle'],
    ['James', 'M', 'Moneypenny', 'Felix']
];

for (let i = 0; i < filmCharacters.length; i++) {

    for (let j = 0; j < filmCharacters[i].length; j++) {

        if (filmCharacters[i][j].startsWith('M')) {
            console.log(filmCharacters[i][j]);
        }
    }
}


// Exercise 48: Nested Loops
var filmCharacters = [
    ['Vito', 'Michael', 'Sonny', 'Freddo'],
    ['Mia', 'Vincent', 'Jules', 'Butch'],
    ['Bella', 'Edward', 'Jacob', 'Carlisle'],
    ['James', 'M', 'Moneypenny', 'Felix']
];

for (let i = 0; i < filmCharacters.length; i++) {

for (let j = 0; j < filmCharacters[i].length; j++) {

if (filmCharacters[i][j].startsWith('M')) {
    console.log(filmCharacters[i][j]);
}
}
}


// Exercise 49: Functions
var double = function (x) {
    console.log(x * 2);
};

double(4);
double(10);
double(79);


// Exercise 50: Function parameters
function personalGreeting(name) {
    console.log('Good morning, ' + name);
}

personalGreeting('Clarice'); // outputs Good morning, Clarice
personalGreeting('Dave'); // outputs Good morning, Dave
personalGreeting('Vietnam'); // outputs Good morning, Vietnam


// Exercise 51: Return values 
// There's an arithmetic operator, we've talked about ages ago, that will probably be very helpful now *wink wink*

let isEven = function (number) {
    return (number % 2 === 0);
};


// Exercise 52: Function scope
var counter = 0;

var incrementCounterBy = function(amount){
    counter += amount;
};

var resetCounter = function(){
    counter = 0;
};
