// Exercise 55: Introduction to Objects
var wizard = {
    name: 'Harry Potter',
    nickname: 'the boy who lived'
};


// Exercise 56: Accessing objects
var wizard = {
    name: 'Harry Potter',
    nickname: 'the boy who lived'
};

console.log(wizard.name + ', ' + wizard.nickname);


// Exercise 57: Reassign properties
var wizard = {
    name: 'Harry Potter',
    nickname: 'the boy who lived'
};

wizard.nickname = 'the chosen one';

console.log(wizard);


// Exercise 58: Methods
var wizard = {
    makeSpell: function() {
        console.log('Im a wizard!');
    },
    playQuidditch: function() {
        console.log('I like to play Quidditch!');
    }
};

wizard.makeSpell();

wizard.playQuidditch();


// Exercise 59: Accessing objects
var fellowship = {
    place: 'Middle-earth',
    ringBearer: {
        name: 'Frodo Baggins',
        race: 'hobbit'
    }
};

console.log(fellowship.ringBearer.race);


// Exercise 60: Storing objects inside arrays as objects' properties
var characters = [
    {
        quote: 'A wizard is never late, nor is he early. He arrives precisely when he means to.',
        name: 'Gandalf'
    },
    {
        quote: 'One does not simply walk into Mordor',
        name: 'Boromir'
    },
    {
        quote: 'My precious.',
        name: 'Gollum'
    }
];

console.log(characters[1].name + ' wisely said ' +'"'+ characters[1].quote+'"');


// Exercise 61: Objects & Arrays
var fellowship = {
    destination: 'Mount Doom',
    mission: 'destroy the one ring',
    members: [
        'Frodo',
        'Sam',
        'Gandalf',
        'Legolas',
        'Gimli',
        'Aragorn',
        'Boromir',
        'Merry',
        'Pippin'
    ]
};

console.log(fellowship.members[0] + ' and ' + fellowship.members[1] + ' got to ' + fellowship.destination);


// Exercise 62: Objects & Arrays
var fellowship = {
    destination: 'Mount Doom',
    place: 'Middle-earth',
    mission: 'destroy the one ring',
    members: [
        {
            race: 'hobbit',
            name: ['Frodo', 'Sam', 'Merry', 'Pippin'],
        },
        {
            race: 'elf',
            name: 'Legolas'
        },
        {
            race: 'dwarf',
            name: 'Gimli'
        },
        {
            race: 'men',
            name: ['Aragorn', 'Boromir']
        }
    ]
};

console.log(fellowship.members[0].name[3]);


// Exercise 63: Functions as arguments
var add = function(operand1, operand2) {
    return operand1 + operand2;
};

var calculate = function(operand1, operand2, operation){
    var result = operation(operand1, operand2);
        console.log(result);
   };

calculate(1, 9, add);


// Exercise 64: Functions as arguments
var add = function(operand1, operand2) {
    return operand1 + operand2;
};

var calculate = function(operand1, operand2, operation) {
    var result = operation(operand1, operand2);
    console.log(result);
};

var multiply = function(operand1, operand2) {
    return operand1 * operand2;
};

calculate(1, 9, add);
calculate(1, 9, multiply);


// Exercise 65: Celebration!! Don't need to write any code
var betaCodeCadet = {
    name: 'YOUR NAME HERE',
    bootcamp: 'BOOTCAMP LOCATION',
    readyForWorkshop: false,
    whatNow: ['Eloquent Javascript', 'Codecademy', 'MDN JavaScript Tutorial', 'Google it']
  };
  
  var messages = [
    'Top props && mad respect, <Beta Code Cadet> ' + betaCodeCadet.name,
    'Hard work, attention to detail && unconditional resilience have taken you this far, one step away from becoming a full-fledged <Code Cadet> in ' + betaCodeCadet.bootcamp,
    'Now... Do you think you have what it takes to ace it at the feared workshop stage?! I do. // Providing, of course, you continue to study && practice everyday until we finally meet! < ;) / >'
  ];
  
  function celebrate() {
    
    for (var index = 0; index < messages.length; index++) {
      console.log(messages[index]);
    }
      
  }
  
  celebrate();
  