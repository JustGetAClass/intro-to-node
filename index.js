const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
var myVillainName = supervillains.random();

console.log(`Superhero: ${mySuperheroName} Vs SuperVillain: ${myVillainName}`);
