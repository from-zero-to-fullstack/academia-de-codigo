// Exercise 46 - Hacking task 3 - conditinals and arrays methods

var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
var newDisk = [];
var corruptionSymbol = 'ø';

for (let i = 0; i < targetDisk.length; i++) {
    if (targetDisk[i] !== corruptionSymbol){
        newDisk.push(targetDisk[i]);
     }
}

console.log(newDisk.join(''));