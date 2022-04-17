
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