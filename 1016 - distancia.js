var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var distancia = parseInt(lines[0]);
var minutos = 2;

var tempo = distancia*minutos;

console.log(tempo + " minutos");

